import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";

function StudentDetails() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [dataChange, setDataChange] = useState(true);
  const [updationId, setUpdationId] = useState("");
  const getData = async () => {
    const res = await axios.get(
      "https://mern-stack-crun-op.onrender.com/register"
    );
    console.log(res.data);
    // setDataChange(!dataChange);
    setData(res.data);
  };

  const handleDeletion = async (id) => {
    const res = await axios.delete(
      `https://mern-stack-crun-op.onrender.com/register?id=${id}`
    );
    alert(res.data);
    getData();
  };

  const handleUpdation = async () => {
    const updationData = {
      _id: updationId,
      name,
      phone,
      email,
    };
    const res = await axios.patch(
      `https://mern-stack-crun-op.onrender.com/register`,
      updationData
    );
    alert("Updation is completed", res);
    setName("");
    setPhone("");
    setEmail("");
    setUpdationId("");
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Student details</h1>

      {updationId && (
        <div className="w-50 mx-auto my-5 border p-5">
          <h1 className="text-muted">Updation Form</h1>
          {/* <Form
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmission={handleUpdation}
          /> */}
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <input
            className="form-control"
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <br />
          <input
            className="form-control"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <button className="btn btn-info" onClick={handleUpdation}>
            Submit
          </button>
        </div>
      )}
      <table
        className="table w-65 mt-5 table-hover table-striped"
        style={{ border: "2px solid", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((std) => (
            <tr key={std._id}>
              <td>{std.name}</td>
              <td>{std.phone}</td>
              <td> {std.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeletion(std._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary ms-3"
                  onClick={() => {
                    setUpdationId(std._id);
                    setName(std.name);
                    setPhone(std.phone);
                    setEmail(std.email);
                  }}
                >
                  Updation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
