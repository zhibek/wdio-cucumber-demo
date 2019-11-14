import { Given, When, Then } from 'cucumber';
import {
    clickSelector, checkUrl, checkTitle,
    checkSelectorContent
} from '../support/common';
import GoogleSearch from '../pageobjects/googleSearch.page';

Given(
    /^I am on the Google homepage$/,
    () => {
        GoogleSearch.open();
    }
);

When(
    /^I search for "([^"]*)?"$/,
    (value) => {
        GoogleSearch.search(value);
    }
);

When(
    /^I click on the first search result$/,
    () => {
        const resultSelector = '#search a:first-of-type';
        checkSelectorContent(resultSelector, 'Demo - Wikipedia');
        clickSelector(resultSelector);
    }
);

Then(
    /^the URL is "([^"]*)?"$/,
    (expectedUrl) => {
        checkUrl(expectedUrl);
    }
);

Then(
    /^the page title is "([^"]*)?"$/,
    (expectedTitle) => {
        checkTitle(expectedTitle);
    }
);

Then(
    /^the heading is "([^"]*)?"$/,
    (expectedText) => {
        checkSelectorContent('h1#firstHeading', expectedText);
    }
);
