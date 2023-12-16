import { useState } from "react";
import OAuth from "../components/OAuth";
import Com from "/image/computer.png";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div
      className="h-screen  "
      style={{ backgroundColor: "#2d2d2d", fontFamily: "" }}
    >
      <h1
        className="absolute text-4xl mt-[65px] ml-[110px] font-serif  "
        style={{ color: "#fafdfe" }}
      >
        Create Account
      </h1>
      <span
        className="absolute text-[19px] ml-[95px] mt-[125px] font-blod"
        style={{ color: "#eef4f6" }}
      >
        {" "}
        Already have an account?
      </span>
      <Link to="/sign-in">
      <span
        className="absolute text-[19px] mt-[125px] ml-[317px] font-blod text-orange-700 hover:underline cursor-pointer"
        style={{ color: "#f2574a" }}
      >
        Log in
      </span>
      </Link>
      <OAuth />
      <hr
        className="absolute w-[170px] mt-[280px] ml-[50px]  "
        style={{ borderColor: "#424242" }}
      />
      <hr
        className="absolute w-[170px] mt-[280px] ml-[250px]"
        style={{ borderColor: "#424242" }}
      />
      <p className="absolute mt-[268px] ml-[225px] text-gray-700 ">Or</p>

      <form onSubmit={handleSubmit}>
        <input
          style={{
            backgroundColor: "#2d2d2d",
            color: "#eef4f6",
            borderColor: "#424242",
            paddingLeft: "20px",
          }}
          className="absolute w-[370px] h-[40px] rounded-lg mt-[310px] ml-[50px] border-[1px]  focus:outline-none "
          type="text"
          id="username"
          placeholder="Username"
          onChange={handle}
        />
        <input
          style={{
            backgroundColor: "#2d2d2d",
            color: "#eef4f6",
            borderColor: "#424242",
            paddingLeft: "20px",
          }}
          className="absolute w-[370px] h-[40px] rounded-lg mt-[370px] ml-[50px] border-2 focus:outline-none "
          type="email"
          id="email"
          placeholder="Email "
          onChange={handle}
        />
        <input
          style={{
            backgroundColor: "#2d2d2d",
            color: "#eef4f6",
            borderColor: "#424242",
            paddingLeft: "20px",
          }}
          className="absolute w-[370px] h-[40px] rounded-lg mt-[430px] ml-[50px] border-2 focus:outline-none "
          type="password"
          id="password"
          placeholder="Password"
          onChange={handle}
        />
        <button className=" absolute mt-[408px] w-[482px] h-[60px] bg-red-500 lg:ml-[20px] ml-[-50px] hover:opacity-95 lg:hidden">
          Create account
        </button>
      </form>
      <p className="absolute mt-[480px] ml-20 " style={{ color: "#eef4f6" }}>
        By crating an account'I agree with Anima's
      </p>
      <span
        className=" absolute mt-[510px] ml-28 text-red-800 cursor-pointer hover:underline"
        style={{ color: "#f2574a" }}
      >
        Privay Policy
      </span>
      <span
        className=" absolute mt-[510px] ml-[210px] text-black"
        style={{ color: "#eef4f6" }}
      >
        and
      </span>
      <span
        className=" absolute mt-[510px] ml-[250px] text-red-800 cursor-pointer hover:underline"
        style={{ color: "#f2574a" }}
      >
        Terms of Service
      </span>

      <img
        src={Com}
        alt=""
        className="absolute hidden lg:ml-[600px] lg:mt-[100px] lg:block w-[800px] "
      />
      <p className="absolute text-white mt-[550px] ml-[135px]">
        {" "}
        {error && "Something went wrong!"}
      </p>
    </div>
  );
}
