chrome.webRequest.onBeforeRequest.addListener(function (details) {
    const query = "?" + details.url.split("?")[1]

    if (details.url.includes("shopify")) {
        return {
            redirectUrl: chrome.extension.getURL('/static/shopify.html') + query
        };
    }
    if (details.url.includes("footsites")) {
        return {
            redirectUrl: chrome.extension.getURL('/static/footsites.html') + query
        };
    }
}, {
    urls: ["https://memori/*"]
}, ["blocking"]);
