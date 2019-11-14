import Page from './page';

/**
 * Wikipedia page object
 */
export default class WikipediaArticle extends Page {
    /**
     * check if the page heading matched
     * @param {expectedText} expectedText string
     */
    static checkHeading(expectedText) {
        super.checkSelectorContent('h1#firstHeading', expectedText);
    }
}
