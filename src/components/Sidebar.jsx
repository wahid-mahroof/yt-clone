import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "your videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <PiLightbulbLight />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <SiStylelint />,
    },
    {
      id: 11,
      name: "Podcast",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icon: <GiLinkedRings />,
    },
    {
      id: 4,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Setting",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <CiFlag1 />,
    },
    {
      id: 3,
      name: "Help",
      icon: <IoMdHelpCircleOutline />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div class="px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      {/* Home*/}
      <div class=" space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              class="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div class="text-xl cursor-pointer">{item.icon}</div>
              <span class="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You 2*/}
      <div class="mt-4 space-y-3 items-center">
        <div class="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div class="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div class="text-xl cursor-pointer">{item.icon}</div>
              <span class="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Explorennsidebar*/}
      <div class="mt-4 space-y-3 items-center">
        <div class=" items-center space-x-2">
          <h1 class="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div
              key={item.id}
              class="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div class="text-xl cursor-pointer">{item.icon}</div>
              <span class="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* more from youtube*/}
      <div class="mt-4 space-y-3 items-center">
        <div class=" items-center space-x-2">
          <h1 class="font-semibold">More From Youtube</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div
              key={item.id}
              class="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div class="text-xl cursor-pointer text-red-600">{item.icon}</div>
              <span class="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*  setting*/}
      <div class="mt-4 space-y-3 items-center">
        <div class=" items-center space-x-2"></div>
        {sidebarItems5.map((item) => {
          return (
            <div
              key={item.id}
              class="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div class="text-xl cursor-pointer ">{item.icon}</div>
              <span class="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* text */}
      <br />
      <span class="text-sm font-semibold text-gray-500">
        About Press Copyright <br /> Contct us Creators <br /> Advertise
        Developers
        <br />
        <br />
        <p>
          Terms Privacy Policy & Safety <br />
          How Youtube work <br />
          Test new features
        </p>
      </span>
      <br />
      <p class="text-xs text-gray-800 mt-1">© 2024 wahid mahroof</p>
    </div>
  );
}

export default Sidebar;
