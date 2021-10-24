import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams;
  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (e) => {};
  return (
    <div>
      <h2>Update User{user.name}</h2>
      <p>
        <small>{id}</small>
      </p>
      <form onSubmit={handleUpdateUser}>
        <input type="text" />
        <input type="email" name="" id="" />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
