import React from "react";
import darfildLogoPencil from "../assets/images/darfild-logo-with-pencil.png";
import filip from "../assets/images/filip.jpg";
import books from "../assets/images/books-png.png";
import microphoneDrawing from "../assets/images/microphone-cartoon.png";
import pencil from "../assets/images/pencil-png.png";
import flags from "../assets/images/small-flags.png";
import { EN_TEXTS } from "../constants/TEXTS.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="page">
      <div id="intro-section" className="section intro">
        <img src={darfildLogoPencil} alt="logo-with-pencil" />
        <div className="title">
          <h1>{EN_TEXTS.TRANSLATION_AND}</h1>
          <h1>{EN_TEXTS.INTERPRETATION_SERVICES}</h1>
        </div>

        <div className="contact">
          <p>{EN_TEXTS.COMPANY}</p>
          <p>{EN_TEXTS.ADDRESS}</p>
          <p>
            {EN_TEXTS.TELEPHONE} {EN_TEXTS.EMAIL}
          </p>
          <p>
            {EN_TEXTS.DUNS}, {EN_TEXTS.NCAGE}, {EN_TEXTS.UEID}
          </p>
        </div>
      </div>

      <div id="owner-section" className="section dark-text">
        <img className="books" src={books} alt="books" />
        <div className="owner-texts">
          <div className="owner-bio">
            <img src={filip} alt="darfild-owner" />
            <h3>{EN_TEXTS.FILIP_MARKOVIKJ}</h3>
            <h3>{EN_TEXTS.OWNER_AND_MANAGER}</h3>
          </div>

          <div>
            <p>{EN_TEXTS.OWNER_1}</p>
            <p>{EN_TEXTS.OWNER_2}</p>
          </div>
        </div>

        <p>{EN_TEXTS.OWNER_3}</p>
        <h1>{EN_TEXTS.OUR_RANGE_OF_SERVICES}</h1>
      </div>

      <div id="translation-section" className="section">
        <h2>{EN_TEXTS.TRANSLATION_1}</h2>
        <p>{EN_TEXTS.TRANSLATION_2}</p>
      </div>

      <div id="interpretation-section" className="section">
        <h2>{EN_TEXTS.INTERPRETATION_1}</h2>
        <p>{EN_TEXTS.INTERPRETATION_2}</p>
      </div>

      <div id="transcription-section" className="section">
        <h2>{EN_TEXTS.TRANSCRIPTION_1}</h2>
        <p>{EN_TEXTS.TRANSCRIPTION_2}</p>
      </div>

      <div id="why-section" className="section dark-text">
        <h2>{EN_TEXTS.EQUIPMENT_1}</h2>

        <div className="microphone">
          <img src={microphoneDrawing} alt="cartoon-microphone" />
          <div className="why-texts">
            <img src={pencil} alt="pencil-icon" />
            <div className="first">
              <p>{EN_TEXTS.WHY_CHOOSE_DARFILD}</p>
              <p>{EN_TEXTS.WHY_1}</p>
              <p>{EN_TEXTS.WHY_2}</p>
            </div>

            <div className="second">
              <p>{EN_TEXTS.CONTACT_1}</p>
              <p>{EN_TEXTS.CONTACT_2}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="end-section" className="section">
        <img className="logo" src={darfildLogoPencil} alt="logo-with-pencil" />
        <div className="title">
          <h1>{EN_TEXTS.TRANSLATION_AND}</h1>
          <h1>{EN_TEXTS.INTERPRETATION_SERVICES}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
