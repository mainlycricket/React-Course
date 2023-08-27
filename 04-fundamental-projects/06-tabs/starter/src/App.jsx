import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Job from "./Job";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  let tabs = [];

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );

  if (error) return (
    <section className="jobs-center">
      <h3>Error!</h3>
    </section>
  );

  tabs = jobs.map((job) => {
    return {
      id: job.id,
      company: job.company,
    };
  });

  return (
    <section className="jobs-center">
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        toggleSelectedTab={toggleSelectedTab}
      />
      <Job jobs={jobs} selectedTab={selectedTab} />
    </section>
  );

  function toggleSelectedTab(index) {
    setSelectedTab(index);
  }

  async function fetchJobs() {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
        setError(true);
        return;
      }
      let data = await response.json();
      data = data.sort((a, b) => a.order - b.order);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  }
};
export default App;
