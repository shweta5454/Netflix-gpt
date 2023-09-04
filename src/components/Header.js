import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants"

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
    const unsubscribe=onAuthStateChanged(auth, (user) => {
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
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
//unsubscribe when component unmounts
    return ()=>unsubscribe();
  }, []);
  return (
    <div className="absolute flex justify-between w-full  z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="p-2 flex items-centerborder border-black">
          <img className="w-8 h-8  " src={user?.photoURL} alt="myicon_url" />
          <button className="text-white font-bold" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
