import React, { useEffect, useState } from "react";
// import "../assets/css/index.css";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

import Status from "../components/status-admin/Status";
import axios from "axios";

import Chart from "react-apexcharts";
import { Link, NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import ThemeReducer from "../redux/reducer/ThemeReducer";

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(ThemeReducer.getTheme)
  // })

  const [dataStatus, setDataStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );

      let data = res.data;
      setDataStatus(data);
      setLoading(false);

      // console.log(data.length);
    };
    getData();
  }, []);
  let totalProduct = dataStatus.length;

  // console.log(totalProduct);

  const statusCarts = [
    {
      icon: "bx bx-shopping-bag",
      count: "2000",
      title: "Total sales",
    },
    {
      icon: "bx bx-cart",
      count: "2,001",
      title: "Daily visits",
    },
    {
      icon: "bx bx-dollar-circle",
      count: "2.000.000đ",
      title: "Total income",
    },
    {
      icon: "bx bx-store",
      count: totalProduct,
      title: "Total Product",
    },
  ];

  const chartOptions = {
    series: [
      {
        name: "Online Customers",
        data: [40, 70, 20, 90, 30, 80, 91, 50, 36, 20, 70, 35],
      },
      {
        name: "Store Customers",
        data: [40, 90, 60, 10, 70, 40, 91, 20, 56, 90, 10, 75],
      },
    ],
    option: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  const topCustomers = {
    head: ["User", "Total Orders", "Total Spending"],
    body: [
      {
        username: "Minh Thắng",
        order: "110",
        price: "1,000,000",
      },
      {
        username: "Phạm Hiệu",
        order: "30",
        price: "500,000",
      },
      {
        username: "Tiến Thành",
        order: "220",
        price: "5,505,000",
      },
      {
        username: "Trần Hợp",
        order: "20",
        price: "300,000",
      },
      {
        username: "Dương Hùng",
        order: "250",
        price: "6,000,000",
      },
    ],
  };

  const latestOrders = {
    head: ["Order Id", "User", "Date", "Total Price", "Status"],
    body: [
      {
        id: "#G2.1234",
        user: "Minh Thắng",
        date: "15/3/2022",
        price: "500,000",
        status: "shipping",
      },
      {
        id: "#G2.1004",
        user: "Phạm Hiệu",
        date: "25/03/2022",
        price: "2,500,000",
        status: "pending",
      },
      {
        id: "#G2.1023",
        user: "Trần Thành",
        date: "26/03/2022",
        price: "800,000",
        status: "paid",
      },
      {
        id: "#G2.2002",
        user: "trần Hợp",
        date: "12/07/2021",
        price: "20,000",
        status: "refund",
      },
      {
        id: "#G2.2552",
        user: "Dương Hùng",
        date: "14/2/2022",
        price: "140,000",
        status: "paid",
      },
    ],
  };

  const orderStatus = {
    shipping: "primary",
    pending: "warning",
    paid: "success",
    refund: "danger",
  };

  const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;
  const renderCustomerBody = (item, index) => (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  );

  const renderStatusHead = (item, index) => <th key={index}>{item}</th>;
  const renderStatusBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.date}</td>
      <td>{item.price}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
    </tr>
  );

  // const [dataTable, setDataTable] = useState(topCustomers);

  return (
    <div className="container">
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCarts.map((item, index) => (
              <div key={index} className="col-6">
                {/* {item.title} */}

                <Status
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="dashboard full-height">
            {/* chart */}
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.option,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.option,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="dashboard">
            <div className="dashboard-header">
              <h3>Top Custommers</h3>
            </div>
            <div className="dashboard-body">
              {/* list */}
              <Table
                headData={topCustomers.head}
                bodyData={topCustomers.body}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="dashboard-footer">
              <NavLink to="/">View All</NavLink>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="dashboard">
            <div className="dashboard-header">
              <h3> Latest Orders</h3>
            </div>
            <div className="dashboard-body">
              <Table
                headData={latestOrders.head}
                bodyData={latestOrders.body}
                renderHead={(item, index) => renderStatusHead(item, index)}
                renderBody={(item, index) => renderStatusBody(item, index)}
              />
            </div>
            <div className="dashboard-footer">
              <NavLink to="/">View All</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
