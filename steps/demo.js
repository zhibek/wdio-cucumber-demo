import { Given, When, Then } from 'cucumber';
import GoogleSearch from '../pageobjects/googleSearch.page';
import GoogleSearchResult from '../pageobjects/googleSreachResult.page';
import WikipediaArticle from '../pageobjects/wikipediaArticle.page';

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
        WikipediaArticle.checkUrl(expectedUrl);
    }
);

Then(
    /^the page title is "([^"]*)?"$/,
    (expectedTitle) => {
        WikipediaArticle.checkTitle(expectedTitle);
    }
);

Then(
    /^the heading is "([^"]*)?"$/,
    (expectedText) => {
        WikipediaArticle.checkHeading(expectedText);
    }
);
