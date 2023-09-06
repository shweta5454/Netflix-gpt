import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptsearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/appconfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);


  //signOut code
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.

        navigate("/error");
      });
  };
  useEffect(() => {
    //Manage users api either for signIn/signUp
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  //Gpt search function
  const handleGptSearchClick = () => {
    dispatch(toggleGptsearchView());
  };

  //Language change handle function
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute flex justify-between w-full  z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="p-2 flex items-center ">
          <select
            className="p-2 bg-gray-900 text-white m-2 "
            onClick={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          {/*GPT SEARCH BUTTON  */}
          <button
            className="py-2 px-4 m-2 mx-4  bg-purple-800 text-white rounded-lg "
            onClick={handleGptSearchClick}
          >
            GPT SEARCH
          </button>
          <img
            className="w-8 h-8  mr-1 "
            src={user?.photoURL}
            alt="myicon_url"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
