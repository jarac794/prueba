import Image from "next/image";
import { useRouter } from "next/router";
import { useRef,useState, useEffect  } from "react";
import { MicrophoneIcon, SearchIcon, XIcon,MenuIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";
//import SidebarMenu from "./SidebarMenu";
import Select from 'react-select'

import logoImage from '../public/textImage_seach.png';
import Link from "next/link";

var options = [
  {value:'af', label:'Afrikaans'},
  {value:'sq', label:'Albanian'},
  {value:'am', label:'Amharic'},
  {value:'ar', label:'Arabic'},
  {value:'hy', label:'Armenian'},
  {value:'az', label:'Azerbaijani'},
  {value:'eu', label:'Basque'},
  {value:'be', label:'Belarusian'},
  {value:'bn', label:'Bengali'},
  {value:'bs', label:'Bosnian'},
  {value:'bg', label:'Bulgarian'},
  {value:'ca', label:'Catalan'},
  {value:'ceb', label:'Cebuano'},
  {value:'ny', label:'Chichewa'},
  {value:'zh', label:'Chinese (Simplified)'},
  {value:'zh-cn', label:'Chinese (Simplified)'},
  {value:'zh-tw', label:'Chinese (Traditional)'},
  {value:'co', label:'Corsican'},
  {value:'hr', label:'Croatian'},
  {value:'cs', label:'Czech'},
  {value:'da', label:'Danish'},
  {value:'nl', label:'Dutch'},
  {value:'en', label:'English'},
  {value:'eo', label:'Esperanto'},
  {value:'et', label:'Estonian'},
  {value:'tl', label:'Filipino'},
  {value:'fi', label:'Finnish'},
  {value:'fr', label:'French'},
  {value:'fy', label:'Frisian'},
  {value:'gl', label:'Galician'},
  {value:'ka', label:'Georgian'},
  {value:'de', label:'German'},
  {value:'el', label:'Greek'},
  {value:'gu', label:'Gujarati'},
  {value:'ht', label:'Haitian Creole'},
  {value:'ha', label:'Hausa'},
  {value:'haw', label:'Hawaiian'},
  {value:'he', label:'Hebrew'},
  {value:'iw', label:'Hebrew'},
  {value:'hi', label:'Hindi'},
  {value:'hmn', label:'Hmong'},
  {value:'hu', label:'Hungarian'},
  {value:'is', label:'Icelandic'},
  {value:'ig', label:'Igbo'},
  {value:'id', label:'Indonesian'},
  {value:'ga', label:'Irish'},
  {value:'it', label:'Italian'},
  {value:'ja', label:'Japanese'},
  {value:'jw', label:'Javanese'},
  {value:'kn', label:'Kannada'},
  {value:'kk', label:'Kazakh'},
  {value:'km', label:'Khmer'},
  {value:'ko', label:'Korean'},
  {value:'ku', label:'Kurdish (Kurmanji)'},
  {value:'ky', label:'Kyrgyz'},
  {value:'lo', label:'Lao'},
  {value:'la', label:'Latin'},
  {value:'lv', label:'Latvian'},
  {value:'lt', label:'Lithuanian'},
  {value:'lb', label:'Luxembourgish'},
  {value:'mk', label:'Macedonian'},
  {value:'mg', label:'Malagasy'},
  {value:'ms', label:'Malay'},
  {value:'ml', label:'Malayalam'},
  {value:'mt', label:'Maltese'},
  {value:'mi', label:'Maori'},
  {value:'mr', label:'Marathi'},
  {value:'mn', label:'Mongolian'},
  {value:'my', label:'Myanmar (Burmese)'},
  {value:'ne', label:'Nepali'},
  {value:'no', label:'Norwegian'},
  {value:'ps', label:'Pashto'},
  {value:'fa', label:'Persian'},
  {value:'pl', label:'Polish'},
  {value:'pt', label:'Portuguese'},
  {value:'pa', label:'Punjabi'},
  {value:'ro', label:'Romanian'},
  {value:'ru', label:'Russian'},
  {value:'sm', label:'Samoan'},
  {value:'gd', label:'Scots Gaelic'},
  {value:'sr', label:'Serbian'},
  {value:'st', label:'Sesotho'},
  {value:'sn', label:'Shona'},
  {value:'sd', label:'Sindhi'},
  {value:'si', label:'Sinhala'},
  {value:'sk', label:'Slovak'},
  {value:'sl', label:'Slovenian'},
  {value:'so', label:'Somali'},
  {value:'es', label:'Spanish'},
  {value:'su', label:'Sundanese'},
  {value:'sw', label:'Swahili'},
  {value:'sv', label:'Swedish'},
  {value:'tg', label:'Tajik'},
  {value:'ta', label:'Tamil'},
  {value:'te', label:'Telugu'},
  {value:'th', label:'Thai'},
  {value:'tr', label:'Turkish'},
  {value:'uk', label:'Ukrainian'},
  {value:'ur', label:'Urdu'},
  {value:'uz', label:'Uzbek'},
  {value:'vi', label:'Vietnamese'},
  {value:'cy', label:'Welsh'},
  {value:'xh', label:'Xhosa'},
  {value:'yi', label:'Yiddish'},
  {value:'yo', label:'Yoruba'},
  {value:'zu', label:'Zulu'}
];
const customStyles = {
  container: (base) =>({
    ...base,
    minWidth: 180
  }),
  control: (base, state) => ({
    ...base,
    borderWidth: state.isFocused?'0px !important':'0px !important',
    backgroundColor: 'transparent',
    borderLeftWidth: '1px !important',
    borderRadius: '0px',
    boxShadow: '0 0 0 0px rgba(0,0,0)',
    borderColor: state.isFocused?'hsl(0, 0%, 80%)  !important':'hsl(0, 0%, 80%)  !important',
    
  }),
  indicatorSeparator: (base) => ({
    ...base,
    marginBottom: '14px',
    marginTop: '14px',
  }),
  valueContainer: (base) => ({
    ...base,
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '12px',
  })
}
const customStylesMobile = {
  container: (base) =>({
    ...base,
    minWidth: 200,
    width: '72%',
    margin: 'auto',
    marginBottom: '20px'
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    borderRadius: '30px',
    boxShadow: '0 0 0 1px rgba(0,0,8%)',
    borderColor: state.isFocused?'hsl(0, 0%, 80%)  !important':'hsl(0, 0%, 80%)  !important',    
  }),
  indicatorSeparator: (base) => ({
    ...base,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
  }),
}
const Header = () => {
  const [width, setWidth] = useState(0);
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [value, setValue] = useState({})
  const [isRender, setIsRender] = useState(false);
  const [searchValue, setSearchValue] = useState(router.query.lan);
  
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    
    if (!term) return;

    router.push(`/search?term=${term}&lan=${value.value.toLowerCase()}`);
  };
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
  const changeHandler = value => {
    setSearchValue(value.value)
    setValue(value)
  }
  
   const gottohome = (e) => {
    e.preventDefault();

    router.push(`/`);
  };

  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  useEffect(() => {
    let curSelValue = options.find(e=>e.value === router.query.lan)
    console.log(curSelValue)
    setValue(curSelValue);
    setIsRender(true);
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
const isMobile = width <= 768;

  return (
    <header className="sticky top-0 bg-white">
      <div className={(isMobile ?'px-6 py-4':'p-6   ')+"  flex w-full  items-center"}>
        <Image
          onClick={gottohome} 
          src={logoImage}
          width={60}
          height={60}
        />

        <form className={(isMobile ?'py-4 px-6 ':'px-6   ')+" flex flex-grow ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"}>
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
         {/* <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
            onClick={search}
          />*/}
           {isMobile === false && isRender?<Select 
          placeholder="In which language do you want to search?"
          options={options} 
          onChange={changeHandler} 
          styles={customStyles}
          value = {
            options.filter(option => 
               option.value === searchValue)
         }
        />:null}
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <div className="righttlciel">
          <MenuIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
              onClick={toggle}
            />
        </div>

        
      </div>
      {isMobile== true && isRender?<Select 
          placeholder="In which language do you want to search?"
          options={options} 
          value={value} 
          styles={customStylesMobile}
          onChange={changeHandler} 
          value = {
            options.filter(option => 
               option.value === searchValue)
         }
        />:null}
      <HeaderOptions />
      {isOpened && (
        <div className="sidebaropenc">
          <div className="hamburger-mask"  onClick={toggle} ></div>
          <div className="hamburger-drawer">
            <ul>
            <li><Link href={`/about`}>About us</Link></li>
            <li><Link href={`/terms`}>Terms of use</Link></li>
            </ul>
          </div>
        </div>
       )}
    </header>
    
  );
};

export default Header;
