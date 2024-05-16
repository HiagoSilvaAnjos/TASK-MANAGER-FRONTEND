import "./Sidebar.scss";
import logo from "../../assets/images/1111.png";

import CustomButton from "../Custom-button/Custom-button";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src={logo} alt="logo full stack club" />
      <div className="sing-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
