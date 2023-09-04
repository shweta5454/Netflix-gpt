import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  //form validation
  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(fullname.current.value,email.current.value, password.current.value);
    seterrorMessage(message); 
    if(message) return;

    //sign in /sign up
if(!message){
}
   
  };
  //togglefuntion for signin & signupy 
  const toggleSignInForm = () => {
    console.log("clicked");
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative w-3/12 left-0 right-0 top-36 mx-auto p-12 bg-black opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4  my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4  my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a registered? Sign Up Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;

// rafce-React Arrow Function Component Export
