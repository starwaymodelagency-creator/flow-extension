chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url || changeInfo.status !== "complete") return;

  chrome.storage.sync.get(["enabled", "targetUrl"], (res) => {
    if (!res.enabled) return;

    // условие — ты его настраиваешь
    if (tab.url.includes("chaturbate.com")) {
      chrome.tabs.update(tabId, {
        url: res.targetUrl || "https://tango.me/"
      });
    }
  });
});
