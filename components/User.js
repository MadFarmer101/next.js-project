import React from "react";

const User = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>Age: {props.age}</h3>
      <style jsx>
        {`
          div {
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default User;
