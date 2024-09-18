import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./Components/Form";
import GoogleAuth from "./Components/GoogleAuth";

function LoginScreen() {
  return (
    <div className="w-screen h-screen  flex justify-center items-center ">
      <div className="max-w-3xl w-96 p-6 bg-white border border-gray-200 rounded-lg shadow divide-y">
        <div>
          <h2 className="text-3xl text-center text-center font-bold text-gray-700">
            Login
          </h2>
          <LoginForm />
        </div>

        <div className="flex flex-col justify-around items-center">
          <p className="text-center text-gray-500 font-bold  py-3">(OR)</p>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
