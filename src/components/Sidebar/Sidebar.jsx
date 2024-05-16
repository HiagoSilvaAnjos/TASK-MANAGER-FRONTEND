import "./Sidebar.scss";
import logo from "../../assets/images/1111.png";

import CustomButton from "../Custom-button/Custom-button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSingOutClick = () => {
    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <img src={logo} alt="logo full stack club" />
      <div className="sing-out">
        <CustomButton onClick={handleSingOutClick}>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
