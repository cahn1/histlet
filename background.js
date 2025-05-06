let applyIncognito = false;

// Load initial incognito setting
chrome.storage.sync.get({ applyIncognito: false }, (data) => {
  applyIncognito = !!data.applyIncognito;
});

// Listen for popup switch changes
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'UPDATE_INCOGNITO') {
    applyIncognito = !!msg.value;
  }
});

// Listen for new history entries and remove them if not whitelisted
chrome.history.onVisited.addListener(async (historyItem) => {
  // Check if the event is from incognito and if we should apply
  if (historyItem.incognito && !applyIncognito) return;
  const url = historyItem.url;
  if (!url) return;
  chrome.storage.sync.get({ whitelist: [] }, (data) => {
    const whitelist = data.whitelist || [];
    let allowed = false;
    for (const regexStr of whitelist) {
      try {
        const regex = new RegExp(regexStr);
        if (regex.test(url)) {
          allowed = true;
          break;
        }
      } catch (e) {
        // Invalid regex, skip
      }
    }
    if (!allowed) {
      chrome.history.deleteUrl({ url });
    }
  });
});
