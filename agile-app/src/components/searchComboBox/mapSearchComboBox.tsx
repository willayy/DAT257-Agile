"use client"

import React, {useState} from 'react'
import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'

/**
 * The data passed to the component must follow the interface ParentSearchComboBoxProps found below
 */
interface MapParentSearchComboBoxProps {
    setSelectedOptionCrime: React.Dispatch<React.SetStateAction<string>>;
    setSelectedOptionLoc: React.Dispatch<React.SetStateAction<string>>;
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}
/**
 * A parent component containing two SearchComboBox components for filtering data based on crime type and location.
 * Also contains a button for resetting choices
 * @param ParentSearchComboBox {MapParentSearchComboBoxProps} Object following CardInfo interface
 * @returns {JSX} A React component representing the ParentSearchComboBox.
 */
const MapParentSearchComboBox: React.FC<MapParentSearchComboBoxProps> = ({ setSelectedOptionCrime, setSelectedOptionLoc , selectedOptionCrime, selectedOptionLoc}) => {

    const handleSelectCrime = (selectedOption: string) => {
        setSelectedOptionCrime(selectedOption);
    };

    const handleSelectLoc = (selectedOption: string) => {
        setSelectedOptionLoc(selectedOption);
    };

    const resetChoices= () => {
        handleSelectCrime("");
        handleSelectLoc("")
    };


    /** list containing all the types of crimes that can be filtered on*/
    const optionsCrime = [
        "",
        "Alkohollagen",
        "Anträffad död",
        "Anträffat gods",
        "Arbetsplatsolycka",
        "Bedrägeri",
        "Bombhot",
        "Brand",
        "Brand automatlarm",
        "Bråk",
        "Detonation",
        "Djur skadat/omhändertaget",
        "Ekobrott",
        "Farligt föremål, misstänkt",
        "Fjällräddning",
        "Fylleri/LOB",
        "Förfalskningsbrott",
        "Försvunnen person",
        "Gränskontroll",
        "Häleri",
        "Inbrott",
        "Inbrott, försök",
        "Knivlagen",
        "Kontroll person/fordon",
        "Lagen om hundar och katter",
        "Larm inbrott",
        "Larm överfall",
        "Miljöbrott",
        "Missbruk av urkund",
        "Misshandel",
        "Misshandel, grov",
        "Mord/dråp",
        "Mord/dråp, försök",
        "Motorfordon, anträffat stulet",
        "Motorfordon, stöld",
        "Narkotikabrott",
        "Naturkatastrof",
        "Ofog barn/ungdom",
        "Ofredande/förargelse",
        "Olaga frihetsberövande",
        "Olaga hot",
        "Olaga intrång/hemfridsbrott",
        "Olovlig körning",
        "Ordningslagen",
        "Polisinsats/kommendering",
        "Rattfylleri",
        "Rån",
        "Rån väpnat",
        "Rån övrigt",
        "Rån, försök",
        "Räddningsinsats",
        "Sammanfattning dag",
        "Sammanfattning dygn",
        "Sammanfattning eftermiddag",
        "Sammanfattning förmiddag",
        "Sammanfattning helg",
        "Sammanfattning kväll",
        "Sammanfattning kväll och natt",
        "Sammanfattning natt",
        "Sammanfattning vecka",
        "Sedlighetsbrott",
        "Sjukdom/olycksfall",
        "Sjölagen",
        "Skadegörelse",
        "Skottlossning",
        "Skottlossning, misstänkt",
        "Spridning smittsamma kemikalier",
        "Stöld",
        "Stöld, försök",
        "Stöld, ringa",
        "Stöld/inbrott",
        "Tillfälligt obemannat",
        "Trafikbrott",
        "Trafikhinder",
        "Trafikkontroll",
        "Trafikolycka",
        "Trafikolycka, personskada",
        "Trafikolycka, singel",
        "Trafikolycka, smitning från",
        "Trafikolycka, vilt",
        "Uppdatering",
        "Utlänningslagen",
        "Vapenlagen",
        "Varningslarm/haveri",
        "Våld/hot mot tjänsteman",
        "Våldtäkt",
        "Våldtäkt, försök",
        "Vållande till kroppsskada"
    ];
    /** list containing all the locations that can be filtered on*/
    const optionsLoc = [
        "Kommun",
        "Län",
    ];

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <SearchComboBox title="Filtrera på kommun eller län: " options={optionsLoc} onSelect={handleSelectLoc} selectedOption={selectedOptionLoc} />
                </div>
                <div className={styles.innerContainer} > 
                    <SearchComboBox title="Filtrera på brottstyp: " options={optionsCrime} onSelect={handleSelectCrime} selectedOption={selectedOptionCrime}/>
                </div>
                <button className={styles.button} onClick={resetChoices}>Återställ val</button>
            </div>

        </div>
    );
};

export default MapParentSearchComboBox;