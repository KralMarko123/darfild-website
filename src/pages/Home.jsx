import { useState } from "react";
import darfildLogoPencil from "../assets/images/darfild-logo-with-pencil.png";
import filip from "../assets/images/filip.jpg";
import books from "../assets/images/books-png.png";
import microphoneDrawing from "../assets/images/microphone-cartoon.png";
import pencil from "../assets/images/pencil-png.png";
import { EN_TEXTS, MK_TEXTS } from "../constants/TEXTS.jsx";
import TopWaveWhite from "../components/TopWaveWhite.jsx";
import BottomWaveWhite from "../components/BottomWaveWhite.jsx";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import "./Home.css";
import "./Mobile.css";

const Home = () => {
  const [language, setLanguage] = useState("en");
  const TEXTS = language === "mk" ? MK_TEXTS : EN_TEXTS;

  return (
    <div className={`page language-${language}`}>
      <LanguageSwitcher language={language} onChange={setLanguage} />

      <div id="intro-section" className="section intro">
        <div className="logo">
          <img src={darfildLogoPencil} alt="logo-with-pencil" />
          <h1>{TEXTS.TRANSLATION_AND_INTERPRETATION_SERVICES}</h1>
        </div>

        <div className="contact">
          <p>{TEXTS.COMPANY}</p>
          <p>{TEXTS.ADDRESS}</p>
          <p>
            {TEXTS.TELEPHONE} {TEXTS.EMAIL}
          </p>
          <p>
            {TEXTS.DUNS}, {TEXTS.NCAGE}, {TEXTS.UEID}
          </p>
        </div>

        <BottomWaveWhite />
      </div>

      <div id="owner-section" className="section dark-text">
        <img className="books" src={books} alt="books" />
        <div className="owner-texts">
          <div className="owner-bio">
            <img src={filip} alt="darfild-owner" />
            <h3>{TEXTS.FILIP_MARKOVIKJ}</h3>
            <h3>{TEXTS.OWNER_AND_MANAGER}</h3>
          </div>

          <div>
            <p>{TEXTS.OWNER_1}</p>
            <p>{TEXTS.OWNER_2}</p>
          </div>
        </div>

        <p>{TEXTS.OWNER_3}</p>
        <h1>{TEXTS.OUR_RANGE_OF_SERVICES}</h1>
      </div>

      <div id="translation-section" className="section">
        <TopWaveWhite />
        <h2>{TEXTS.TRANSLATION_1}</h2>
        <p>{TEXTS.TRANSLATION_2}</p>
        <div className="section-wave" aria-hidden="true" />
      </div>

      <div id="interpretation-section" className="section">
        <h2>{TEXTS.INTERPRETATION_1}</h2>
        <p>{TEXTS.INTERPRETATION_2}</p>
        <div className="section-wave" aria-hidden="true" />
      </div>

      <div id="transcription-section" className="section">
        <h2>{TEXTS.TRANSCRIPTION_1}</h2>
        <p>{TEXTS.TRANSCRIPTION_2}</p>
        <BottomWaveWhite />
      </div>

      <div id="why-section" className="section dark-text">
        <h2>{TEXTS.EQUIPMENT_1}</h2>

        <div className="microphone">
          <img id="why-pencil" src={pencil} alt="pencil-icon" />
          <img src={microphoneDrawing} alt="cartoon-microphone" />
          <div className="why-texts">
            <div className="first">
              <p>{TEXTS.WHY_CHOOSE_DARFILD}</p>
              <p>{TEXTS.WHY_1}</p>
              <p>{TEXTS.WHY_2}</p>
            </div>

            <div className="second">
              <p>{TEXTS.CONTACT_1}</p>
              <p>{TEXTS.CONTACT_2}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="end-section" className="section">
        <TopWaveWhite />
        <div className="end-logo">
          <img
            className="logo"
            src={darfildLogoPencil}
            alt="logo-with-pencil"
          />
          <h1>{TEXTS.TRANSLATION_AND_INTERPRETATION_SERVICES}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
