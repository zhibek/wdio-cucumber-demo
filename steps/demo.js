import { Given, When, Then } from 'cucumber';
import {
    checkUrl, checkTitle,
    checkSelectorContent
} from '../support/common';
import GoogleSearch from '../pageobjects/googleSearch.page';
import GoogleSearchResult from '../pageobjects/googleSreachResult.page';

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
        GoogleSearchResult.clickOnFirstResult();
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
