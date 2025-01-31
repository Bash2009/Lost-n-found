import React from "react";
import { useNavigate } from "react-router-dom";
import user_logo from "../../media/user-logo.png";

const LoginForm = () => {
  const styles = {
    inputs: { background: "rgb(200,200,200)" },
    logo: {
      background: "url(" + user_logo + ")",
      backgroundSize: "100%",
      height: "10rem",
      width: "10rem",
    },
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <>
      <div className="mx-auto col-11 col-md-8 rounded-3 row p-2 p-md-3 mt-5 border border-success text-prim">
        <div style={styles.logo} className="mx-auto rounded-circle mb-2"></div>
        <p className="text-center fs-4 fw-bold">Lost & Found Portal</p>

        <form className="fw-bold row mx-auto" onSubmit={handleSubmit}>
          <label className="my-2 ps-1">Username or Email Adress*</label>
          <input
            type="text"
            className="form-control border border-primary"
            required
            style={styles.inputs}
          />
          <label className="my-2 ps-1">Password*</label>
          <input
            type="password"
            className="form-control border border-primary"
            required
            style={styles.inputs}
          />

          <input
            type="submit"
            className="btn btn-primary fw-bold mx-auto col-4 mt-4"
          />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
