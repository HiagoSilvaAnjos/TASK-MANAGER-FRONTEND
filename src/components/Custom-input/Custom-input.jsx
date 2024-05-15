import PropTypes from "prop-types";

import "./Custom-input.scss";

const CustomInput = ({ label, value, onChange }) => {
  return (
    <div className="custom-input-container">
      <input
        type=""
        className="custom-input"
        value={value}
        onChange={(e) => onChange(e)}
      />
      {label ? (
        <label
          className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
