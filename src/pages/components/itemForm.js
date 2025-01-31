import React from "react";
import { useNavigate } from "react-router-dom";

const ItemForm = (props) => {
  const styles = {
    input: {
      background: "rgb(200,200,200)",
    },
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <>
      <div className="row border-success border my-5 rounded-3 col-11 col-md-9 mx-auto fw-bold py-3">
        <p className="text-primary fs-4 text-center">{props.state} item Form</p>

        <form
          action="/Home"
          className="p-0 row col-12 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="col-11 col-md-5 p-0 mx-auto">
            <label>Name</label>
            <input
              placeholder="Enter your name"
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />

            <label>Department</label>
            <input
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />

            <label>Occupation</label>
            <input
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />
          </div>

          <div className="col-11 col-md-5 mx-auto p-0">
            <label>Matric Number</label>
            <input
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />

            <label>Phone Number</label>
            <input
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />

            <label>Date {props.state}</label>
            <input
              type="date"
              className="form-control text-center border border-success rounded-0"
              style={styles.input}
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              style={styles.input}
              className="form-control text-center border border-success rounded-0"
              placeholder={
                props.state === "Lost"
                  ? "Describe what you've lost"
                  : "Describe what you've found"
              }
            ></textarea>
            <label>Upload image (Optional)</label>
            <input
              type="file"
              style={styles.input}
              className="form-control text-center border border-success rounded-0"
              placeholder={
                props.state === "Lost"
                  ? "Describe what you've lost"
                  : "Describe what you've found"
              }
            ></input>
          </div>

          <div className="col-12 col-md-6">
            <label>Location</label>
            <input
              style={styles.input}
              className=" me-auto form-control text-center border border-success rounded-0"
            />
          </div>
          <div className="row col-12 mt-1 p-0 mx-auto px-2">
            <input
              type="submit"
              className="btn btn-primary col-6 col-md-4 ms-auto"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ItemForm;
