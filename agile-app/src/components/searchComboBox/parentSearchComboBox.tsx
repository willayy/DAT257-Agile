"use client"

import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'
import {getUniqueCrimeTypes} from "@/scripts/dataFetching";
import React, {useEffect, useState} from "react";

/**
 * The data passed to the component must follow the interface ParentSearchComboBoxProps found below
 */
interface ParentSearchComboBoxProps {
    setSelectedOptionCrime: React.Dispatch<React.SetStateAction<string>>;
    setSelectedOptionLoc: React.Dispatch<React.SetStateAction<string>>;
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}
/**
 * A parent component containing two SearchComboBox components for filtering data based on crime type and location.
 * Also contains a button for resetting choices
 * @param ParentSearchComboBox {ParentSearchComboBoxProps} Object following CardInfo interface
 * @returns {JSX} A React component representing the ParentSearchComboBox.
 */
const ParentSearchComboBox: React.FC<ParentSearchComboBoxProps> = ({ setSelectedOptionCrime, setSelectedOptionLoc , selectedOptionCrime, selectedOptionLoc}) => {
    const [optionsCrime, setOptionsCrime] = useState<string[]>([]);

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

    /** Effect hook which gets the list of unique crime types of type string[] and sets the state variable to this value*/
    useEffect(() => {
        const fetchCrimeTypes = async () => {
            getUniqueCrimeTypes().then((result) => {
                setOptionsCrime(result)
            })
        }
        fetchCrimeTypes()
    })

    /** list containing all the locations that can be filtered on*/
    const optionsLoc = [
        "",
        "Ale",
        "Alingsås",
        "Alvesta",
        "Aneby",
        "Arboga",
        "Arjeplog",
        "Arvidsjaur",
        "Arvika",
        "Askersund",
        "Avesta",
        "Bengtsfors",
        "Berg",
        "Bjurholm",
        "Bjuv",
        "Blekinge län",
        "Boden",
        "Bollebygd",
        "Bollnäs",
        "Borgholm",
        "Borlänge",
        "Botkyrka",
        "Boxholm",
        "Bromölla",
        "Bräcke",
        "Burlöv",
        "Båstad",
        "Dalarnas län",
        "Dals-Ed",
        "Danderyd",
        "Degerfors",
        "Dorotea",
        "Eda",
        "Ekerö",
        "Eksjö",
        "Emmaboda",
        "Enköping",
        "Eskilstuna",
        "Eslöv",
        "Essunga",
        "Fagersta",
        "Falkenberg",
        "Falköping",
        "Falun",
        "Filipstad",
        "Finspång",
        "Flen",
        "Forshaga",
        "Färgelanda",
        "Gagnef",
        "Gislaved",
        "Gnesta",
        "Gnosjö",
        "Gotland",
        "Gotlands län",
        "Grums",
        "Grästorp",
        "Gullspång",
        "Gällivare",
        "Gävle",
        "Gävleborgs län",
        "Göteborg",
        "Götene",
        "Habo",
        "Hagfors",
        "Hallands län",
        "Hallsberg",
        "Hallstahammar",
        "Halmstad",
        "Hammarö",
        "Haninge",
        "Haparanda",
        "Heby",
        "Hedemora",
        "Helsingborg",
        "Herrljunga",
        "Hjo",
        "Hofors",
        "Huddinge",
        "Hudiksvall",
        "Hultsfred",
        "Hylte",
        "Håbo",
        "Hällefors",
        "Härjedalen",
        "Härnösand",
        "Härryda",
        "Hässleholm",
        "Höganäs",
        "Högsby",
        "Hörby",
        "Höör",
        "Jokkmokk",
        "Jämtlands län",
        "Järfälla",
        "Jönköping",
        "Jönköpings län",
        "Kalix",
        "Kalmar",
        "Kalmar län",
        "Karlsborg",
        "Karlshamn",
        "Karlskoga",
        "Karlskrona",
        "Karlstad",
        "Katrineholm",
        "Kil",
        "Kinda",
        "Kiruna",
        "Klippan",
        "Knivsta",
        "Kramfors",
        "Kristianstad",
        "Kristinehamn",
        "Krokom",
        "Kronobergs län",
        "Kumla",
        "Kungsbacka",
        "Kungsör",
        "Kungälv",
        "Kävlinge",
        "Köping",
        "Laholm",
        "Landskrona",
        "Laxå",
        "Lekeberg",
        "Leksand",
        "Lerum",
        "Lessebo",
        "Lidingö",
        "Lidköping",
        "Lilla Edet",
        "Lindesberg",
        "Linköping",
        "Ljungby",
        "Ljusdal",
        "Ljusnarsberg",
        "Lomma",
        "Ludvika",
        "Luleå",
        "Lund",
        "Lycksele",
        "Lysekil",
        "Malmö",
        "Malung-Sälen",
        "Malå",
        "Mariestad",
        "Mark",
        "Markaryd",
        "Mellerud",
        "Mjölby",
        "Mora",
        "Motala",
        "Mullsjö",
        "Munkedal",
        "Munkfors",
        "Mölndal",
        "Mönsterås",
        "Mörbylånga",
        "Nacka",
        "Nora",
        "Norberg",
        "Nordanstig",
        "Nordmaling",
        "Norrbottens län",
        "Norrköping",
        "Norrtälje",
        "Norsjö",
        "Nybro",
        "Nykvarn",
        "Nyköping",
        "Nynäshamn",
        "Nässjö",
        "Ockelbo",
        "Olofström",
        "Orsa",
        "Orust",
        "Osby",
        "Oskarshamn",
        "Ovanåker",
        "Oxelösund",
        "Pajala",
        "Partille",
        "Perstorp",
        "Piteå",
        "Ragunda",
        "Robertsfors",
        "Ronneby",
        "Rättvik",
        "Sala",
        "Salem",
        "Sandviken",
        "Sigtuna",
        "Simrishamn",
        "Sjöbo",
        "Skara",
        "Skåne län",
        "Skellefteå",
        "Skinnskatteberg",
        "Skurup",
        "Skövde",
        "Smedjebacken",
        "Sollefteå",
        "Sollentuna",
        "Solna",
        "Sorsele",
        "Sotenäs",
        "Staffanstorp",
        "Stenungsund",
        "Stockholm",
        "Stockholms län",
        "Storfors",
        "Storuman",
        "Strängnäs",
        "Strömstad",
        "Strömsund",
        "Sundbyberg",
        "Sundsvall",
        "Sunne",
        "Surahammar",
        "Svalöv",
        "Svedala",
        "Svenljunga",
        "Säffle",
        "Säter",
        "Sävsjö",
        "Söderhamn",
        "Söderköping",
        "Södermanlands län",
        "Södertälje",
        "Sölvesborg",
        "Tanum",
        "Tibro",
        "Tidaholm",
        "Tierp",
        "Timrå",
        "Tingsryd",
        "Tjörn",
        "Tomelilla",
        "Torsby",
        "Torsås",
        "Tranemo",
        "Tranås",
        "Trelleborg",
        "Trollhättan",
        "Trosa",
        "Tyresö",
        "Täby",
        "Töreboda",
        "Uddevalla",
        "Ulricehamn",
        "Umeå",
        "Upplands Väsby",
        "Upplands-Bro",
        "Uppsala",
        "Uppsala län",
        "Uppvidinge",
        "Vadstena",
        "Vaggeryd",
        "Valdemarsvik",
        "Vallentuna",
        "Vansbro",
        "Vara",
        "Varberg",
        "Vaxholm",
        "Vellinge",
        "Vetlanda",
        "Vilhelmina",
        "Vimmerby",
        "Vindeln",
        "Vingåker",
        "Vårgårda",
        "Vänersborg",
        "Vännäs",
        "Värmdö",
        "Värmlands län",
        "Värnamo",
        "Västerbottens län",
        "Västernorrlands län",
        "Västervik",
        "Västerås",
        "Västmanlands län",
        "Västra Götalands län",
        "Växjö",
        "Ydre",
        "Ystad",
        "Åmål",
        "Ånge",
        "Åre",
        "Årjäng",
        "Åsele",
        "Åstorp",
        "Åtvidaberg",
        "Älmhult",
        "Älvdalen",
        "Älvkarleby",
        "Älvsbyn",
        "Ängelholm",
        "Öckerö",
        "Ödeshög",
        "Örebro",
        "Örebro län",
        "Örkelljunga",
        "Örnsköldsvik",
        "Östergötlands län",
        "Östersund",
        "Österåker",
        "Östhammar",
        "Östra Göinge",
        "Överkalix",
        "Övertorneå"
    ];

    return (
        <div className={styles.outerContainer} data-testid='ParentSearchComboBox'>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <SearchComboBox
                        title="Filtrera på kommun eller län: "
                        options={optionsLoc}
                        onSelect={handleSelectLoc}
                        selectedOption={selectedOptionLoc}
                    />
                </div>
                <div className={styles.innerContainer} >
                    {/*Displays the search combo box once the crime options have been successfully fetched.*/}
                    {/*Otherwise displays a loading message to the user*/}
                    {optionsCrime.length != 0
                    ? (
                            <SearchComboBox
                                title="Filtrera på brottstyp: "
                                options={optionsCrime}
                                onSelect={handleSelectCrime}
                                selectedOption={selectedOptionCrime}
                            />
                        )
                    : (
                            <div className={styles.comboContainer}>
                                <label>{"Filtrera på brottstyp: "}</label>
                                <label>Laddar in tillgängliga brottstyper</label>
                            </div>
                        )}
                </div>
                <button className={styles.button} onClick={resetChoices}>Återställ val</button>
            </div>

        </div>
    );
};

export default ParentSearchComboBox;