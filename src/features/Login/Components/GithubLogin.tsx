import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import GitHubLogin from "react-github-login";

const GithubLogin = () => {
  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);
  const navigate = useNavigate();
  return (
    <GitHubLogin
      clientId="49c25a14840875eed80a"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GithubLogin;
