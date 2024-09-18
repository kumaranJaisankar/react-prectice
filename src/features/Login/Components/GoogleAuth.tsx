import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      //   useOneTap
    />
  );
};

GoogleAuth.propTypes = {};

export default GoogleAuth;
