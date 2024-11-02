import "./style.scss"
import Heading from "../common/Heading"
import ImageAbout from "../../assets/images/about.png"
import { TbLicense } from "react-icons/tb"
import { useEffect } from 'react'
import Lycence from "../../assets/images/certificates/second.png"
import { useContext } from "react"
import { globalContext } from "../../store/index.js"
import { useTranslation } from "react-i18next";


function About() {
  const state = useContext(globalContext)
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <main className="about-page-wrapper">
      <Heading size={1.4}>{t("about")}</Heading>

      <div className="content-wrapper">
        <img src={ImageAbout} alt="ImageAbout" width={"100%"} height={450} />

        <div className="info">
          <p>{t("about-page.team-info")}</p>
          <p>{t("about-page.team-info2")}</p>
          <p>{t("about-page.team-info3")}</p>
          <a className="warning-btn" href={Lycence} download={"Lycence"} style={{ display: "inline-block" }}>
            <TbLicense /> {t("about-page.licences")}
          </a>

        </div>
      </div>
    </main>
  );
}

export default About;
