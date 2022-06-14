import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import HeaderPage from "../components/HeaderPage";

export default function About(data) {
  const searchInputRef = useRef(null);
  const router = useRouter();
  


  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderPage />

      <div className="page_conentst mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <div className="page_conentst_title">
          <strong><h1>Terms</h1></strong>

        </div>
        <div className="page_conentst_desc">
          
            
            <p><strong>Privacy Policy</strong><br></br> Our privacy policy is subject to the determinations of Google Inc, which allows us to provide search results.</p>
              <p> See more at: <a href="https://policies.google.com/privacy?hl=en-US" target="_blank">Google Privacy Policy</a></p>
              <p>Last updated: June 7, 2022</p>
            </div><div>
            <strong><h3>1. No Representations or Warranties</h3></strong>
            <p>The services provided on this website and the content, information, documents, graphics and images published on this website may include inaccuracies, typographical or other errors. However, we make no commitment to update the content of this website. In addition, we do not guarantee the accuracy of the translation of search terms or the translation of Web sites. The use of this service is at the user's own risk.
             <br></br>In addition, we reserve the right to modify, alter, discontinue or delete them temporarily or permanently without notice. As a result, to the fullest extent permitted by law, the services and information on this website are provided "as is," and without warranty, and all warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose or non-infringement are disclaimed and you hereby disclaim all warranties.<br></br>Users of this website should not rely on the opinions expressed on this website, or websites to which it leads, in making business, financial, personal or other decisions. In addition, we do not endorse the opinions of third parties expressed on this website or linked websites.<br></br>We assume no responsibility for the accuracy, completeness, quality, integrity, usefulness or value of any content, data, documents, graphics, images, information, advice or opinions contained in e-mails, message boards, chat rooms or community services or any other public service, and do not endorse any advice or opinions contained therein. We do not monitor or control such services, although we reserve the right to do so. We may take any action we deem appropriate, in our sole discretion, to maintain the high quality of our service and to protect ourselves and others.</p><br></br>

           <strong> <h3>2. Limitation of Damages</h3></strong>
            <p>In no event shall we, our officers, employees, contractors, subcontractors, suppliers, agents, affiliates, subsidiaries, successors or assigns be liable to any party for any direct, indirect, consequential, incidental, special or other indirect party (including without limitation, cost of coverage) arising out of or in connection with this agreement or any services, content or other materials provided or made available under the agreement, or the use of any other links or linked websites, even if we are expressly advised of the possibility of such damages, and regardless of whether such damages arise in contract, tort (including negligence), strict liability, strict liability or otherwise.<br></br>Before using this website, please read the Terms of Use set forth below. By using this website, you agree to be bound by the Terms of Use set forth by Konlap E.I.R.L. Strict or other legal basis: the term "damages" includes, without limitation, attorneys' fees, any lost profits, business interruption and loss of programs or other data on your information management system.</p><br></br>

            <strong>  <h3>3. International Use</h3></strong>
            <p>We make no representation that all content, materials and services on our website are appropriate or available for use in all geographic locations, especially in some locations outside Peru, and accessing them from certain locations may be illegal and prohibited. Those who access the content, materials and services from such locations are acting on their own initiative and we are not responsible for their compliance with local or other applicable laws.<br></br>You will not access the foregoing where prohibited by law.</p><br></br>

             <strong> <h3>4. Integration; Severability; General</h3></strong>
            <p>These Terms of Use incorporate by reference any notices contained on this website and constitute the entire agreement with respect to your access to and use of this website. We may modify these Terms of Use at any time by posting revised Terms of Use on our website and your continued use of this website and the services constitutes your agreement to be bound by such revised Terms of Use.<br></br>Terms of Use as modified. Any provision of these Terms of Use that is determined by a court of competent jurisdiction to be unenforceable in any jurisdiction shall be severable from these Terms of Use in that jurisdiction without in any way invalidating the remaining provisions of these Terms of Use. The unenforceability of any provision in a particular jurisdiction shall not render that provision unenforceable in any other jurisdiction.</p>

        </div>
      </div>

    </div>
  );
}

