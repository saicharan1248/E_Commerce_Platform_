import React from "react";
import useFetch from "../utils/useFetch";
import { LineChart } from "./LineChart";
import Loader from "./Loader";

function DashboardComponent() {
  const role = localStorage.getItem("role");
  const { data = [], loading } = useFetch(`analytics/${role}`);

  const stats = data && data.stats;
  const charts = data && data.charts;
  const values = data ? Object.values(stats) : [];
  const Keys = data ? Object.keys(stats) : [];

  const chartCount = data ? Object.keys(charts) : [];

  function DashboardCard(props) {
    return (
      <div className="card border-0">
        <div className="p-4 shadow bg-light">
          <h4 className="text-secondary">{props.title}</h4>
          <h2 className="text-success">{props.count}</h2>
        </div>
      </div>
    );
  }

  return loading ? (
    <Loader />
  ) : (
    <div className="mt-5">
      <div className="container d-flex flex-wrap">
        {Keys.map((x, i) => (
          <div className="p-3 col-12 col-md-3" key={i}>
            <DashboardCard title={x} count={values[i]} />
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row justify-content-between">
          {chartCount.map((x, i) => (
            <div className="col-12 col-md-5 mb-5">
              <LineChart
                mainLabel={x}
                labels={charts[x].labels}
                label={charts[x].title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
