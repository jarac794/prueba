import Image from "next/image";
import { useRouter } from "next/router";
import { useRef,useState  } from "react";
import { MicrophoneIcon, SearchIcon, XIcon,MenuIcon } from "@heroicons/react/solid";

import logoImage from '../public/textImage_seach.png';

const HeaderPage = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

 
   const gottohome = (e) => {
    e.preventDefault();

    router.push(`/`);
  };

 

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={gottohome} 
          src={logoImage}
          width={60}
          height={60}
        />

     
        
      </div>

     
    </header>
    
  );
};

export default HeaderPage;
