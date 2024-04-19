import React from "react";
import styles from './page.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.projectSection}>
                <h2>Our Vision</h2>
                <p>
                Our crime data visualization tool aims to revolutionize the way crime data is analyzed and interpreted in Sweden.
                <br /> 
                By harnessing the power of data visualization and leveraging the Swedish Police Event API, we strive to empower users with actionable insights 
                <br />
                that contribute to safer communities and informed decision-making processes.
                </p>
            </div>
            <div>
                <h2 className={styles.developersTitle}>Developers</h2>
            </div>
            <div className={styles.peopleSection}>
                
                <div className={styles.person}>
                    <h3>Jonatan Markusson</h3>
                    <p>Contact Info: jomarkusson@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Mandus Högberg</h3>
                    <p>Contact Info: mandus.hogberg@gmail.com</p>
                </div>
            
                <div className={styles.person}>
                    <h3>Max Dreifeldt</h3>
                    <p>Contact Info: maxdreifeldt02@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>William Norland</h3>
                    <p>Contact Info: williamnorland@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Lucas Häyhänen</h3>
                    <p>Contact Info: lucas.hayhanen@live.se</p>
                </div>
                <div className={styles.person}>
                    <h3>Erik Andreassson</h3>
                    <p>Contact Info: erik.andreasson73@gmail.com</p>
                </div>
                <div className={styles.person}>
                    <h3>Alexander Muhr</h3>
                    <p>Contact Info: alle.muhr@gmail.com</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default AboutPage;
