/**
 * Check if element exists
 *
 * @param {string} selector to be checked
 * @returns {boolean} True if element exists or false if element doesn't exist
 */
export function checkIfElementExists(selector) {
    return $(selector).isExisting();
}

/**
 * Go to URL
 *
 * @param {string} url to go
 */
export function goToUrl(url) {
    console.log(`ACTION: Change URL to "${url}"`);
    browser.url(url);
}

/**
 * Wait x seconds
 *
 * @param {int} seconds to wait
 */
export function wait(seconds = 3) {
    console.warn(
        'WARNING: Fixed sleep being used - avoid unless absolutely necessary!'
    );
    browser.pause(seconds * 1000);
}

/**
 * Click on element
 *
 * @param {string} selector to be clicked
 */
export function clickSelector(selector) {
    console.log(`ACTION: Click "${selector}"`);
    if (!checkIfElementExists(selector)) {
        throw new Error(`Expected element "${selector}" to exist`);
    }
    $(selector).click();
}

/**
 * Set value inside input
 *
 * @param {string} selector to be filled
 * @param {string} value to be inserted
 */
export function inputSelectorValue(selector, value) {
    console.log(`ACTION: Input "${selector}" with "${value}"`);
    if (!checkIfElementExists(selector)) {
        throw new Error(`Expected element "${selector}" to exist`);
    }
    $(selector).setValue(value);
}

/**
 * Send keys
 *
 * @param {string} value to be typed
 */
export function sendKeys(value) {
    console.log(`ACTION: Send keys "${value}"`);
    browser.keys(value);
}

/**
 * Assert URL
 *
 * @param {string} url to be asserted
 * @param {int} seconds to wait
 */
export function checkUrl(url, seconds = 3) {
    browser.waitUntil(
        () => browser.getUrl().includes(url),
        (seconds * 1000),
        `Expected URL "${browser.getUrl()}" to contain "${url}"`
    );
}

/**
 * Check webpage title
 *
 * @param {string} title of webpage
 */
export function checkTitle(title) {
    browser.waitUntil( () => {
        const currentTitle = browser.getTitle();
        expect(currentTitle).to
            .contain(
                title,
                `Expected title "${currentTitle}" to contain "${title}"`
            );
        return true;
    },3000);
}

/**
 * Assert content exists
 *
 * @param {string} selector of content
 * @param {string} content text
 */
export function checkSelectorContent(selector, content) {
    if (!checkIfElementExists(selector)) {
        throw new Error(`Expected element "${selector}" to exist`);
    }
    const actualContent = $(selector).getText();
    expect(actualContent).to.contain(content);
}
