import React from "react";

function Form({
  getError,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmission,
}) {
  console.log(getError);
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="text-danger">{getError.nameError}</p>

      <br />
      <input
        className="form-control"
        type="text"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <p className="text-danger">{getError.phoneError}</p>

      <br />
      <input
        className="form-control"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="text-danger">{getError.emailError}</p>
      <br />
      <input
        className="form-control"
        type="text"
        placeholder="passsword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-danger">{getError.passwordError}</p>

      <br />
      <button className="btn btn-info" onClick={handleSubmission}>
        Submit
      </button>
    </div>
  );
}

export default Form;
