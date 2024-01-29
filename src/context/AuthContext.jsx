"use client";
// Hooks
import { createContext, useContext, useEffect, useState } from "react";
// Firebase
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth, db, gProvider } from "../config";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";

// Localization i18next

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const usersRef = collection(db, "users");
  const [userImage, setUserImage] = useState("");
  const [LogLoading, setLogLoading] = useState(false);
  const [LogOutLoading, setLogOutLoading] = useState(false);

  // get all users from fire store
  const fetchAllUsers = async () => {
    const data = await getDocs(usersRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
  };

  // fetch user data
  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(usersRef, userId));
      if (userDoc.exists()) {
        // User data exists
        const userData = userDoc.data();
        return userData;
      } else {
        console.log("error finding user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // const getImageFromFirebase = (imageUrl) => {
  //   getDownloadURL(ref(storage, imageUrl)).then((url) => {
  //     setUserImage(url);
  //   });
  // };
  // const getImage = () => {
  //   const userImageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
  //   if (userImageRef) {
  //     getDownloadURL(userImageRef)
  //       .then((url) => {
  //         setUserImage(url);
  //       })
  //       .catch((error) => {
  //         if (currentUserData?.gender === "female") {
  //           getImageFromFirebase(`usersImages/avatar-female.webp`);
  //         } else if (currentUserData?.gender === "male") {
  //           getImageFromFirebase(`usersImages/avatar-male.webp`);
  //         }
  //       });
  //   }
  // };

  useEffect(() => {
    // console.log("context work");

    fetchAllUsers()
      .then((users) => setUsers(users))
      .catch((error) => console.log(error.message));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const userFetchedData = await fetchUserData(user.uid);
        // console.log(userFetchedData)
        setCurrentUserData({ ...userFetchedData });
      } else {
        setCurrentUser(null);
        setCurrentUserData(null);
      }
    });

    // getImage();
    // Clean up the subscription when component unmounts
    return () => unsubscribe();
  }, [currentUserData?.gender]);

  // Authentication Operations (signup, login, logout)
  // Signup function
  const signup = (username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(usersRef, user.uid), {
          userId: user.uid,
          username: username,
          email: email,
          password: password,
        });
      }
    );
  };
  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Logout function
  const logout = () => {
    return signOut(auth);
  };
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password).then(() => {
      console.log("password updated");
    });
  };
  const googleSignIn = () => {
    signInWithPopup(auth, gProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const values = {
    signup,
    login,
    logout,
    currentUser,
    users,
    currentUserData,
    userImage,
    LogLoading,
    setLogLoading,
    LogOutLoading,
    setLogOutLoading,
    googleSignIn,
    updateUserEmail,
    updateUserPassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
