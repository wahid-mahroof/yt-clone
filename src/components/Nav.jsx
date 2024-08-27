import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo-2.png";
import profile from "../../public/profile.png";
import { CiSearch } from "react-icons/ci";
import { TiMicrophone } from "react-icons/ti";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import Sidebar from "./Sidebar";

function Nav() {
  const [searchQuery, setsearchQuery] = useState("");
  const { setIsSidebar, IsSidebar, mobileShow, setMobileShow } = useUtils();

  useEffect(() => {
    console.log({ IsSidebar, mobileShow });
  }, [IsSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery})`);
      setsearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!Sidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!IsSidebar);
  };
  return (
    <div class="flex justify-between px-6 py-2 fixed top-0  w-[100%] bg-white">
      <div class=" flex items-center space-x-4  cursor-pointer">
        <AiOutlineMenu class="text-xl cursor-pointer" onClick={handleSidebar} />
        <img src={logo} alt="" class="w-28" />
      </div>
      <div class=" flex w-[35%] items-center ">
        <div class="w-[100%] px-3 py-2 rounded-l-full border border-gray-400">
          <input
            type="text"
            placeholder="search"
            class="outline-none "
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          class="px-4 py-2  rounded-r-full bg-gray-100 border-[1px] border-gray-400 "
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch class="text-xl" />
        </button>
        <TiMicrophone
          size={"42px"}
          class="ml-3 border border-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div class="space-x-5 items-center  flex">
        <RiVideoAddLine class="text-2xl" />
        <AiOutlineBell class="text-2xl" />
        <Avatar src={profile} size="32" round={true} class="w-20" />
      </div>
    </div>
  );
}

export default Nav;
