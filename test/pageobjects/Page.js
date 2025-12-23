module.exports = class Page {
    /**
    * Abre uma subpágina da página
    * @param path caminho da subpágina (ex: /path/to/page.html)
    */
    open(path) {
        return browser.url(path).then(() => browser.maximizeWindow());
    }
}
