"use client"

import React, {useState} from 'react'
import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'

const ParentSearchComboBox = () => {
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');

    const handleSelectCrime = (selectedOption: string) => {
        setSelectedOptionCrime(selectedOption);
    };

    const handleSelectLoc = (selectedOption: string) => {
        setSelectedOptionLoc(selectedOption);
    };

    const optionsCrime = [
        "Alla",
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
        "Vållande till kroppsskada"];

    const optionsLoc = ['ät mina fucking bollar lmao ','loc1', 'loc2', 'loc3'];

    return (
        <div className={styles.container}> 
            <SearchComboBox title="Sortera på brott " options={optionsCrime} onSelect={handleSelectCrime}/>
            <p>Selected crime option: {selectedOptionCrime}</p>
            <SearchComboBox title="Sortera på plats " options={optionsLoc} onSelect={handleSelectLoc} />
            <p>Selected loc option: {selectedOptionLoc}</p>
        </div>
    );
};

export default ParentSearchComboBox;