import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { assets } from "../assets/assets";
import logo2 from "../assets/logo2.png"

const Header = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleauth = () => {
    if (!isAuthenticated) navigate("/auth");
    else {
      dispatch(logout());
      navigate("/");
    }
  };
  const handlechat = () => {
    if (isAuthenticated) navigate("/chat");
    else navigate("/auth");
  };
  return (
    <header
      className="fixed w-full z-50 flex justify-around items-center p-2 gap-[14rem] bg-[#ffffff] shadow-lg"
    >
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
          className=" no-underline flex items-center p-1 outline-none hover:text-main"
        >
          Chat
        </button>
        <button
          onClick={()=>navigate('/blogs')}
          className=" no-underline flex items-center p-1 outline-none  hover:text-main"
        >
          Blogs
        </button>
        <button
          onClick={handleauth}
          className="bg-main text-white items-center py-2 px-3  rounded  no-underline hover:bg-purple-800"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
