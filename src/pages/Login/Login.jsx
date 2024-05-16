import CustomButton from "../../components/Custom-button/Custom-button";
import logo from "../../assets/images/1111.png";

import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">
      <img src={logo} alt="" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default Login;
