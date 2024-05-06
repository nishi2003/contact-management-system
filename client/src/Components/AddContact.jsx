import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus } from 'react-icons/fa6';
import '../assets/css/form.css';

const AddContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    axios.post('http://localhost:3000/contactmsyt/add-contact', values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })
    .then(res => {
      if (res.data.success) {
        // console.log(res.data);
        toast.success("Contact Added successfully", {
          position: "top-right",
          autoClose: 5000
        });
        navigate('/dashboard');
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <div className="form-group">
          <FaUserPlus />
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <FaAt />
          <input
            type="text"
            placeholder="Enter Email"
            className="form-control"
            name="email"
            // autoComplete="off"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <FaPhoneFlip />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control"
            name="phone"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <FaRegAddressCard />
          <input
            type="text"
            placeholder="Enter Address"
            className="form-control"
            name="address"
            onChange={handleInput}
          />
        </div>
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
