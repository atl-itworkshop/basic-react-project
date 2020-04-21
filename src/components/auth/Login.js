import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
   const authContext = useContext(AuthContext);
   const { login, isAuthenticated } = authContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push("/");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAuthenticated, props.history]); 

   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const { email, password } = user;

   const onChange = (e) =>
      setUser({ ...user, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();

      login({
          email,
          password
      })
   };

   return (
      <div className="form-container">
         <h1>
            Account <span className="text-primary">Login</span>
         </h1>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
               />
            </div>

            <input
               type="submit"
               value="Login"
               className="btn btn-primary btn-block"
            />
         </form>
      </div>
   );
};

export default Login;
