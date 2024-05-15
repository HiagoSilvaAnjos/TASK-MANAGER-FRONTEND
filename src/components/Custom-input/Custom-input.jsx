import PropTypes from "prop-types";

import "./Custom-input.scss";

const CustomInput = ({ label, value }) => {
  return (
    <div className="custom-input-container">
      <input type="" className="custom-input" />
      {label ? (
        <label
          className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
        ></label>
      ) : null}
    </div>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
