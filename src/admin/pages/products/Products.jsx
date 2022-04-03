import axios from "axios";
// import { render } from "node-sass";
import React, { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );
      const newData = res.data;
      setProducts(newData);
    };
    getProducts();
  }, []);

  console.log(products);

  const handleClickAdd = () => {};
  const handleEdit = (id) => {};
  const handleDelete = (id) => {};

  const productsHead = ["", "Image", "Name", "Category", "Price", "Action"];

  const renderProductHead = (item, index) => <th key={index}>{item}</th>;

  const renderBodyProduct = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <img src={item.imageURL} alt="image" style={{ width: "60px" }} />
      </td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{Intl.NumberFormat().format(item.prices)}</td>
      <td>
        <div className="action">
          <span onClick={() => handleEdit(item.id)}>
            <TiEdit />
          </span>
          <span onClick={() => handleDelete(item.id)}>
            <RiDeleteBin6Line />
          </span>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="row">
      <div className="add-new">
        <button onClick={handleClickAdd}>Add New Product</button>
      </div>
      <div className="col-12">
        <div className="dashboard">
          <div className="dashboard-body">
            <Table
              limit="10"
              headData={productsHead}
              bodyData={products}
              renderHead={(item, index) => renderProductHead(item, index)}
              renderBody={(item, index) => renderBodyProduct(item, index)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
