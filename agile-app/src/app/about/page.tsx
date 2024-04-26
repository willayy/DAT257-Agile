import React from "react";
import styles from './page.module.css';
//Our crime data visualization tool aims to revolutionize the way crime data is analyzed and interpreted in Sweden.
const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.projectSection}>
                <h2>Vår Vision</h2>
                <p>
                Vårt verktyg för brottsvisualisering är ett försök att revolutionera sättet som data om brott analyseras och hanteras i Sverige.
                <br /> 
                Genom att utnyttja kraften i datavisualisering och dra nytta av den svenska polisens händelse-API, strävar vi efter att ge användare handlingsbara insikter
                <br />
                som bidrar till säkrare samhällen och välinformerade beslutsprocesser.
                </p>
            </div>
            <div className={styles.unGoalsSection}>
            <h2>Vår koppling till FN:s utvecklingsmål</h2>
                <p>
                Vårt projekt stämmer överens med FN:s hållbara utvecklingsmål 16: Fred, rättvisa och starka institutioner. <br />
                Vi kartlägger och visar alla former av brott rapporterade av den svenska polisen för att minska våld och dödsfall<br />
                 och för att skapa en känsla av trygghet på gatorna. Genom att göra brottsdata mer tillgänglig för allmänheten<br />
                  kan vi främja öppenhet, ansvar och förståelse för brottsituationen, vilket skapar en grund för förändring. <br />
                  Genom att visualisera historiska trender i brottslighet bidrar vi också till att upprätthålla polisens <br />
                  transparenta arbete och främja icke-diskriminerande lagar och policys för hållbar utveckling.
                </p>

            </div>
            <div>
                <h2 className={styles.developersTitle}>Utvecklare</h2>
            </div>
            <div className={styles.peopleSection}>
                
                <div className={styles.person}>
                    <h3>Jonatan Markusson</h3>
                    <p>Kontaktinfo: jomarkusson@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Mandus Högberg</h3>
                    <p>Kontaktinfo: mandus.hogberg@gmail.com</p>
                </div>
            
                <div className={styles.person}>
                    <h3>Max Dreifeldt</h3>
                    <p>Kontaktinfo: maxdreifeldt02@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>William Norland</h3>
                    <p>Kontaktinfo: williamnorland@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Lucas Häyhänen</h3>
                    <p>Kontaktinfo: lucas.hayhanen@live.se</p>
                </div>
                <div className={styles.person}>
                    <h3>Erik Andreassson</h3>
                    <p>Kontaktinfo: erik.andreasson73@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Alexander Muhr</h3>
                    <p>Kontaktinfo: alle.muhr@gmail.com</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default AboutPage;
