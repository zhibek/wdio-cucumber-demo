import {
    goToUrl, checkUrl, checkTitle, checkSelectorContent
} from '../support/common';

/**
 * base page object
 */
export default class Page {
    /**
     * redirect to url
     * @param {path} path url
     */
    static open(path) {
        goToUrl(path);
    }

    /**
     * check if url matched
     * @param {expectedUrl} expectedUrl string
     */
    static checkUrl(expectedUrl) {
        checkUrl(expectedUrl);
    }

    /**
     * check if page title matched
     * @param {expectedTitle} expectedTitle string
     */
    static checkTitle(expectedTitle) {
        checkTitle(expectedTitle);
    }

    /**
     * check if Text matched
     * @param {selector} selector string
     * @param {expectedText} expectedText string
     */
    static checkSelectorContent(selector, expectedText) {
        checkSelectorContent(selector, expectedText);
    }
}
