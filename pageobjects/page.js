/**
 * base page object
 */
export default class Page {
    /**
     * redirect to url
     * @param {path} path url
     */
    static open(path) {
        browser.url(path);
    }
}
