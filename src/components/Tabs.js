import React, { useState } from "react";
import "./styles/Tabs.css";

const Tabs = ({ tabItems = [] }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  if (tabItems.length <= selectedTabIndex && tabItems.length !== 0) {
    setSelectedTabIndex(0);
  }

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabItems.map(({ label }, index) => {
          const isSelectedTab = index === selectedTabIndex;
          return (
            <div
              className={`tab${isSelectedTab ? " active-tab" : ""}`}
              key={`${label}-${index}`}
              onClick={() => setSelectedTabIndex(index)}
            >
              {label}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {tabItems[selectedTabIndex] && tabItems[selectedTabIndex].tabContent}
      </div>
    </div>
  );
};

export default Tabs;
