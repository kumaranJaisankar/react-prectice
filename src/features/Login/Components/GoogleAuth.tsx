import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface UserDetail {
  name: string;
  picture: string;
}

const GoogleAuth = () => {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        if (credentialResponse.credential) {
          const USER_CREDENTIAL: any = jwtDecode(credentialResponse.credential);
          console.log(USER_CREDENTIAL);
          const userDetail = {
            name: "",
            picture:
              "https://res.cloudinary.com/dtbarluca/image/upload/v1692694826/user_1177568_mmmdi6.png",
          };
          userDetail["name"] = USER_CREDENTIAL["name"];
          userDetail["picture"] = USER_CREDENTIAL["picture"];
          localStorage.setItem(
            "user",
            USER_CREDENTIAL["sub"] ? USER_CREDENTIAL["sub"] : "keyss"
          );
          localStorage.setItem("userDetail", JSON.stringify(userDetail));

          navigate("/event");
          // navigate(0);
        }
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
