import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const googleprovider = new GoogleAuthProvider();

/* UseFirebase function */
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [loginerror, setloginerror] = useState("");
  const [loading, setLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  // const redirect = location.state?.form || "/home";

  /* google login function */
  const handlegooglesignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };

  /* email regestation */
  const handleRegister = (email, password, name, location, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        updateName(name);
        const user = userCredential.user;
        setUser(user);
        setloginerror("");
        saveUser(email, name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  /* update name */
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleLogin = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        setloginerror("");
        setUser(result.user);
        console.log(result.user);
        console.log();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  /* user state change depandacy */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`https://hidden-fjord-28330.herokuapp.com/users/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setAdmin(data.admin);
            setAdminLoading(false);
          });
      } else {
      }
      setLoading(false);
    });
  }, []);

  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://hidden-fjord-28330.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    error,
    handleLogOut,
    loading,
    loginerror,
    handlegooglesignin,
    handleRegister,
    handleLogin,
    admin,
    adminLoading,
  };
};

export default useFirebase;
