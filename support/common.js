
export function goToUrl(url){
    browser.url(url);
};

export function clickSelector(selector){
    const submitSelector = selector;
    $(submitSelector).click();
};

export function inputSelectorValue(selector, value){
    const inputSelector = selector;
    $(inputSelector).setValue(value);
};

export function checkUrl(url){
    const currentUrl = browser.getUrl();
    expect(currentUrl).to
        .contain(
            url,
            `Expected URL "${currentUrl}" to contain "${url}"`
        );
};

export function checkTitle(title){
    const currentTitle = browser.getTitle();
        expect(currentTitle).to
            .contain(
                title,
                `Expected title "${currentTitle}" to contain "${title}"`
            );
};

// checkSelectorContent(selector, content)

// checkIfElementExists()