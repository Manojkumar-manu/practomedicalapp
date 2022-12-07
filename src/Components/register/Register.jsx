import React from "react";

const Register = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;

    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
  };
  return (
    <section>
      <article>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
