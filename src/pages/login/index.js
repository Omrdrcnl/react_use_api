import axios from "axios";
import { useState } from "react";
import useApi from "../../hooks/useApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = useApi();

  const onBtnClick = () => {
    const postData = {
      email,
      password,
    };
    console.log(">>postdata:", postData);
    axios
      .post("https://api.adoptez1artisan.com/auth/login", postData)
      .then((response) => {
        console.log("response", response);
        console.log(">> token:", response.data.data.token);
        if (response.data.status === "success") {
          localStorage.setItem("toke:", response.data.data.token);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <labels>Password</labels>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            onClick={onBtnClick}
            className="btn btn-primary my-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
