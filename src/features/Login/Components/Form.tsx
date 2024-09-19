import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommonButton } from "../../../utils/styled_components";
import authenticateUser from "../../../Axios/index.js";

const LoginForm = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = (e) => {
    e.preventDefault();
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;
    const data = { username: username, password: password };
    authenticateUser("/dj-rest-auth/login/", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <form className="max-w-sm mx-auto mb-5" onSubmit={onLogin}>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Username
        </label>
        <input
          ref={userNameRef}
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your username..."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your password
        </label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      {/* <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Remember me
        </label>
      </div> */}
      <div className="text-center">
        <CommonButton $primary type="submit">
          Submit
        </CommonButton>
      </div>
      {/* <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button> */}
    </form>
  );
};

export default LoginForm;
