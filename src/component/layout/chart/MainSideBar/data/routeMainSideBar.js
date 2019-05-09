import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import SimpleLineChart from "../../MainSideBar/layoutMainSideBar/SimpleLineChart";
import DashedLineChart from "../../MainSideBar/layoutMainSideBar/DashedLineChart";
import VerticalLineChart from "../../MainSideBar/layoutMainSideBar/VerticalLineChart";
import BiaxialLineChart from "../../MainSideBar/layoutMainSideBar/BiaxialLineChart";
import LineChartWithReferenceLines from "../../MainSideBar/layoutMainSideBar/LineChartWithReferenceLines";
import CustomizedDotLineChart from "../../MainSideBar/layoutMainSideBar/CustomizedDotLineChart";
import CustomizedLabelLineChart from "../../MainSideBar/layoutMainSideBar/CustomizedLabelLineChart";
import SynchronizedLineChart from "../../MainSideBar/layoutMainSideBar/SynchronizedLineChart";
import SimpleAreaChart from "../../MainSideBar/layoutMainSideBar/SimpleAreaChart";
import StackedAreaChart from "../../MainSideBar/layoutMainSideBar/StackedAreaChart";
import PercentAreaChart from "../../MainSideBar/layoutMainSideBar/PercentAreaChart";
import SynchronizedAreaChart from "../../MainSideBar/layoutMainSideBar/SynchronizedAreaChart";
import AreaChartFillByValue from "../../MainSideBar/layoutMainSideBar/AreaChartFillByValue";
import SimpleBarChart from "../../MainSideBar/layoutMainSideBar/SimpleBarChart";
import StackedBarChart from "../../MainSideBar/layoutMainSideBar/StackedBarChart";
import PositionAndNegativeBarChart from "../../MainSideBar/layoutMainSideBar/PositionAndNegativeBarChart";
import BarChartWithCustomizedEvent from "../../MainSideBar/layoutMainSideBar/BarChartWithCustomizedEvent";
import LineBarAreaComposed from "../../MainSideBar/layoutMainSideBar/LineBarAreaComposed";
import TwoLevelPieChart from "../../MainSideBar/layoutMainSideBar/TwoLevelPieChart";
import StraightAnglePieChart from "../../MainSideBar/layoutMainSideBar/StraightAnglePieChart";
import TwoSimplePieChart from "../../MainSideBar/layoutMainSideBar/TwoSimplePieChart";
import CustomActiveShapePieChart from "../../MainSideBar/layoutMainSideBar/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "../../MainSideBar/layoutMainSideBar/PieChartWithCustomizedLabel";
import CustomContentOfTooltip from "../../MainSideBar/layoutMainSideBar/CustomContentOfTooltip";

export default [
  {
    layout: SimpleLineChart,
    index: 1,
    title: "Simple Line Chart",
  },
  {
    layout: DashedLineChart,
    index: 2,
    title: "Dashed Line Chart",
  },
  {
    layout: VerticalLineChart,
    index: 3,
    title: "Vertical Line Chart",
  },
  {
    layout: BiaxialLineChart,
    index: 4,
    title: "Biaxial Line Chart",
  },
  {
    layout: LineChartWithReferenceLines,
    index: 5,
    title: "Line Chart With Reference Lines",
  },
  {
    layout: CustomizedDotLineChart,
    index: 6,
    title: "Customized Dot Line Chart",
  },
  {
    layout: CustomizedLabelLineChart,
    index: 7,
    title: "Customized Label Line Chart",
  },
  {
    layout: SynchronizedLineChart,
    index: 8,
    title: "Synchronized Line Chart",
  },
  {
    layout: SimpleAreaChart,
    index: 9,
    title: "Simple Area Chart",
  },
  {
    layout: StackedAreaChart,
    index: 10,
    title: "Stacked Area Chart",
  },
  {
    layout: PercentAreaChart,
    index: 11,
    title: "Percent Area Chart",
  },
  {
    layout: SynchronizedAreaChart,
    index: 12,
    title: "Synchronized Area Chart",
  },
  {
    layout: AreaChartFillByValue,
    index: 13,
    title: "Area Chart Fill By Value",
  },
  {
    layout: SimpleBarChart,
    index: 14,
    title: "Simple Bar Chart",
  },
  {
    layout: StackedBarChart,
    index: 15,
    title: "Stacked Bar Chart",
  },
  {
    layout: PositionAndNegativeBarChart,
    index: 16,
    title: "Pos And Neg Bar Chart",
  },
  {
    layout: BarChartWithCustomizedEvent,
    index: 17,
    title: "Bar Chart Customized Event",
  },
  {
    layout: LineBarAreaComposed,
    index: 18,
    title: "Line Bar Area Composed",
  },
  {
    layout: TwoLevelPieChart,
    index: 19,
    title: "Two Level Pie Chart",
  },
  {
    layout: StraightAnglePieChart,
    index: 20,
    title: "Straight Angle Pie Chart",
  },
  {
    layout: TwoSimplePieChart,
    index: 21,
    title: "Two Simple Pie Chart",
  },
  {
    layout: CustomActiveShapePieChart,
    index: 22,
    title: "Custom Active Shape Pie Chart",
  },
  {
    layout: PieChartWithCustomizedLabel,
    index: 23,
    title: "Pie Chart With Customized Lable",
  },
  {
    layout: CustomContentOfTooltip,
    index: 24,
    title: "Custom Content Of Tooltip",
  },
];
