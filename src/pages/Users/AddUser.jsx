import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

function AddUser() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  const onSubmit = (data) => {
    const newUser = {
      id: users.length + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
      },
      company: {
        name: data.companyName,
      },
      image: data.avatar,
    };

    // Update state with the new user
    setUsers([...users, newUser]);

    // Show toast message
    toast.success("User added successfully!", {
      position: "top-center",
    });

    // Redirect back to users page
    navigate("/users");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-8">Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block mb-2">
            Street
          </label>
          <input
            type="text"
            id="street"
            {...register("street")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="suite" className="block mb-2">
            Suite
          </label>
          <input
            type="text"
            id="suite"
            {...register("suite")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            {...register("companyName")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avatar" className="block mb-2">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            {...register("avatar")}
            className="px-4 py-2 input input-bordered"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
