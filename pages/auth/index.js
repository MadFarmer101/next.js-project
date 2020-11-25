import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Index Page of {props.appName}</h1>
      <User name="Mad" age={36} />
    </div>
  );
};

authIndexPage.getInitialProps = () => {
  return { appName: "Super App (Auth)" };
};

export default authIndexPage;
