// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (
//     changeInfo.status === "complete" &&
//     tab.url &&
//     tab.url.includes("amazon") &&
//     tab.url.includes("/dp/")
//   ) {
//     chrome.action.setPopup({
//       tabId: tabId,
//       popup: "popup.html",
//     });
//   }
// });
