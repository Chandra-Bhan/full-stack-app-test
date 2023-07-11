import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dataChange, setDataChange] = useState(true);
  const getError = { nameError, phoneError, emailError };
  const handleSubmission = async () => {
    const submittingData = {
      name,
      phone,
      email,
      password,
    };
    const res = await axios.post(
      "http://localhost:5000/register",
      submittingData
    );
    const error = res.data.errors;
    console.log(res.data);
    if (error) {
      if (error.name) {
        setNameError(error.name.message);
        console.log(error.name.message);
      }
      if (error.phone) {
        setPhoneError(error.phone.message);
        console.log(error.phone);
      }
      if (error.email) {
        setEmailError(error.email.message);
      }
      if (error.password) {
        setEmailError(error.password.message);
      }
      //   console.log(error.name.message, error.phone, error.email.message);
    } else {
      setNameError("");
      setEmailError("");
      setPhoneError("");
      alert("submitted");
      console.log("Submittd", res);
    }
    setDataChange(!dataChange);
  };
  return (
    <div className="w-50 mx-auto my-5 border p-5">
      <h1 className="text-primary mb-5">Register Student {dataChange}</h1>
      <Form
        getError={getError}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmission={handleSubmission}
      />
    </div>
  );
}

export default Register;
