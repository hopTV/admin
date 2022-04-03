import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import Table from "../../components/table/Table";

const Customers = () => {
  const [user, setUser] = useState([]);
  const [sortBy, setSortBy] = useState("ASC");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      // setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );

      const getData = res.data;
      console.log(res.data);
      setUser(getData);
      // setLoading(false);
    };
    getUser();
  }, []);

  const handleDelete = (id) => {
    let current_cus = user;
    current_cus = current_cus.filter((item) => item.id !== id);
    setUser(current_cus);

    toast.success("xóa thành công");
  };

  // let history = useHistory();

  console.log(">>>", user);

  // const handleSort = (col) => {
  //   if (sortBy === "ASC") {
  //     const sorted = [...user].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );

  //     setUser(sorted);
  //     // console.log(">>>", user);
  //     setSortBy("DSC");
  //   }
  //   if (sortBy === "DSC") {
  //     const sorted = [...user].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );

  //     setUser(sorted);
  //     setSortBy("ASC");
  //   }
  // };
  const customerListHead = ["", "name", "phone", "email", "address", "action"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.address.city}</td>
      <td>
        <div className="action">
          <span onClick={() => handleDelete(item.id)}>
            <RiDeleteBin6Line />
          </span>
        </div>
      </td>
    </tr>
  );

  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="dashboard">
            <div className="dashboard-body">
              <Table
                limit={10}
                headData={customerListHead}
                bodyData={user}
                renderHead={(item, index) => renderHead(item, index)}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
