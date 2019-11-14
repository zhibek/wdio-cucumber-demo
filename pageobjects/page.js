import { goToUrl } from '../support/common';

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
}
