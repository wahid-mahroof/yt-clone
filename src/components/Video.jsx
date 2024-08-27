import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  console.log(video);
  return (
    <div class="">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/*  thumbnailand duration*/}
          <div className=" relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden ">
            <img
              className="h-full w-full "
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo andtitle*/}
          <div className="flex space-x-2 mt-3  ">
            <div className="flex h-9 w-9 rounded-full overflow-hidden border">
              <div>
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              {/* channelname views time*/}
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex">
                <span className="text-gray-500 text-[12px]">
                  {`${abbreviateNumber(video?.stats?.views, 2)}views`}
                </span>
                <span className="flex text-[24px] leading-none font-bold relative top-[10px] mx-1">
                  .
                </span>
                <span className="text-gray-500 text-[12px]">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
