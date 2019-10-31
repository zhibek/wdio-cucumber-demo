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
    browser.url(url);
}

/**
 * Click on element
 *
 * @param {string} selector to be clicked
 */
export function clickSelector(selector) {
    if (checkIfElementExists(selector)) {
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
    browser.keys(value);
}

/**
 * Assert URL
 *
 * @param {string} url to be asserted
 */
export function checkUrl(url) {
    const currentUrl = browser.getUrl();
    expect(currentUrl).to
        .contain(
            url,
            `Expected URL "${currentUrl}" to contain "${url}"`
        );
}

/**
 * Check webpage title
 *
 * @param {string} title of webpage
 */
export function checkTitle(title) {
    const currentTitle = browser.getTitle();
    expect(currentTitle).to
        .contain(
            title,
            `Expected title "${currentTitle}" to contain "${title}"`
        );
}

/**
 * Assert content exists
 *
 * @param {string} selector of content
 * @param {string} content text
 * @return {boolean} Return true if text exist otherwise return false
 */
export function checkSelectorContent(selector, content) {
    const text = $(`${selector}'='+${content}`);
    if (!checkIfElementExists(selector)) {
        throw new Error(`Expected element "${selector}" to exist`);
    }
    return text.getText() === content && text.getTagName() === selector;
}
