import React from "react";

const Alert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.masg}</strong>: {props.alert.type}
      </div>
    )
  );
};

export default Alert;
