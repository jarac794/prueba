import { GlobeIcon } from "@heroicons/react/solid";
import Link from "next/link";
const Footer = () => {
  return (


    <footer className="grid w-full grid-rows-1 items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-2  grid-flow-row-dense px-8 py-3 items-center bg-gray-50">

      <div className="privacy-blog">
        <p className="text-center"> <a className="text-sky-500 font-bold " href="#">Back to top</a></p>
      </div>

      <div className="">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Konlap Technologies E.I.R.L. 2022
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          {/*<p>Advertising</p>
          <p>Business</p>*/}
          <Link href={`/about`}><p>About us</p></Link>
          <Link href={`/terms`}><p>Terms of use</p></Link>
          {/*<p>Terms</p>
          <p>Settings</p>*/}
        </div>
      </div>
      <div className="flex justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end gap-x-4 text-sm text-slate-700 text-center py-4">
        <a href="https://www.linkedin.com/company/konlap" target="_blank"><i className="fa fa-linkedin text-lg text-sky-700 hover:text-sky-500" aria-hidden="true"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
