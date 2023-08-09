import React, { useEffect } from "react";
import { useState } from "react";
import { validata } from "../validate/Validate";
import styles from "../Signup/signup.module.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const Signup = () => {
  const [errors, setErrors] = useState({})
  const [toched, setToched] = useState({})
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  useEffect(() => {
    setErrors(validata)
  }, [data, toched])

  const changHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (e) => {
    setToched({ ...toched, [e.target.name]: true })
  }
  const sumbitHandler = (e) => {
    e.preventDefault()
    if (!Object.keys(errors).length) {
      console.log("ddd");
      toast("ssdd", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      setToched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      })
    }
  }
  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <h2>Signup</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.space}>
            {errors.name && toched.name && <span className={styles.error}>{errors.name}</span>}
          </div>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.space}>
            {errors.email && toched.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.space}>
            {errors.password && toched.password && <span className={styles.error}>{errors.password}</span>}
          </div>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <div className={styles.space}>
            {errors.confirmPassword && toched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          <label>i accepted terms of privacy policy</label>
        </div>
        <div className={styles.space}>
          {errors.isAccepted && toched.isAccepted && <span className={styles.error}>{errors.isAccepted}</span>}
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
