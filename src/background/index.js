// Create a context-menu
chrome.contextMenus.create({
  id: "myContextMenu",
  title: "Summarize ✨",
  contexts: ["all"]
});

// Listen for the click event
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "myContextMenu") {
    // Send a message to the content script to handle the click event
    chrome.tabs.sendMessage(tab.id, { action: "summarize" });
  }
});