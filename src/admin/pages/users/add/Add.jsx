import React from "react";

import "./add.css";

const Add = () => {
  return (
    <div className="new-user">
      <h1 className="title">New Uesr</h1>
      <form className="user-form">
        <div className="user-item">
          <lable> UserName</lable>
          <input type="text" placeholder="nhập tên ..." />
        </div>
        <div className="user-item">
          <lable> Full Name</lable>
          <input type="text" placeholder="Full Name ..." />
        </div>
        <div className="user-item">
          <lable> Email </lable>
          <input type="text" placeholder="email ..." />
        </div>
        <div className="user-item">
          <lable>Password</lable>
          <input type="password" placeholder="password" />
        </div>
        <div className="user-item">
          <lable> Phone</lable>
          <input type="text" placeholder="phone" />
        </div>
        <div className="user-item">
          <lable> Address</lable>
          <input type="text" placeholder="Address" />
        </div>
        <div className="user-item">
          <label>Gender</label>
          <div className="user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="user-item">
          <label> Active</label>
          <select className="select-user" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="user-btn">Create</button>
      </form>
    </div>
  );
};

export default Add;
