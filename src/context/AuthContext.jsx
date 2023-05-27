import { createContext, useContext, useState, useEffect } from "react";
import auth from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const updateUserProfile = async (user, data) => {
    try {
      await updateProfile(user, data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (email, password, userName) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(true);
      await updateUserProfile(user, { displayName: userName });
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const logout = () => {
    return signOut(auth);
    
  };

  const value = { user, login, register, updateUserProfile, logout, setUser };
  useEffect(() => {
    const watcher = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        navigate("/")
      }
      else {
        navigate("/login")

      }
    });
    return watcher;
  }, []);
  useEffect(() => {
    if (user == null) {
      navigate("/login")
    }
  },[user])
  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};