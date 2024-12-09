import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseconfig";
import "./LoginPage.scss";

export const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        navigate("/tenant-view");
        localStorage.setItem("username", JSON.stringify(result.user.displayName));
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  const handleSubmit = () => {
    if (credentials.password === "tenant") {
      navigate("/tenant-view");
    } else if (credentials.password === "landlord") {
      navigate("/landlord-view");
    }
  };

  return (
    <div className="loginPage">
      <div className="loginImage">
        <img
          src={require("./Property-Management.jpg")} 
          alt="Tenant Management"
        />
      </div>
      <div className="loginForm">
        <div className="formHeader">
          <h2>Login To Your Account</h2>
          <p>Login to your app or create an account for a better experience.</p>
        </div>
        <div className="inputGroup">
          <label>Email</label>
          <input
            type="email"
            value={credentials.email}
            placeholder="Email@gmail.com"
            onChange={(e) =>
              setCredentials({
                email: e.target.value,
                password: credentials.password,
              })
            }
          />
        </div>

        <div className="inputGroup">
          <label>Password</label>
          <input
            type="password"
            value={credentials.password}
            placeholder="Enter Your Password"
            maxLength={18}
            onChange={(e) =>
              setCredentials({
                email: credentials.email,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="loginButtons">
          <button
            className="loginButton"
            disabled={!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(credentials.email)}
            onClick={handleSubmit}
          >
            Login
          </button>
          <button className="googleSignIn" onClick={signIn}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
