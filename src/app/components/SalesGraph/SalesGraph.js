import React from "react";
import { Chart } from "react-charts";

import "./style.css"

export const SalesGraph = ({salesData}) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: processSalesData(salesData),
      },
      
    ],
    [salesData]
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  )
  return (
    <div className="sales-graph-content">
      <div className="title">
        Retail Sales 
      </div>
      <div style={{ height: "600px"}}>
        <Chart data={data} axes={axes} />
      </div>
    </div>
  )
}

const processSalesData = (salesData) => {
  return salesData.map(point => {
    const timeStamp = (new Date(point.weekEnding)).getTime();
    return {
      x: timeStamp,
      y: point.retailSales
    }
  })
}