import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function () {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold mt-2  "  style={{ color: "#eef4f6" }}>HOME</h1>
        </Link>
        <ul className="flex gap-4">
          
          <Link to="/profile">

            {currentUser ? (
               <img src={currentUser.profilePicture} alt="profile" className="rounded-full object-cover " style={{width:'40px', }} />
            ):(
              <li className=" mt-2  "  style={{ color: "#eef4f6" }} >Sing In</li>
            )}
            
          </Link>
          </ul>
      </div>
    </div>
  );
}