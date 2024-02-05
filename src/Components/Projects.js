import React from 'react';
import "./Projects.css";
import { useLanguage } from './LanguageContext';


function Projects() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="universal-page-container">

      <h1>{languageData.projectsText}</h1>
      <p>{languageData.projectsParagraph}</p>

      <h2>{languageData.opiskelijaruokalistatHeading}</h2>
      <h3>{languageData.opiskelijaruokalistatDetails}</h3>
      <p>{languageData.opiskelijaruokalistatDescription}</p>
      <img
        className='mobile-view'
        src="./icons/opiskelijaruokalistatgif.gif"
        alt="Example picture of opiskelijaruokalistat web application"
      />
      <p>{languageData.opiskelijaruokalistatPictureDescription}</p>

      <h2>{languageData.koedaHeading}</h2>
      <h3>{languageData.koedaDetails}</h3>
      <p>{languageData.koedaDescription}</p>
      <img
        className='project-picture'
        src="./icons/koedanew.png"
        alt="Example picture of koeda consulting new landing page"
      />
      <p>{languageData.KoedaPictureDescription1}</p>
      <img
        className='project-picture'
        src="./icons/koedaold.png"
        alt="Example picture of koeda consulting old landing page"
      />
      <p>{languageData.KoedaPictureDescription2}</p>
      <img
        className='project-picture'
        src="./icons/koedanewfooter.png"
        alt="Example picture of koeda consulting new footer"
      />
      <p>{languageData.KoedaPictureDescription3}</p>
      <img
        className='project-picture'
        src="./icons/koedaoldfooter.png"
        alt="Example picture of koeda consulting old footer"
      />
      <p>{languageData.KoedaPictureDescription4}</p>
      <img
        className='mobile-view'
        src="./icons/koedanewmobilemenu.png"
        alt="Example picture of koeda consulting new mobile navigation"
      />

      <p>{languageData.KoedaPictureDescription5}</p>
      <img
        className='mobile-view'
        src="./icons/koedaoldmobilemenu.png"
        alt="Example picture of koeda consulting old mobile navigation"
      />
      <p>{languageData.KoedaPictureDescription6}</p>

      <h2>{languageData.atkytpHeading}</h2>
      <h3>{languageData.atkytpDetails}</h3>
      <p>{languageData.atkytpDescription}</p>

      <img
        className='project-picture'
        src="./icons/atkytp.png"
        alt="Example picture of ATK-YTP website"
      />
      <p>{languageData.atkytpPictureDescription}</p>
      <img
        className='mobile-view'
        src="./icons/atkytpmobile.png"
        alt="Example picture of ATK-YTP website mobile view"
      />
      <p>{languageData.atkytpPictureDescription2}</p>

      <br />
    </div>
  );
}

export default Projects;
