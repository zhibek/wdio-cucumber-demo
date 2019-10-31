import { Given, When, Then } from 'cucumber';
import {goToUrl, clickSelector, inputSelectorValue, checkUrl, checkTitle} from '../support/common';

Given(
    /^I am on the Google homepage$/,
    () => {
        goToUrl('https://www.google.com/')
    }
);

When(
    /^I search for "([^"]*)?"$/,
    (value) => {
        inputSelectorValue('#searchform input[type=text]', value);
        clickSelector('#searchform input[type=submit]:first-of-type');
    }
);

When(
    /^I click on the first search result$/,
    () => {
        const resultSelector = '#search a:first-of-type';
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
