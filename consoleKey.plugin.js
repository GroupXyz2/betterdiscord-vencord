/**
 * @name OpenConsole
 * @author GroupXyz
 * @version 1.0.0
 * @description Öffnet die Entwicklerkonsole mit Strg+Umschalt+I.
 * @website https://github.com/GroupXyz2
 * @source https://github.com/GroupXyz2/betterdiscord/consoleKey.plugin.js
 * @updateUrl https://raw.githubusercontent.com/GroupXyz2/betterdiscord/refs/heads/main/consoleKey.plugin.js
 */

module.exports = class OpenConsole {
    start() {
        document.addEventListener("keydown", this.openConsole);
    }

    stop() {
        document.removeEventListener("keydown", this.openConsole);
    }

    openConsole(event) {
        // Check if the pressed keys are Ctrl + Shift + I
        if (event.ctrlKey && event.shiftKey && event.key === "I") {
            // Open the developer tools
            require("electron").remote.getCurrentWindow().toggleDevTools();
        }
    }
};

