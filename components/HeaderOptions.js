import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import translate from 'translate-google-api';
import React, { useState, useMemo,useRef, useEffect } from 'react'

const HeaderOptions = () => {
  const [isRender, setIsRender] = useState(false);
  const [width, setWidth] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
  useEffect(() => {
    setIsRender(true);
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
const isMobile = width <= 768;
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        {
          isMobile === false?<>
                 <HeaderOption Icon={PhotographIcon} title="Images" />
          <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
         <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
          </>:null
        }
        
      </div>
      <div className="flex space-x-4">
      <div id="google_translate_element"></div>
      </div>
      {/*<div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>*/}
    </div>
  );
};

export default HeaderOptions;
