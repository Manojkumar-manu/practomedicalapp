// import React, { Component, useState } from "react";
// import styles from "./Login.module.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStaus, setLoginStatus] = useState(true);

//   const handleOnSubmitLogin = event => {
//     event.preventDefault();
//     console.log("email submit", email);
//     console.log("pass submit", password);
//     alert("Login Successful");
//   };

//   const handleOnSubmitSignUp = event => {
//     event.preventDefault();
//     console.log("email submit", email);
//     console.log("pass submit", password);
//     alert("Register Successful");
//   };

//   // const loginStaus= true;

//   return (
//     <>
//       {loginStaus ? (
//         <>
//           <div className={styles.header}>
//             <span onClick={() => setLoginStatus(false)}>Sign-Up</span>
//           </div>
//           <div className={styles.mid}>
//             <div className={styles.left}>
//               <img
//                 src="https://accounts.practo.com/static/images/illustration.png"
//                 alt="illustration"
//               />
//             </div>
//             <div className={styles.right}>
//               <div className={styles.form_container}>
//                 <form onSubmit={handleOnSubmitLogin}>
//                   <div>
//                     <label>Email ID</label>
//                     <br />
//                     <input
//                       type="text"
//                       placeholder="Email ID"
//                       // value = {email}
//                       onChange={e => setEmail(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div>
//                     <label>Password</label>
//                     <br />
//                     <input
//                       type="password"
//                       placeholder="Password"
//                       // value = {password}
//                       onChange={e => setPassword(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className={styles.button}
//                       type="submit"
//                       // value = "Sign up"
//                       // onClick={handleSubmit}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className={styles.header}>
//             <span onClick={() => setLoginStatus(true)}>Login</span>
//           </div>
//           <div className={styles.mid}>
//             <div className={styles.left}>
//               <img
//                 src="https://accounts.practo.com/static/images/illustration.png"
//                 alt="illustration"
//               />
//             </div>
//             <div className={styles.right}>
//               <div className={styles.form_container}>
//                 <form onSubmit={handleOnSubmitSignUp}>
//                   <div>
//                     <label>Mobile Number</label>
//                     <br />
//                     <input
//                       type="text"
//                       placeholder="Mobile Number"
//                       // value = {email}
//                       onChange={e => setEmail(e.target.value)}
//                       // required
//                     />
//                   </div>

//                   <div>
//                     <label>Email ID</label>
//                     <br />
//                     <input
//                       type="text"
//                       placeholder="Email ID"
//                       // value = {email}
//                       onChange={e => setEmail(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div>
//                     <label>Set Password</label>
//                     <br />
//                     <input
//                       type="password"
//                       placeholder="Set Password"
//                       // value = {password}
//                       onChange={e => setPassword(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className={styles.button}
//                       type="submit"
//                       // value = "Sign up"
//                       // onClick={handleSubmit}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

import React,{useState} from 'react'

const Login = () => {
  let [state, setState] = useState({
    email: "",
    password:"",
  })
  let { email, password } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  let handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email/Phone-Number</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Login;
