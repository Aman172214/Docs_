import React from "react";
import create from "../assets/create.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NewDoc() {
const navigate = useNavigate();

  const logoutHandler = () =>{
    const {data} = axios.get("http://localhost:5000/auth/logout")
    console.log(data)
    navigate('/')
  }
  return (
    <div className="m-10 flex flex-col gap-10 items-center">
      <h2 className="text-lg">Start a new document</h2>
      <Link to="/editor">
        <div>
          <img
            src={create}
            alt=""
            className="h-48 hover:border hover:border-indigo-400 cursor-pointer"
          />
        </div>
      </Link>
      <button
        onClick={logoutHandler}
        className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Logout
      </button>
    </div>
  );
}

export default NewDoc;
