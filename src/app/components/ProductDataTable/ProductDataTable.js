import React from "react";
import { Table } from 'antd';
import "./style.css";

export const ProductDataTable = ({ salesData }) => {
  const columns = [
    {
      title: 'Week Ending',
      dataIndex: 'weekEnding',
      sorter: {
        compare: (a, b) => {
          const date1 = new Date(a.weekEnding);
          const date2 = new Date(b.weekEnding);

          return date1.getTime() - date2.getTime()
        },
      },
    },
    {
      title: 'Retail Sales',
      dataIndex: 'retailSales',
      sorter: {
        compare: (a, b) => a.retailSales - b.retailSales,
      },
    },
    {
      title: 'Wolesale Sales',
      dataIndex: 'wholesaleSales',
      sorter: {
        compare: (a, b) => a.wholesaleSales - b.wholesaleSales,
      },
    },
    {
      title: 'Units Sold',
      dataIndex: 'unitsSold',
      sorter: {
        compare: (a, b) => a.unitsSold - b.unitsSold,
      },
    },
    {
      title: 'Retailer Margin',
      dataIndex: 'retailerMargin',
      sorter: {
        compare: (a, b) => a.retailerMargin - b.retailerMargin,
      },
    },
  ];
  return (
    <div className="table-content">
      <Table columns={columns} dataSource={salesData} />
    </div>
    )
}