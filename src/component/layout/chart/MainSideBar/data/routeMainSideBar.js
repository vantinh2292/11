import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import DashboardChart from "../../DashboardChart";

// Route Views
import LineChart from '../layoutMainSideBar/LineChart'
export default [
  {
    path: "/",
    exact: true,
    layout: DashboardChart,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/user-profile-lite",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/add-new-post",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/errors",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/components-overview",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/tables",
    layout: DashboardChart,
    component: LineChart
  },
  {
    path: "/blog-posts",
    layout: DashboardChart,
    component: LineChart
  }
];
