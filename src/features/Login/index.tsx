import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import LoginForm from "./Components/Form";
import GoogleAuth from "./Components/GoogleAuth";
import GithubLogin from "./Components/GithubLogin";
import { Navigate, useNavigate } from "react-router-dom";
import {
  LoginSocialGoogle,
  LoginSocialGithub,
  IResolveParams,
} from "reactjs-social-login";

import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { useGoogleLogin } from "@react-oauth/google";

function LoginScreen() {
  const logIn = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    onError: (error) => console.log(error),
    // flow: "auth-code",
  });

  const navigate = useNavigate();

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);

  if (localStorage.getItem("user") !== null) {
    return <Navigate to="/event" replace={true} />;
  }
  return (
    <div className="w-screen h-screen  flex justify-center items-center ">
      <div className="max-w-3xl w-96 p-6 bg-white border border-gray-200 rounded-lg shadow divide-y">
        <div className="text-cent">
          <div className="flex justify-center">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse text-center"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-3xl  whitespace-nowrap font-bold dark:text-blue-400">
                React Practice
              </span>
            </a>
          </div>
          <h2 className="text-2xl mt-5 text-center text-center font-semibold text-gray-700">
            Login
          </h2>
          <LoginForm />
        </div>

        <div className="flex flex-col justify-around items-center">
          <p className="text-center text-gray-500 font-bold  py-3">(OR)</p>
          {/* <GoogleAuth /> */}
          {/* <GithubLogin /> */}
          <LoginSocialGithub
            client_id={"Ov23lio0luaDbDcThZWP"}
            client_secret={"328d34ea97f111afffc3a95d3687d3d06193728f"}
            redirect_uri={"http://localhost:5173/login"}
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            onResolve={({ provider, data }: IResolveParams) => {
              console.log(provider, data);

              const userDetail = {
                name: "",
                picture:
                  "https://res.cloudinary.com/dtbarluca/image/upload/v1692694826/user_1177568_mmmdi6.png",
              };
              userDetail["name"] = data["name"];
              userDetail["picture"] = data["avatar_url"];
              localStorage.setItem(
                "user",
                data["access_token"] ? data["access_token"] : "keyss"
              );
              localStorage.setItem("userDetail", JSON.stringify(userDetail));

              navigate("/event");

              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>

          <GoogleLoginButton onClick={logIn} />
        </div>
      </div>
    </div>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
