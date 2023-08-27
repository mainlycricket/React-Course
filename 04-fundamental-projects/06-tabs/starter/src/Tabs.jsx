const Tabs = ({ tabs, toggleSelectedTab, selectedTab }) => {
  return (
    <div className="btn-container">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          className={index == selectedTab ? "job-btn active-btn" : "job-btn"}
          onClick={() => toggleSelectedTab(index)}
        >
          {tab.company}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
