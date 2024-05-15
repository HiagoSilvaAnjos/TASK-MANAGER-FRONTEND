import "./Custom-button.scss";

import PropTypes from "prop-types";

const CustomButton = ({ children, onClick }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
