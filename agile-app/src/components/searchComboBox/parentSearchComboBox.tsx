"use client"

import React, {useState} from 'react'
import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'

const ParentSearchComboBox = () => {
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('Alla');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('Alla');

    const handleSelectCrime = (selectedOption: string) => {
        setSelectedOptionCrime(selectedOption);
    };

    const handleSelectLoc = (selectedOption: string) => {
        setSelectedOptionLoc(selectedOption);
    };

    /** list containing all the types of crimes that can be filtered on*/
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
        "Vållande till kroppsskada"
      ];
    /** list containing all the locations that can be filtered on*/
    const optionsLoc = [
        "Alla",
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
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <SearchComboBox title="Filtrera på kommun eller län: " options={optionsLoc} onSelect={handleSelectLoc} />
                    <p>Selected loc option: {selectedOptionLoc}</p>
                </div>
                <div className={styles.innerContainer} > 
                    <SearchComboBox title="Filtrera på brottstyp: " options={optionsCrime} onSelect={handleSelectCrime}/>
                    <p>Selected crime option: {selectedOptionCrime}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ParentSearchComboBox;

/**className={styles.innerContainer}*/