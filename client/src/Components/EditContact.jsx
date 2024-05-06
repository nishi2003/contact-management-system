import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus } from 'react-icons/fa6';
import '../assets/css/form.css';
import { useParams } from "react-router-dom";

const EditContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const {id} = useParams()
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    axios.put('http://localhost:3000/contactmsyt/update-contact/'+id, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })
    .then(res => {
      if (res.data.success) {
        // console.log(res.data);
        toast.success("Contact Updated successfully", {
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
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/contactmsyt/contacts/"+id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data.success) {

        setValues({
            name:res.data.name,
            email:res.data.email,
            phone:res.data.phone,
            address:res.data.address
        })
        }
      })
      .catch((err) => {
        console.log(err);
    
      });
  }, []);


  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Edit Contact</h2>
        <div className="form-group">
          <FaUserPlus />
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            name="name"
            onChange={handleInput}
            value={values.name}
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
            value={values.email}
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
            value={values.phone}
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
            value={values.address}
          />
        </div>
        <button className="form-btn">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
