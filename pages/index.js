import Head from "next/head";
import Image from "next/image";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import HowToUse from "../components/HowToUse";
import Footer from "../components/Footer";
import React, { useState, useMemo,useRef, useEffect } from 'react'
import { useRouter } from "next/router";
import logoImage from '../public/textImage.png';
import cellPhone from '../img/cell.svg'
import cellBg from '../img/11.png'
import Link from "next/link";
import Select from 'react-select'
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
}
const customStylesMobile = {
  container: (base) =>({
    ...base,
    minWidth: 200,
    width: '60%',
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    borderRadius: '30px',
    boxShadow: '0 0 0 0px rgba(0,0,0)',
    borderColor: state.isFocused?'hsl(0, 0%, 80%)  !important':'hsl(0, 0%, 80%)  !important',    
  }),
  indicatorSeparator: (base) => ({
    ...base,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
  }),
}

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
export default function Home(data) {
  const [width, setWidth] = useState(0);
  const [isRender, setIsRender] = useState(false);

  const searchInputRef = useRef(null);
  const router = useRouter();
  //console.log(data);
  const allpagedata = data;
  const allarticle = data.data.articles;
  const [value, setValue] = useState({label:"English",value:'EN'})
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
  const changeHandler = value => {
    setValue(value)
  }
  //console.log(data);
 /* const allpagedata = data;
  const allarticle = data.data.articles;*/
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}&lan=${value.value.toLowerCase()}`);
  };
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
    <div className="flex flex-col justify-center  indeshamible">
      <Head>

      <meta name="description" content="Cross-language search web browser" />
      <meta name="keywords" content="Web browser, multilingual, cross-language search"/>
      <meta name="author" content="Konlap Technologies E.I.R.L"/>


        <title>Konlap web browser </title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


      </Head>

      <form className="flex flex-col items-center  flex-grow icon-size form-size" style={{ marginTop: "150px" }}>
        <div className="topcenlog" style={{ maxWidth: 300, margin: "0 auto" }}>
          <Image
            src={logoImage}
            alt="Konlap web browser"
          />
        </div>
        <div className={(isMobile ?'py-5 ':'pr-1 ')+"flex w-3/4 md:w-3/5 lg:w-3/5 xl:w-1/2 2xl:w-1/2 mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 pl-5  items-center"}>
          <SearchIcon className="mr-3" style={{ width: "30px", color: "grey" }} />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
          />
          {/*
          <MicrophoneIcon className="h-5" />
          */}
          {isMobile== false && isRender ?<Select 
          placeholder="In which language do you want to search?"
          options={options} 
          value={value} 
          onChange={changeHandler} 
          styles={customStyles}
        />:null}
          
        </div>
        {isMobile== true && isRender?<><br /><Select 
          placeholder="In which language do you want to search?"
          options={options} 
          value={value} 
          styles={customStylesMobile}
          onChange={changeHandler} 
        /></>:null}
        <div className="  flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4" style={{ maxWidth: 300, display: isMobile?'flex': 'none' }}>
          <button onClick={search} className="btn text-lg font-semibold bg-sky-500 hover:bg-sky-600 p-2 text-gray-100 hover:text-gray-100">Search</button>
         {/* <button onClick={search} className="btn">
            I&apos;m Feeling Lucky
          </button>*/}
        </div>

        {
          /*
        <div className="mudlsihidel flex flex-col w-1/2 space-y-2 justify-center mt-6 sm:space-y-0 sm:flex-row sm:space-x-4" style={{ maxWidth: 300 }}>
          <button onClick={search} className="btn text-lg font-semibold bg-sky-500 hover:bg-sky-600 p-2 text-gray-100 hover:text-gray-100">
            Translate
          </button>

          <button onClick={search} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div> */
}  




      </form>
      {/* newressultdlaist */}
      <div className="newressultdlaist">
        <div className="mt-10">
          <HowToUse></HowToUse>
          {/* <NewsResults allarticle={allarticle} />    */}
        </div>
      </div>

      <div className="wave" id="about" style={{ padding: "50px 0", marginTop: "100px" }}>

        <div className="w3-container" >
          <h3 className="w3-center text-white pb-2" style={{ fontSize: "30px" }} >How to use Konlap?</h3>
          <div className="w3-row-padding w3-center">

            <p className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto text-xl font-medium text-gray-100">
              Next to the search box, select a language you want to search in<br /> 
              Try using longer sentences to get more accurate search results.

            </p>

          </div>
        </div>
      </div>


      <div className="container mx-auto px-10" >
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between gap-y-14" style={{ paddingBottom: "35px !important" }}>
          <div className="w-full md:mt-10 lg:mt-32 xl:mt-32 2xl:mt-32 flex flex-col  items-center md:items-start lg:items-start xl:items-start 2xl:items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
            <h3 className="w-full text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl" style={{ fontWeight: "400", color: "#0891b2" }}>Discover, Explore!</h3>
            <p className=" text-xl w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5 mt-6">Search for hotels in Madrid on Spanish-language pages or bars in Tokyo from Japanese sources</p>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <Image src={cellBg} />
              <div className="w-3/4 absolute top-16 left-8">
                <Image src={cellPhone} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w3-container py-10 mt-14" style={{ backgroundColor: "#11A4D4" }}>
        <div className="w3-row-padding" style={{ paddingTop: "30px !important", paddingBottom: "35px !important" }}>
          <div className="w3-col m6 text-white text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
            <h3 style={{ fontSize: "25px", fontWeight: "400", color: "#fff", lineHeight: "33px" }}>The content you access is determined by the language you speak</h3>
            <p className="mt-8 text-lg leading-8">Searching the web may not always satisfy a searcher's query, because relevant results might not even exist in the searcher's language.</p>
            <p>Tackling the language barrier on the Internet is more than just increasing the number of Internet users. It is about making knowledge accessible to more users who speak a diversity of languages</p>
          </div>
          <div className="w3-col m5 mt-10">
            <p className="w3-wide text-lg"><i className="fa fa-globe w3-margin-right"></i>Websites in English</p>
            <div className="w3-grey mb-6 mt-2">
              <div className="w3-container w3-dark-grey w3-center" style={{ width: "62%", backgroundColor: "#fff !important", color: "black !important" }}>62%</div>
            </div>
            <p className="w3-wide text-lg"><i className="fa fa-globe w3-margin-right"></i>Websites in French</p>
            <div className="w3-grey mb-6 mt-2">
              <div className="w3-container w3-dark-grey w3-center" style={{ width: "2.9%", backgroundColor: "#fff !important", color: "black !important" }}>2.9%</div>
            </div>
            <p className="w3-wide text-lg"><i className="fa fa-globe w3-margin-right"></i>Websites in Japanese</p>
            <div className="w3-grey mb-6 mt-2">
              <div className="w3-container w3-dark-grey w3-center" style={{ width: "2.3%", backgroundColor: "#fff !important", color: "black !important" }}>2.3%</div>
            </div>
          </div>
        </div>
      </div>
      {/* Search services */}
      { /*
      <section className="bg-sky-50 py-14 px-4" id="SearchServices">
        <div className="container mx-auto">
          <h3 className="text-center text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Quality search results</h3>
          <p className="text-center text-lg mt-4">Konlap delivers Google search results via our proprietary personal data protection technology.</p>
          <div className="services w-full xl:w-4/5 2xl:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-center gap-8 py-12">
            <div className="service flex flex-col items-center bg-white gap-y-2 px-6 py-10 rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-lock" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Encrypted connection</h5>
              <p className="text-lg font-medium text-center">Your IP address is removed from all our global premise servers.</p>
            </div>

            <div className="service flex flex-col items-center bg-white gap-y-2  px-6 py-10  rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-usd" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Block price trackers</h5>
              <p className="text-lg font-medium text-center">We prevent 3rd parties from setting price trackers on you.</p>
            </div>

            <div className="service flex flex-col items-center bg-white gap-y-2 px-6 py-10  rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-adn" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Avoid ads</h5>
              <p className="text-lg font-medium text-center">We block 3rd parties from accessing your personal data to target you.</p>
            </div>

            <div className="service flex flex-col items-center bg-white gap-y-2  px-6 py-10 rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-chrome" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Browse anonymously</h5>
              <p className="text-lg font-medium text-center">Anonymous View proxy masks your identity while browsing other websites.</p>
            </div>

            <div className="service flex flex-col items-center bg-white gap-y-2 px-6 py-10 rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-newspaper-o" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Receive unprofiled news</h5>
              <p className="text-lg font-medium text-center">Access news that’s not based on your browsing behavior.</p>
            </div>

            <div className="service flex flex-col items-center bg-white gap-y-2 px-6 py-10 rounded-lg shadow-lg">
              <div className="service-icon ">
                <i className="fa fa-tasks" style={{ fontSize: "45px", color: "#F77779" }} aria-hidden="true"></i>
              </div>
              <h5 className="text-xl font-bold">Prevent online profiling</h5>
              <p className="text-lg font-medium text-center">We don’t create personal data profiles based on your Internet activities.</p>
            </div>
          </div>
        </div>
      </section>  *}
      {/* join section */}
      <section className=" py-20 px-4">
        <h3 className="w-full md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-3/5 mx-auto text-center text-2xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl" >Join people worldwide who already use Konlap</h3>
        <div className="join-btn flex justify-center mt-8">
          <button className="btn py-2 px-6 bg-sky-500 hover:bg-sky-600 text-lg text-gray-100 inline-block">Add Konlap to your Browser - it's free</button>
        </div>
      </section>
      <Footer />

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NL828ZY4WM"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NL828ZY4WM');`}
      </script>
    </div >



  );

}



export async function getServerSideProps(context) {

  const data =[];

  return { props: { data } }


}
