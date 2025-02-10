chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (changeInfo.status === "complete" && tab.url.includes("amazon.com")) {
    chrome.action.show(tabId);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: "amazon" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ]);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("amazon.com")) {
    chrome.action.show(tabId); // Show the extension
  }
});
