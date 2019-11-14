import Page from './page';

const firstHeadingSelector = 'h1#firstHeading';

/**
 * Wikipedia page object
 */
export default class WikipediaArticle extends Page {
    /**
     * check if the page heading matched
     * @param {expectedText} expectedText string
     */
    static checkHeading(expectedText) {
        super.checkSelectorContent(firstHeadingSelector, expectedText);
    }
}
