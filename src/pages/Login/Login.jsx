import CustomButton from "../../components/Custom-button/Custom-button";
import logo from "../../assets/images/1111.png";

import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="" />
      <div className="button-container">
        <Link to="/home">
          <CustomButton>Entrar</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Login;
