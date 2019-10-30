import { Given, When, Then } from 'cucumber';


Given(
    /^I am on the Google homepage$/,
    () => {
        const url = 'https://www.google.com/';
        browser.url(url);
    }
);

When(
    /^I search for "([^"]*)?"$/,
    (value) => {
        const inputSelector = '#searchform input[type=text]';
        $(inputSelector).setValue(value);

        const submitSelector = '#searchform input[type=submit]:first-of-type';
        $(submitSelector).click();
    }
);

When(
    /^I click on the first search result$/,
    () => {
        const resultSelector = '#search a:first-of-type';
        $(resultSelector).click();
    }
);

Then(
    /^the URL is "([^"]*)?"$/,
    (expectedUrl) => {
        const currentUrl = browser.getUrl();
        expect(currentUrl).to
            .contain(
                expectedUrl,
                `Expected URL "${currentUrl}" to contain "${expectedUrl}"`
            );
    }
);

Then(
    /^the page title is "([^"]*)?"$/,
    (expectedTitle) => {
        const currentTitle = browser.getTitle();
        expect(currentTitle).to
            .contain(
                expectedTitle,
                `Expected title "${currentTitle}" to contain "${expectedTitle}"`
            );
    }
);
