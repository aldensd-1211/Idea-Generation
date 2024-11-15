import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
<<<<<<< HEAD
import axiosInstance from "../constants/ProtectedRoutes";
=======
import logo2 from "../assets/logo2.png"
import {persistor} from '../redux/store'
>>>>>>> upstream/main

const Header = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD

  const [profilePic, setProfilePic] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const popupRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const getProfilePic = async () => {
      try {
        const response = await axiosInstance.get("/user/get-profile-pic");
        setProfilePic(response.data.profilePic);
      } catch (error) {
        console.error("Error fetching profile picture:", error);
        setProfilePic(assets.profile_pic);
      }
    };
    if (isAuthenticated) {
      getProfilePic();
    }
  }, [isAuthenticated]);

=======
  const path=location.pathname;
>>>>>>> upstream/main
  const handleauth = () => {
    if (!isAuthenticated) navigate("/auth");
    else {
      persistor.purge();
      dispatch(logout());
      navigate("/");
    }
  };
  const handlechat = () => {
    if (isAuthenticated) navigate("/chat");
    else navigate("/auth");
  };

  const handleProfileClick = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !profileRef.current.contains(event.target)
      ) {
        setShowLogoutPopup(false);
      }
    };
    if (showLogoutPopup) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLogoutPopup]);

  return (
    <header className="fixed w-full z-50 flex justify-around items-center p-2 gap-[14rem] bg-[#ffffff] shadow-lg">
      <div className="text-3xl font-bold">
        <a onClick={() => navigate("/")} className=" ">
          <img
            className=" h-10 active:scale-[1.02] cursor-pointer"
            src={assets.logo2}
            alt=""
          />
        </a>
      </div>
      <nav className="flex gap-10 justify-center text-base ">
        <button
          onClick={handlechat}
          className={`${path==='/chat' &&  `font-semibold text-main`} no-underline flex items-center p-1 outline-none hover:underline hover:text-main`}
        >
          Chat
        </button>
        <button
<<<<<<< HEAD
          onClick={() => navigate("/blogs")}
          className=" no-underline flex items-center p-1 outline-none  hover:text-main"
        >
          Blogs
        </button>
        {!isAuthenticated ? (
          <button
            onClick={handleauth}
            className="bg-main text-white items-center py-2 px-3 rounded no-underline hover:bg-purple-800"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <img
              ref={profileRef}
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={handleProfileClick}
            />
            {showLogoutPopup && (
              <div
                ref={popupRef}
                className="absolute top-11 left-4 bg-white border border-gray-300 shadow-lg rounded-lg w-24 hover:bg-gray-200"
              >
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-base text-red-600 font-medium p-3"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
=======
          onClick={()=>navigate('/blogs')}
          className={`${(path==='/blogs' || path.startsWith('/blog')) &&  `font-semibold text-main`} no-underline flex items-center p-1 outline-none hover:underline hover:text-main`}
        >
          Blogs
        </button>
        <button
          onClick={handleauth}
          className=" w-20 text-center bg-main text-white border transition-transform duration-300 hover:scale-105  py-2 px-3 rounded-md font-medium no-underline "
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
>>>>>>> upstream/main
      </nav>
    </header>
  );
};

export default Header;
