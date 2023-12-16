import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import Sea from "/image/searchh.png";
import { app } from "../src/firebase";
import { useDispatch } from 'react-redux';
import { signInSuccess } from "../src/redux/user/userSlice";
import {  useNavigate } from "react-router-dom";

export default function OAuth() {
const dispatch = useDispatch();
const navigate = useNavigate();
 const handleGoogle = async () =>{
  try {
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);

    const result = await signInWithPopup(auth,provider);
    const res = await fetch('/api/auth/google',{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
         name:result.user.displayName,
         email: result.user.email,
         photo: result.user.photoURL,
      }),
    });
    const data = await res.json();
    dispatch(signInSuccess(data));
    navigate("/");
  } catch (error) {
    console.log("could no login with google", error)
    
  }
 }






  const buttonStyle = {
    position: "absolute",
    height: "42px",
    backgroundColor: "#1a73e8",
    border: "8px",
    borderRadius: "5px",
    width: "370px",
    top: "240px",
    color: "white",
    fontFamily: "inherit",
  };

  // Media query for mobile size
  const mobileStyle = {
    ...buttonStyle,
    left: "50px",
  };

  // Media query for desktop size
  const desktopStyle = {
    ...buttonStyle,
    left: "50px",
  };

  return (
    <div className="mt">
      <button onClick={handleGoogle} style={buttonStyle} className=" hover:opacity-95 text-[15px] font-semibold">
        sign with 
        Google
        <img
          style={{
            width: "38px",
            position: "absolute",
            marginLeft: "3px",
            marginTop: "-31px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
          src={Sea}
          alt=""
        />
      </button>

      {/* Use media queries to apply different styles based on screen width */}
      <style jsx>{`
        @media screen and (max-width: 600px) {
          button {
            ${Object.keys(mobileStyle)
              .map((key) => `${key}: ${mobileStyle[key]};`)
              .join("\n")}
          }
        }

        @media screen and (min-width: 601px) {
          button {
            ${Object.keys(desktopStyle)
              .map((key) => `${key}: ${desktopStyle[key]};`)
              .join("\n")}
          }
        }
      `}</style>
    </div>
  );
}
