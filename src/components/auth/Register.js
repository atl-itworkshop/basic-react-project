import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
   const authContext = useContext(AuthContext);
   const { register, isAuthenticated } = authContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push("/");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAuthenticated, props.history]);

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const { firstName, lastName, email, password, confirmPassword } = user;

   const onChange = (e) =>
      setUser({ ...user, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();

      register({
         firstName,
         lastName,
         email,
         password,
      });
      console.log("Register submit...");
   };

   return (
      <div className="form-container">
         <h1>
            Account <span className="text-primary">Register</span>
         </h1>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="firstName">First Name</label>
               <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="lastName">Last Name</label>
               <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="confirmPassword">Confirm Password</label>
               <input
                  type="text"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
               />
            </div>
            <input
               type="submit"
               value="Register"
               className="btn btn-primary btn-block"
            />
         </form>
      </div>
   );
};

export default Register;
