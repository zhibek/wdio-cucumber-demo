import { checkSelectorContent, clickSelector } from '../support/common';

const resultSelector = '#search a:first-of-type';

/**
 * google search result page object
 */
export default class googleSearchResult {
    /**
     * click on the first search result
     */
    static clickOnFirstResult() {
        checkSelectorContent(resultSelector, 'Demo - Wikipedia');
        clickSelector(resultSelector);
    }
}
