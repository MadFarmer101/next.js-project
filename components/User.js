import React from "react";

const User = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
};

export default User;
