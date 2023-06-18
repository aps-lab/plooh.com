import * as React from "react"
import Layout from "../components/Layout"
import websiteLogo_Mondial from "../img/websiteLogo_Mondial.png";
import websiteLogo_Mondial_p_500 from "../img/websiteLogo_Mondial-p-500.png";
import Iphone12Mockup from "../img/Iphone12Mockup.png";
import Iphone12Mockup_p_500 from "../img/Iphone12Mockup-p-500.png";
import Iphone12Mockup_p_800 from "../img/Iphone12Mockup-p-800.png";
import Iphone12Mockup_p_1080 from "../img/Iphone12Mockup-p-1080.png";
import SocialAssetRecovery from "../img/social-asset-recovery.png";



export default function Home() {
  return (
    <Layout>
      <img src={websiteLogo_Mondial} loading="lazy"
        width="400" sizes="(max-width: 479px) 80vw, 400px"
        srcSet={`${websiteLogo_Mondial_p_500} 500w, ${websiteLogo_Mondial} 962w`}
        alt="" className="image-7" />
      <h2 className="center-align"><span className="text-span-2 clipped">Empowering Everyone's Digital Identity and Crypto Assets</span><br />‍</h2>

      <div className="w-layout-grid">
        <img className="main-img image-2" src={Iphone12Mockup} width="350" alt="Plooh phone" sizes="(max-width: 479px) 89vw, 350px" loading="lazy" srcSet={`${Iphone12Mockup_p_500} 500w, ${Iphone12Mockup_p_800} 800w, ${Iphone12Mockup_p_1080} 1080w, ${Iphone12Mockup} 1117w`} />
        <h3 className="grid-item feature-1">A completely private and truly non-custodial
          wallet for cryptocurrencies, digital identities, and digital peer-to-peer transactions</h3>
        <h3 className="feature-2">Securely preserve your assets with our shared custody wallet, ensuring protection against malware while granting you full control over your assets</h3>
        <h3 className="feature-3">Our Social Asset Recovery provides peace of mind in case of lost or compromised access to your mobile device or crypto credentials</h3>
        <h3 className="feature-4">There is no more excuse to refrain from taking and maintaining control of your digital belongings</h3>
      </div>

      <div className="content--section--3 wf-section">
        <div className="mycontain content">
          <h3 className="feature-4 center-align">What if the people you trust could assist in securing your digital assets?
          </h3>
        </div>
      </div>
      <div className="content--section--2 wf-section">
        <div className="mycontain trust">
          <div><img src={SocialAssetRecovery} loading="lazy" width="585"
            alt="Plooh network of trust" className="image-3" /></div>
        </div>
      </div>

      <div className="mycontain content">
        <div className="gray">
          <hr />
        </div>
        <div className="w-layout-grid">
          <div className="gray">
            <span ><b>Legal Entity</b></span><br/>
            Plooh LLC<br />
            3127 Watsons Bend<br />
            Alpharetta, 30004 GA, USA<br />
            info@plooh.com
          </div>

          <div className="gray">
            <span><b>Managing Director</b></span><br />
            Francis Pouatcha<br />
            https://github.com/francis-pouatcha<br />
            <span className="gray">This site does not store your browsing data!</span><br />
            <span className="gray">© Plooh LLC 2023</span>
          </div> 
        </div>         
      </div>
    </Layout>
  )
}
