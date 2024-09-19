import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../../components/Navbar";
import { CommonButton } from "../../utils/styled_components";
import EventRegisterForm from "../../components/EventRegisterForm";
import { LOAD_FORM } from "../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_FORM } from "../../graphql/Mutatuions";

const EventScreen = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [eventForms, setEventForms] = useState<any>([]);
  const { error, loading, data, refetch } = useQuery(LOAD_FORM);
  const [deleteForm] = useMutation(DELETE_FORM);

  useEffect(() => {
    if (data) {
      console.log(data);
      setEventForms(data.getAllForms);
    }
  }, [isOpen, data]);

  const openClose = () => {
    setOpen(!isOpen);
    refetch();
  };
  const onDelete = (id) => {
    deleteForm({
      variables: {
        id: id,
      },
    })
      .then((response) => {
        console.log(response);
        refetch();
        // if (response.data.deleteForm) {
        //   console.log("Form deleted successfully");
        //   refetch();
        // } else {
        //   console.error("Failed to delete form");
        // }
      })
      .catch((err) => {
        console.error("Error deleting form", err);
      });
  };

  const onEdit = () => {
    const val = import.meta.env.VITE_BASE_URL;
    console.log(val);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-5">
        <h1 className="text-3xl font-bold p-5 text-gray-500">
          Event Registers
        </h1>
        <CommonButton $primary onClick={openClose}>
          Register
        </CommonButton>
        <EventRegisterForm isOpen={isOpen} openClose={openClose} />
      </div>
      <div className="flex justify-center">
        <ol className="flex flex-col justify-start items-start">
          {data.getAllForms.map((form, index) => (
            <li
              key={form.id}
              className="flex justify-center items-center gap-2"
            >
              <p>{index + 1}. </p>
              <p> {form.username}</p>{" "}
              <CommonButton $primary onClick={onEdit}>
                Edit
              </CommonButton>{" "}
              <CommonButton $error onClick={() => onDelete(form.id)}>
                Delete
              </CommonButton>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

EventScreen.propTypes = {};

export default EventScreen;
