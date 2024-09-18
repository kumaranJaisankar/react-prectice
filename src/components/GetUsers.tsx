import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { LOAD_USER } from "../graphql/Queries";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import LoginForm from "../features/Login/Components/Form";
import LoginScreen from "../features/Login";
import { googleLogout } from "@react-oauth/google";

interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// interface ForData {
//   getAllUsers: UserDetail;
// }

const GetUsers = () => {
  const [users, setUSers] = useState<UserDetail[]>([]);
  const [searchText, setSearchText] = useState("");
  const { error, loading, data } = useQuery(LOAD_USER);

  useEffect(() => {
    if (data) {
      console.log(data.getAllUsers.slice(1, 10));
      setUSers(data.getAllUsers);
    }
  }, [data]);

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("search");
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    console.log(item);
    console.log("kumaran");
    // the item selected
    // console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.firstName}
        </span>
        <span> last: {item.lastName}</span>
      </>
    );
  };

  const logout = () => {
    googleLogout();
  };

  return (
    <div className="w-screen p-2 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-bold">Register forms</h1>
        <div className="w-60 mr-5">
          {" "}
          <ReactSearchAutocomplete
            items={users}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            fuseOptions={{
              shouldSort: true,
              threshold: 0.6,
              location: 2,
              distance: 100,
              //    maxPatternLength: 32,
              minMatchCharLength: 1,
              keys: ["name", "firstName"],
            }}
            resultStringKeyName="firstName"
            maxResults={5}
            formatResult={formatResult}
            styling={{}}
          />
          <button
            onClick={logout}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
      <LoginScreen />
      {/* <ul>
        {users.map((user: UserDetail, index) => (
          <li key={index}>
            <p className="text-slate-500">
              {" "}
              {user.firstName}-{user.lastName}
            </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

GetUsers.propTypes = {};

export default GetUsers;
