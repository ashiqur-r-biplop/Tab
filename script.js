// Tab JavaScript code
function handleTab(boxId, TabIndex) {
  const Tab = document.getElementById(TabIndex);
  const TabBox = document.getElementById(boxId);
  const activeTab = Tab?.id;

  // Logging the active tab for debugging
  console.log(Tab);

  // Helper function to remove 'tab-box-active' and 'activeTab' classes
  function resetTabs(tabIndexes, tabIds) {
    tabIndexes.forEach((index) => {
      const tabBox = document.getElementById(index);
      tabBox.classList.remove("tab-box-active");
    });
    tabIds.forEach((id) => {
      const tab = document.getElementById(id);
      tab.classList.remove("activeTab");
    });
  }

  // Add the 'active' class to the selected tab and show the corresponding content box
  function activateTab(tabIndexes, tabIds) {
    resetTabs(tabIndexes, tabIds);
    TabBox.classList.add("tab-box-active");
    Tab.classList.add("activeTab");
  }

  // Tab logic for different tabs
  switch (activeTab) {
    case "tab-1":
    case TabIndex == "tab-1":
      activateTab(
        ["tab-box-2", "tab-box-3", "tab-box-4", "tab-box-5"],
        ["tab-2", "tab-3", "tab-4", "tab-5"]
      );
      break;
    case "tab-2":
      activateTab(
        ["tab-box-1", "tab-box-3", "tab-box-4", "tab-box-5"],
        ["tab-1", "tab-3", "tab-4", "tab-5"]
      );
      break;
    case "tab-3":
      activateTab(
        ["tab-box-1", "tab-box-2", "tab-box-4", "tab-box-5"],
        ["tab-1", "tab-2", "tab-4", "tab-5"]
      );
      break;
    case "tab-4":
      activateTab(
        ["tab-box-1", "tab-box-2", "tab-box-3", "tab-box-5"],
        ["tab-1", "tab-2", "tab-3", "tab-5"]
      );
      break;
    case "tab-5":
      activateTab(
        ["tab-box-1", "tab-box-2", "tab-box-3", "tab-box-4"],
        ["tab-1", "tab-2", "tab-3", "tab-4"]
      );
      break;
  }
}

// Call the handleTab function to activate the first tab on page load
handleTab("tab-box-1", "tab-1");
