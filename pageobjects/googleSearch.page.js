import Page from './page';
import { inputSelectorValue, sendKeys } from '../support/common';

/**
 * Google Search Page
 */
class GoogleSearch extends Page {
    /**
     * open google,com
     */
    static open() {
        super.open('https://www.google.com/');
    }

    /**
     * search for text
     * @param {value} value keyword
     */
    static search(value) {
        inputSelectorValue('#searchform input[type=text]', value);
        sendKeys('\uE007'); // press enter to submit search
    }
}

export default GoogleSearch;
