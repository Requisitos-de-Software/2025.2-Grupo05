// Função anônima que encapsula a lógica do plugin para evitar conflitos de escopo.
const darklightThemePlugin = (hook, vm) => {

    // 1. CONFIGURAÇÃO PADRÃO DO TEMA
    // Este objeto contém todas as variáveis de estilo para os modos light e dark.
    let themeConfig = {
        siteFont: "PT Sans",
        defaultTheme: "dark",
        codeFontFamily: "Roboto Mono, Monaco, courier, monospace",
        bodyFontSize: "17px",
        dark: {
            accent: "#42b983",
            toogleBackground: "#ffffff",
            background: "#091a28",
            textColor: "#b4b4b4",
            codeTextColor: "#ffffff",
            codeBackgroundColor: "#0e2233",
            borderColor: "#0d2538",
            blockQuoteColor: "#858585",
            highlightColor: "#d22778",
            sidebarSublink: "#b4b4b4",
            codeTypeColor: "#ffffff",
            coverBackground: "linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%, hsl(181, 100%, 85%) 100%)",
            toogleImage: "url(img/icone-light.png)"
        },
        light: {
            accent: "#42b983",
            toogleBackground: "#091a28",
            background: "#ffffff",
            textColor: "#34495e",
            codeTextColor: "#525252",
            codeBackgroundColor: "#f8f8f8",
            borderColor: "rgba(0, 0, 0, 0.07)",
            blockQuoteColor: "#858585",
            highlightColor: "#d22778",
            sidebarSublink: "#505d6b",
            codeTypeColor: "#091a28",
            coverBackground: "linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%, hsl(181, 100%, 85%) 100%)",
            toogleImage: "url(img/icone-dark.png)"
        }
    };

    // 2. MESCLAR CONFIGURAÇÕES DO USUÁRIO
    // Verifica se o usuário forneceu configurações personalizadas em 'window.$docsify.darklightTheme'.
    if (vm.config.hasOwnProperty("darklightTheme")) {
        const userConfig = vm.config.darklightTheme;

        // Mescla configurações gerais (fora de 'light' e 'dark')
        for (const [key, value] of Object.entries(userConfig)) {
            if (key !== "light" && key !== "dark" && key !== "defaultTheme") {
                themeConfig[key] = value;
            }
        }

        // Mescla configurações específicas do tema 'dark'
        if (userConfig.hasOwnProperty("dark")) {
            for (const [key, value] of Object.entries(userConfig.dark)) {
                themeConfig.dark[key] = value;
            }
        }

        // Mescla configurações específicas do tema 'light'
        if (userConfig.hasOwnProperty("light")) {
            for (const [key, value] of Object.entries(userConfig.light)) {
                themeConfig.light[key] = value;
            }
        }
    }

    // Aplica as configurações gerais como variáveis CSS no elemento <html>
    for (const [key, value] of Object.entries(themeConfig)) {
        if (key !== "light" && key !== "dark") {
            document.documentElement.style.setProperty("--" + key, value);
        }
    }

    // 3. DETECTAR PREFERÊNCIA DO SISTEMA OPERACIONAL
    // Define o tema padrão com base na preferência de esquema de cores do sistema do usuário.
    const osMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (osMedia.matches) {
        themeConfig.defaultTheme = "dark";
    } else {
        themeConfig.defaultTheme = "light";
    }
    
    // 4. FUNÇÃO PARA APLICAR O TEMA
    // 'themeName' pode ser "light" ou "dark".
    const setTheme = (themeName) => {
        // Salva a preferência no armazenamento local do navegador.
        localStorage.setItem("DARK_LIGHT_THEME", themeName);
        themeConfig.defaultTheme = themeName;

        const theme = themeName === "light" ? themeConfig.light : themeConfig.dark;

        // Itera sobre as propriedades do tema escolhido e as aplica como variáveis CSS.
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty("--" + key, value);
        }

        // Informa ao navegador qual esquema de cores está ativo (útil para estilos padrão de elementos).
        document.documentElement.style.setProperty("color-scheme", themeName);
    };

    // 5. GANCHOS (HOOKS) DO DOCSIFY
    // 'hook.afterEach' é executado após cada mudança de página.
    hook.afterEach((html, next) => {
        // Adiciona o HTML do botão de alternância de tema ao conteúdo da página.
        const buttonHTML = '<div id="docsify-darklight-theme"><p>.</p></div>';
        next(buttonHTML + html);
    });

    // 'hook.doneEach' é executado após a página ser totalmente renderizada.
    hook.doneEach(() => {
        // Verifica se há um tema salvo no armazenamento local.
        const savedTheme = localStorage.getItem("DARK_LIGHT_THEME");

        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else {
            // Se não houver, aplica o tema padrão (que foi definido pela preferência do SO).
            setTheme(themeConfig.defaultTheme);
        }

        // Adiciona o evento de clique ao botão de alternância.
        const toggleButton = document.getElementById("docsify-darklight-theme");
        if (toggleButton) {
            toggleButton.addEventListener("click", () => {
                const newTheme = themeConfig.defaultTheme === "light" ? "dark" : "light";
                setTheme(newTheme);
            });
        }
    });
};

// Adiciona o plugin à lista de plugins do Docsify.
// O 'concat' garante que não sobrescrevemos outros plugins que possam existir.
window.$docsify.plugins = [].concat(darklightThemePlugin, window.$docsify.plugins);