import dataUser from "../../assets/JsonData/user-data.json";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Table from "../../components/table/Table";

const Users = () => {
  let newData = dataUser;
  let history = useHistory();

  const [data, setData] = useState(newData);

  const handleDeleteUser = (id) => {
    setData(data.filter((item) => item.id != id));

    toast.success("delete thành công");
  };

  const handleEdit = (id) => {
    history.push(`/admin/user/edit/${id}`);
  };

  const userListHead = ["", "Image", "Name", "Email", "Country", "Action"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <img style={{ width: "60px" }} src={item.image} alt="avartar" />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.country}</td>
      <td>
        <div className="action">
          <span onClick={() => handleEdit(item.id)}>
            <FaEdit />
          </span>
          <span onClick={() => handleDeleteUser(item.id)}>
            <RiDeleteBin6Line />
          </span>
        </div>
      </td>
    </tr>
  );

  return (
    <div>
      <h2 className="page-header">List User</h2>
      <div className="row">
        <div className="col-12">
          <div className="dashboard">
            <div className="dashboard-body">
              <Table
                limit={10}
                headData={userListHead}
                bodyData={data}
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

export default Users;
