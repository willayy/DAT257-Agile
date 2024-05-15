export function mockFetch() {
    let data = [
        {
          "id": 472758,
          "datetime": "2023-11-29 7:28:01 +01:00",
          "name": "28 november 22.45, Brand, Uppsala",
          "summary": "Bil brann i Kåbo.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-22.45-brand-uppsala/",
          "type": "Brand",
          "location": {
            "name": "Uppsala",
            "gps": "59.858564,17.638927"
          }
        },
        {
          "id": 472743,
          "datetime": "2023-11-28 22:48:00 +01:00",
          "name": "28 november 22.38, Trafikolycka, Trelleborg",
          "summary": "Lv101, mellan Alstad och Anderslöv. Kollision mellan flera fordon.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-22.38-trafikolycka-trelleborg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Trelleborg",
            "gps": "55.376243,13.157423"
          }
        },
        {
          "id": 472742,
          "datetime": "2023-11-28 22:18:17 +01:00",
          "name": "28 november 21.46, Farligt föremål, misstänkt, Malmö",
          "summary": "Hyllie. Polisen undersöker ett misstänkt farligt föremål.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.46-farligt-foremal-misstankt-malmo/",
          "type": "Farligt föremål, misstänkt",
          "location": {
            "name": "Malmö",
            "gps": "55.604981,13.003822"
          }
        },
        {
          "id": 472741,
          "datetime": "2023-11-28 22:12:32 +01:00",
          "name": "28 november 21.45, Brand, Helsingborg",
          "summary": "Stattena. Brand i byggnad.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.45-brand-helsingborg/",
          "type": "Brand",
          "location": {
            "name": "Helsingborg",
            "gps": "56.046467,12.694512"
          }
        },
        {
          "id": 472724,
          "datetime": "2023-11-28 20:44:50 +01:00",
          "name": "28 november 20.26, Försvunnen person, Mölndal",
          "summary": "Polisen söker försvunnen man från korttidsboende i Mölndal. Polisen ber allmänheten om hjälp i sökandet.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.26-forsvunnen-person-molndal/",
          "type": "Försvunnen person",
          "location": {
            "name": "Mölndal",
            "gps": "57.65,12.016667"
          }
        },
        {
          "id": 472727,
          "datetime": "2023-11-28 20:48:07 +01:00",
          "name": "28 november 19.44, Trafikolycka, Robertsfors",
          "summary": "Jomark, singelolycka med personbil.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.44-trafikolycka-robertsfors/",
          "type": "Trafikolycka",
          "location": {
            "name": "Robertsfors",
            "gps": "64.191835,20.84891"
          }
        },
        {
          "id": 472718,
          "datetime": "2023-11-28 19:59:35 +01:00",
          "name": "28 november 19.52, Trafikolycka, Eda",
          "summary": "En olycka har inträffat i Haga",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.52-trafikolycka-eda/",
          "type": "Trafikolycka",
          "location": {
            "name": "Eda",
            "gps": "59.83754,12.314031"
          }
        },
        {
          "id": 472587,
          "datetime": "2023-11-28 21:48:37 +01:00",
          "name": "28 november 21.45, Övrigt, Hallands län",
          "summary": "Hemsidan/händelser uppdateras inte mer i kväll.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.45-ovrigt-hallands-lan/",
          "type": "Övrigt",
          "location": {
            "name": "Hallands län",
            "gps": "56.896681,12.803399"
          }
        },
        {
          "id": 472588,
          "datetime": "2023-11-28 21:48:23 +01:00",
          "name": "28 november 21.45, Övrigt, Västra Götalands län",
          "summary": "Hemsidan/händelser uppdateras inte mer i kväll.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.45-ovrigt-vastra-gotalands-lan/",
          "type": "Övrigt",
          "location": {
            "name": "Västra Götalands län",
            "gps": "58.252793,13.059643"
          }
        },
        {
          "id": 472740,
          "datetime": "2023-11-28 21:44:53 +01:00",
          "name": "28 november 21.44, Trafikolycka, vilt, Jämtlands län",
          "summary": "Jämtland, flera viltolyckor anmälda efter klockan 15 i dag.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.44-trafikolycka-vilt-jamtlands-lan/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Jämtlands län",
            "gps": "63.171192,14.95918"
          }
        },
        {
          "id": 472737,
          "datetime": "2023-11-28 21:42:07 +01:00",
          "name": "28 november 21.06, Narkotikabrott, Örebro",
          "summary": "En man är misstänkt för brott på resecentrum",
          "url": "/aktuellt/handelser/2023/november/28/28-november-21.06-narkotikabrott-orebro/",
          "type": "Narkotikabrott",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472736,
          "datetime": "2023-11-28 21:40:42 +01:00",
          "name": "28 november 20.13, Brand, Härryda",
          "summary": "Brand i industrilokal i Landvetter.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.13-brand-harryda/",
          "type": "Brand",
          "location": {
            "name": "Härryda",
            "gps": "57.691744,12.294416"
          }
        },
        {
          "id": 472729,
          "datetime": "2023-11-28 20:50:21 +01:00",
          "name": "28 november 20.04, Trafikolycka, vilt, Gällivare",
          "summary": "Viltolycka på E10 söder om Hakkas.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.04-trafikolycka-vilt-gallivare/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Gällivare",
            "gps": "67.1379,20.659362"
          }
        },
        {
          "id": 472725,
          "datetime": "2023-11-28 20:44:56 +01:00",
          "name": "28 november 20.19, Trafikolycka, Umeå",
          "summary": "Umeå, singelolycka på länsväg 554 på Röbäck.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.19-trafikolycka-umea/",
          "type": "Trafikolycka",
          "location": {
            "name": "Umeå",
            "gps": "63.825847,20.263035"
          }
        },
        {
          "id": 472731,
          "datetime": "2023-11-28 21:07:17 +01:00",
          "name": "28 november 20.55, Trafikolycka, vilt, Örebro",
          "summary": "En olycka har inträffat i höjd med Glanshammar",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.55-trafikolycka-vilt-orebro/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472730,
          "datetime": "2023-11-28 20:57:51 +01:00",
          "name": "28 november 19.08, Stöld/inbrott, Östersund",
          "summary": "Östersund, inbrott i förråd.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.08-stoldinbrott-ostersund/",
          "type": "Stöld/inbrott",
          "location": {
            "name": "Östersund",
            "gps": "63.176683,14.636068"
          }
        },
        {
          "id": 472728,
          "datetime": "2023-11-28 20:50:13 +01:00",
          "name": "28 november 20.14, Rattfylleri, Borlänge",
          "summary": "En bilist är misstänkt för brott vid Norra Backa",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.14-rattfylleri-borlange/",
          "type": "Rattfylleri",
          "location": {
            "name": "Borlänge",
            "gps": "60.484304,15.433969"
          }
        },
        {
          "id": 472723,
          "datetime": "2023-11-28 20:46:13 +01:00",
          "name": "28 november 20.20, Rattfylleri, Ludvika",
          "summary": "En bilist är misstänkt för brott i Grängesberg",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.20-rattfylleri-ludvika/",
          "type": "Rattfylleri",
          "location": {
            "name": "Ludvika",
            "gps": "60.152358,15.191639"
          }
        },
        {
          "id": 472726,
          "datetime": "2023-11-28 20:44:59 +01:00",
          "name": "28 november 19.16, Bedrägeri, Stockholm",
          "summary": "Äldre kvinna i Farsta strand har blivit utsatt för bedrägeri.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.16-bedrageri-stockholm/",
          "type": "Bedrägeri",
          "location": {
            "name": "Stockholm",
            "gps": "59.329324,18.068581"
          }
        },
        {
          "id": 472722,
          "datetime": "2023-11-28 20:33:37 +01:00",
          "name": "28 november 20.17, Trafikolycka, Vellinge",
          "summary": "E6, i höjd med trafikplats Håslöv. En lastbil med släp har kört i diket.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.17-trafikolycka-vellinge/",
          "type": "Trafikolycka",
          "location": {
            "name": "Vellinge",
            "gps": "55.470893,13.01999"
          }
        },
        {
          "id": 472721,
          "datetime": "2023-11-28 20:27:57 +01:00",
          "name": "28 november 19.39, Fylleri/LOB, Sundsvall",
          "summary": "Sundsvall, person omhändertagen.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.39-fyllerilob-sundsvall/",
          "type": "Fylleri/LOB",
          "location": {
            "name": "Sundsvall",
            "gps": "62.390811,17.306927"
          }
        },
        {
          "id": 472720,
          "datetime": "2023-11-28 20:19:27 +01:00",
          "name": "28 november 20.18, Misshandel, Vetlanda",
          "summary": "Misshandel av närstående, Vetlanda.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-20.18-misshandel-vetlanda/",
          "type": "Misshandel",
          "location": {
            "name": "Vetlanda",
            "gps": "57.42746,15.08533"
          }
        },
        {
          "id": 472714,
          "datetime": "2023-11-28 19:28:54 +01:00",
          "name": "28 november 19.13, Trafikolycka, Filipstad",
          "summary": "En olycka har inträffat i Nordmark",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.13-trafikolycka-filipstad/",
          "type": "Trafikolycka",
          "location": {
            "name": "Filipstad",
            "gps": "59.713997,14.169845"
          }
        },
        {
          "id": 472719,
          "datetime": "2023-11-28 20:04:32 +01:00",
          "name": "28 november 19.55, Narkotikabrott, Eskilstuna",
          "summary": "5 gripna för narkotikabrott",
          "url": "/aktuellt/handelser/2023/november/28/28-november-19.55-narkotikabrott-eskilstuna/",
          "type": "Narkotikabrott",
          "location": {
            "name": "Eskilstuna",
            "gps": "59.371249,16.509805"
          }
        },
        {
          "id": 472717,
          "datetime": "2023-11-28 19:57:27 +01:00",
          "name": "28 november 18.58, Narkotikabrott, Örebro",
          "summary": "En man är misstänkt för brott på Södermalmsplan",
          "url": "/aktuellt/handelser/2023/november/28/28-november-18.58-narkotikabrott-orebro/",
          "type": "Narkotikabrott",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472716,
          "datetime": "2023-11-28 19:43:44 +01:00",
          "name": "28 november 07.55, Misshandel, Vännäs",
          "summary": "Vännäs, två misstänks för misshandel.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.55-misshandel-vannas/",
          "type": "Misshandel",
          "location": {
            "name": "Vännäs",
            "gps": "63.908007,19.752965"
          }
        },
        {
          "id": 472715,
          "datetime": "2023-11-28 19:43:26 +01:00",
          "name": "28 november 16.53, Åldringsbrott, Vellinge",
          "summary": "Skanör. En äldre kvinna vilseleds till att lämna ifrån sig värdesaker.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.53-aldringsbrott-vellinge/",
          "type": "Åldringsbrott",
          "location": {
            "name": "Vellinge",
            "gps": "55.470893,13.01999"
          }
        },
        {
          "id": 472691,
          "datetime": "2023-11-28 16:54:16 +01:00",
          "name": "28 november 16.17, Rattfylleri, Ludvika",
          "summary": "En bilist är misstänkt för brott i Gonäs",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.17-rattfylleri-ludvika/",
          "type": "Rattfylleri",
          "location": {
            "name": "Ludvika",
            "gps": "60.152358,15.191639"
          }
        },
        {
          "id": 472713,
          "datetime": "2023-11-28 19:03:59 +01:00",
          "name": "28 november 14.57, Rattfylleri, Östersund",
          "summary": "Östersund, misstänkt drograttfylleri.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-14.57-rattfylleri-ostersund/",
          "type": "Rattfylleri",
          "location": {
            "name": "Östersund",
            "gps": "63.176683,14.636068"
          }
        },
        {
          "id": 472712,
          "datetime": "2023-11-28 18:56:34 +01:00",
          "name": "28 november 16.50, Trafikolycka, Sundsvall",
          "summary": "Sundsvall, trafikolycka på Haga.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.50-trafikolycka-sundsvall/",
          "type": "Trafikolycka",
          "location": {
            "name": "Sundsvall",
            "gps": "62.390811,17.306927"
          }
        },
        {
          "id": 472711,
          "datetime": "2023-11-28 18:52:30 +01:00",
          "name": "28 november 16.18, Rattfylleri, Luleå",
          "summary": "Luleå, misstänkt drograttfylleri.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.18-rattfylleri-lulea/",
          "type": "Rattfylleri",
          "location": {
            "name": "Luleå",
            "gps": "65.584819,22.156703"
          }
        },
        {
          "id": 472690,
          "datetime": "2023-11-28 16:52:29 +01:00",
          "name": "28 november 16.29, Trafikolycka, Rättvik",
          "summary": "En olycka har inträffat i centrala Rättvik",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.29-trafikolycka-rattvik/",
          "type": "Trafikolycka",
          "location": {
            "name": "Rättvik",
            "gps": "60.889025,15.123373"
          }
        },
        {
          "id": 472689,
          "datetime": "2023-11-28 16:49:36 +01:00",
          "name": "28 november 16.32, Trafikolycka, Laxå",
          "summary": "En olycka har inträffat i rondellen i centrum",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.32-trafikolycka-laxa/",
          "type": "Trafikolycka",
          "location": {
            "name": "Laxå",
            "gps": "58.98269,14.62289"
          }
        },
        {
          "id": 472710,
          "datetime": "2023-11-28 18:44:22 +01:00",
          "name": "28 november 18.34, Brand, Västervik",
          "summary": "Tmmergatan. Brand i fordon.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-18.34-brand-vastervik/",
          "type": "Brand",
          "location": {
            "name": "Västervik",
            "gps": "57.757716,16.636976"
          }
        },
        {
          "id": 472694,
          "datetime": "2023-11-28 17:02:02 +01:00",
          "name": "28 november 16.49, Trafikolycka, Örebro",
          "summary": "En olycka har inträffat i höjd med Berglunda",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.49-trafikolycka-orebro/",
          "type": "Trafikolycka",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472709,
          "datetime": "2023-11-28 18:38:34 +01:00",
          "name": "28 november 16.41, Knivlagen, Västerås",
          "summary": "Grovt brott mot knivlagen, Västerås",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.41-knivlagen-vasteras/",
          "type": "Knivlagen",
          "location": {
            "name": "Västerås",
            "gps": "59.609901,16.544809"
          }
        },
        {
          "id": 472707,
          "datetime": "2023-11-28 18:33:46 +01:00",
          "name": "28 november 18.23, Trafikolycka, Lindesberg",
          "summary": "En olycka har inträffat på Rv50 i höjd med Mogetorp",
          "url": "/aktuellt/handelser/2023/november/28/28-november-18.23-trafikolycka-lindesberg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Lindesberg",
            "gps": "59.597698,15.222911"
          }
        },
        {
          "id": 472703,
          "datetime": "2023-11-28 17:35:34 +01:00",
          "name": "28 november 17.29, Trafikolycka, Lindesberg",
          "summary": "En olycka har inträffat i höjd med Yxe",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.29-trafikolycka-lindesberg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Lindesberg",
            "gps": "59.597698,15.222911"
          }
        },
        {
          "id": 472686,
          "datetime": "2023-11-28 18:17:56 +01:00",
          "name": "28 november 16.24, Trafikolycka, Kungälv",
          "summary": "Trafikolycka på länsväg 168, Komarken mellan flera fordon.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.24-trafikolycka-kungalv/",
          "type": "Trafikolycka",
          "location": {
            "name": "Kungälv",
            "gps": "57.869754,11.974032"
          }
        },
        {
          "id": 472706,
          "datetime": "2023-11-28 17:59:12 +01:00",
          "name": "28 november 16.50, Våld/hot mot tjänsteman, Arvika",
          "summary": "En man är misstänkt för brott i Dottevik",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.50-valdhot-mot-tjansteman-arvika/",
          "type": "Våld/hot mot tjänsteman",
          "location": {
            "name": "Arvika",
            "gps": "59.654853,12.592136"
          }
        },
        {
          "id": 472705,
          "datetime": "2023-11-28 17:56:59 +01:00",
          "name": "28 november 16.42, Trafikolycka, Gällivare",
          "summary": "Malmberget, singelolycka med personbil.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.42-trafikolycka-gallivare/",
          "type": "Trafikolycka",
          "location": {
            "name": "Gällivare",
            "gps": "67.1379,20.659362"
          }
        },
        {
          "id": 472704,
          "datetime": "2023-11-28 17:55:56 +01:00",
          "name": "28 november 17.13, Narkotikabrott, Borlänge",
          "summary": "En man är misstänkt för brott i centrum",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.13-narkotikabrott-borlange/",
          "type": "Narkotikabrott",
          "location": {
            "name": "Borlänge",
            "gps": "60.484304,15.433969"
          }
        },
        {
          "id": 472697,
          "datetime": "2023-11-28 17:53:26 +01:00",
          "name": "28 november 16.54, Trafikolycka, Göteborg",
          "summary": "Trafikolycka mellan personbil och cyklist vid Grevegården, enligt SOS.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.54-trafikolycka-goteborg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Göteborg",
            "gps": "57.70887,11.97456"
          }
        },
        {
          "id": 472700,
          "datetime": "2023-11-28 17:18:12 +01:00",
          "name": "28 november 15.21, Brand, Åre",
          "summary": "Åre, larm om brand på hotell.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-15.21-brand-are/",
          "type": "Brand",
          "location": {
            "name": "Åre",
            "gps": "63.399043,13.081506"
          }
        },
        {
          "id": 472684,
          "datetime": "2023-11-28 16:17:13 +01:00",
          "name": "28 november 16.05, Trafikolycka, Lekeberg",
          "summary": "En olycka har inträffat i höjd med Lekhyttan",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.05-trafikolycka-lekeberg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Lekeberg",
            "gps": "59.16539,14.743407"
          }
        },
        {
          "id": 472701,
          "datetime": "2023-11-28 17:22:11 +01:00",
          "name": "28 november 17.07, Trafikolycka, Örebro",
          "summary": "En olycka har inträffat i höjd med Hampetorp",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.07-trafikolycka-orebro/",
          "type": "Trafikolycka",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472699,
          "datetime": "2023-11-28 17:12:05 +01:00",
          "name": "28 november 17.09, Övrigt, Örebro län",
          "summary": "Det råder vinterväglag och är bitvis mycket halt",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.09-ovrigt-orebro-lan/",
          "type": "Övrigt",
          "location": {
            "name": "Örebro län",
            "gps": "59.535036,15.006573"
          }
        },
        {
          "id": 472698,
          "datetime": "2023-11-28 17:09:06 +01:00",
          "name": "28 november 17.04, Trafikolycka, Lindesberg",
          "summary": "En olycka har inträffat i höjd med Rya",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.04-trafikolycka-lindesberg/",
          "type": "Trafikolycka",
          "location": {
            "name": "Lindesberg",
            "gps": "59.597698,15.222911"
          }
        },
        {
          "id": 472695,
          "datetime": "2023-11-28 17:05:02 +01:00",
          "name": "28 november 17.01, Trafikolycka, Avesta",
          "summary": "En olycka har inträffat i centrum",
          "url": "/aktuellt/handelser/2023/november/28/28-november-17.01-trafikolycka-avesta/",
          "type": "Trafikolycka",
          "location": {
            "name": "Avesta",
            "gps": "60.14533,16.17384"
          }
        },
        {
          "id": 472687,
          "datetime": "2023-11-28 16:39:43 +01:00",
          "name": "28 november 16.11, Narkotikabrott, Karlstad",
          "summary": "En man är misstänkt för brott i Tingvallastaden",
          "url": "/aktuellt/handelser/2023/november/28/28-november-16.11-narkotikabrott-karlstad/",
          "type": "Narkotikabrott",
          "location": {
            "name": "Karlstad",
            "gps": "59.402181,13.511498"
          }
        },
        {
          "id": 472683,
          "datetime": "2023-11-28 15:43:52 +01:00",
          "name": "28 november 15.40, Sedlighetsbrott, Stockholms län",
          "summary": "Två personer anhållna efter tillslag mot thaimassagesalonger.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-15.40-sedlighetsbrott-stockholms-lan/",
          "type": "Sedlighetsbrott",
          "location": {
            "name": "Stockholms län",
            "gps": "59.602496,18.138438"
          }
        },
        {
          "id": 472681,
          "datetime": "2023-11-28 15:39:26 +01:00",
          "name": "28 november 11.30, Fylleri/LOB, Kiruna",
          "summary": "Kiruna, man omhändertagen.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-11.30-fyllerilob-kiruna/",
          "type": "Fylleri/LOB",
          "location": {
            "name": "Kiruna",
            "gps": "67.8558,20.225282"
          }
        },
        {
          "id": 472653,
          "datetime": "2023-11-28 15:29:02 +01:00",
          "name": "28 november 14.21, Trafikolycka, singel, Göteborg",
          "summary": "En singelolycka med personbil ska enligt SOS ha inträffat vid Skattegården.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-14.21-trafikolycka-singel-goteborg/",
          "type": "Trafikolycka, singel",
          "location": {
            "name": "Göteborg",
            "gps": "57.70887,11.97456"
          }
        },
        {
          "id": 472666,
          "datetime": "2023-11-28 15:26:58 +01:00",
          "name": "28 november 14.17, Trafikolycka, Norrtälje",
          "summary": "Turistbuss har kört av vägen.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-14.17-trafikolycka-norrtalje/",
          "type": "Trafikolycka",
          "location": {
            "name": "Norrtälje",
            "gps": "59.759584,18.701358"
          }
        },
        {
          "id": 472585,
          "datetime": "2023-11-28 14:01:28 +01:00",
          "name": "28 november 13.54, Trafikolycka, Hässleholm",
          "summary": "Personbil i olycka, Västra Torup.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-13.54-trafikolycka-hassleholm/",
          "type": "Trafikolycka",
          "location": {
            "name": "Hässleholm",
            "gps": "56.158915,13.766765"
          }
        },
        {
          "id": 472563,
          "datetime": "2023-11-28 12:37:52 +01:00",
          "name": "28 november 12.26, Trafikolycka, Kil",
          "summary": "Två personbilar uppges ha frontalkrockat på E45 vid Fageråsmotet.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-12.26-trafikolycka-kil/",
          "type": "Trafikolycka",
          "location": {
            "name": "Kil",
            "gps": "59.50368,13.317048"
          }
        },
        {
          "id": 472589,
          "datetime": "2023-11-28 14:04:30 +01:00",
          "name": "28 november 13.46, Trafikolycka, singel, Malung-Sälen",
          "summary": "En lastbil har körts i diket utefter Rv66 strax söder om Lima.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-13.46-trafikolycka-singel-malung-salen/",
          "type": "Trafikolycka, singel",
          "location": {
            "name": "Malung-Sälen",
            "gps": "60.900926,13.322618"
          }
        },
        {
          "id": 472608,
          "datetime": "2023-11-28 14:26:15 +01:00",
          "name": "28 november 13.48, Arbetsplatsolycka, Vimmerby",
          "summary": "Man till sjukhus, Vimmerby.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-13.48-arbetsplatsolycka-vimmerby/",
          "type": "Arbetsplatsolycka",
          "location": {
            "name": "Vimmerby",
            "gps": "57.669034,15.858857"
          }
        },
        {
          "id": 472607,
          "datetime": "2023-11-28 14:20:57 +01:00",
          "name": "28 november 14.07, Trafikolycka, Örebro",
          "summary": "Cyklist uppges vara påkörd av personbil vid korsningen Stålgatan/Holmgatan  i området Holmen, Örebro.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-14.07-trafikolycka-orebro/",
          "type": "Trafikolycka",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472583,
          "datetime": "2023-11-28 13:55:52 +01:00",
          "name": "28 november 13.47, Stöld, Malmö",
          "summary": "Stöld av postfordon, centrum.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-13.47-stold-malmo/",
          "type": "Stöld",
          "location": {
            "name": "Malmö",
            "gps": "55.604981,13.003822"
          }
        },
        {
          "id": 472581,
          "datetime": "2023-11-28 13:51:59 +01:00",
          "name": "28 november 10.26, Trafikolycka, Umeå",
          "summary": "E4 Hörnefors, två lastbilar och en personbil inblandade i en kollision",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.26-trafikolycka-umea/",
          "type": "Trafikolycka",
          "location": {
            "name": "Umeå",
            "gps": "63.825847,20.263035"
          }
        },
        {
          "id": 472580,
          "datetime": "2023-11-28 13:44:02 +01:00",
          "name": "28 november 13.31, Trafikolycka, Örebro",
          "summary": "En trafikolyck har inträffat i södergående trafik på E18/E20 melan Tpl Hedgatan och Tpl Ekersvägen.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-13.31-trafikolycka-orebro/",
          "type": "Trafikolycka",
          "location": {
            "name": "Örebro",
            "gps": "59.275263,15.213411"
          }
        },
        {
          "id": 472548,
          "datetime": "2023-11-28 10:51:23 +01:00",
          "name": "28 november 10.04, Trafikolycka, singel, Degerfors",
          "summary": "En personbil har körts i diket utefter Lv205 mellan Degerfors och Svartå.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.04-trafikolycka-singel-degerfors/",
          "type": "Trafikolycka, singel",
          "location": {
            "name": "Degerfors",
            "gps": "59.239103,14.433918"
          }
        },
        {
          "id": 472567,
          "datetime": "2023-11-28 13:09:16 +01:00",
          "name": "28 november 12.17, Knivlagen, Skellefteå",
          "summary": "Allmänheten uppmärksammar polisen på en berusad man",
          "url": "/aktuellt/handelser/2023/november/28/28-november-12.17-knivlagen-skelleftea/",
          "type": "Knivlagen",
          "location": {
            "name": "Skellefteå",
            "gps": "64.750244,20.950917"
          }
        },
        {
          "id": 472564,
          "datetime": "2023-11-28 12:46:10 +01:00",
          "name": "28 november 10.12, Trafikolycka, personskada, Håbo",
          "summary": "Bärgare kommer köra i motsatt körriktning på E18 efter olycka.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.12-trafikolycka-personskada-habo/",
          "type": "Trafikolycka, personskada",
          "location": {
            "name": "Håbo",
            "gps": "59.627071,17.452298"
          }
        },
        {
          "id": 472557,
          "datetime": "2023-11-28 12:07:27 +01:00",
          "name": "28 november 11.57, Arbetsplatsolycka, Markaryd",
          "summary": "Fallolycka, Markaryd.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-11.57-arbetsplatsolycka-markaryd/",
          "type": "Arbetsplatsolycka",
          "location": {
            "name": "Markaryd",
            "gps": "56.461774,13.596274"
          }
        },
        {
          "id": 472562,
          "datetime": "2023-11-28 12:26:35 +01:00",
          "name": "28 november 08.43, Misshandel, Landskrona",
          "summary": "Man till sjukhus, Landskrona.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-08.43-misshandel-landskrona/",
          "type": "Misshandel",
          "location": {
            "name": "Landskrona",
            "gps": "55.870348,12.83008"
          }
        },
        {
          "id": 472561,
          "datetime": "2023-11-28 12:22:46 +01:00",
          "name": "28 november 09.39, Trafikolycka, Borås",
          "summary": "Lastbil i singelolycka",
          "url": "/aktuellt/handelser/2023/november/28/28-november-09.39-trafikolycka-boras/",
          "type": "Trafikolycka",
          "location": {
            "name": "Borås",
            "gps": "57.721035,12.939819"
          }
        },
        {
          "id": 472560,
          "datetime": "2023-11-28 12:16:28 +01:00",
          "name": "28 november 09.52, Stöld, Umeå",
          "summary": "Centrala stan, polisen kallas till en matbutik",
          "url": "/aktuellt/handelser/2023/november/28/28-november-09.52-stold-umea/",
          "type": "Stöld",
          "location": {
            "name": "Umeå",
            "gps": "63.825847,20.263035"
          }
        },
        {
          "id": 472551,
          "datetime": "2023-11-28 11:07:40 +01:00",
          "name": "28 november 09.15, Trafikolycka, Skellefteå",
          "summary": "E4/Länsväg 768 Lövånger, en lastbil och två personbilar har kolliderat",
          "url": "/aktuellt/handelser/2023/november/28/28-november-09.15-trafikolycka-skelleftea/",
          "type": "Trafikolycka",
          "location": {
            "name": "Skellefteå",
            "gps": "64.750244,20.950917"
          }
        },
        {
          "id": 472554,
          "datetime": "2023-11-28 12:02:43 +01:00",
          "name": "28 november 08.02, Anträffad död, Västervik",
          "summary": "Man anträffad avliden på offentlig toalett, Stora torget",
          "url": "/aktuellt/handelser/2023/november/28/28-november-08.02-antraffad-dod-vastervik/",
          "type": "Anträffad död",
          "location": {
            "name": "Västervik",
            "gps": "57.757716,16.636976"
          }
        },
        {
          "id": 472556,
          "datetime": "2023-11-28 12:06:39 +01:00",
          "name": "28 november 10.45, Stöld, Boden",
          "summary": "Centrum, polisen kallas till en matbutik",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.45-stold-boden/",
          "type": "Stöld",
          "location": {
            "name": "Boden",
            "gps": "65.825119,21.688703"
          }
        },
        {
          "id": 472553,
          "datetime": "2023-11-28 11:26:27 +01:00",
          "name": "28 november 07.53, Trafikolycka, vilt, Jämtlands län",
          "summary": "Ett antal viltolyckor har rapporterats in till polisen under förmiddagen",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.53-trafikolycka-vilt-jamtlands-lan/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Jämtlands län",
            "gps": "63.171192,14.95918"
          }
        },
        {
          "id": 472552,
          "datetime": "2023-11-28 11:17:18 +01:00",
          "name": "28 november 10.30, Stöld, Göteborg",
          "summary": "Stöld av laser",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.30-stold-goteborg/",
          "type": "Stöld",
          "location": {
            "name": "Göteborg",
            "gps": "57.70887,11.97456"
          }
        },
        {
          "id": 472549,
          "datetime": "2023-11-28 11:00:22 +01:00",
          "name": "28 november 10.31, Trafikolycka, singel, Hallsberg",
          "summary": "En personbil har körts av vägen och in i en stolpe vid korsningen Kullängsvägen/Tisarvägen i Hallsberg.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-10.31-trafikolycka-singel-hallsberg/",
          "type": "Trafikolycka, singel",
          "location": {
            "name": "Hallsberg",
            "gps": "59.066532,15.10229"
          }
        },
        {
          "id": 472530,
          "datetime": "2023-11-28 7:52:39 +01:00",
          "name": "28 november 07.48, Sammanfattning natt, Östergötlands län",
          "summary": "Nattsammanfattning",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.48-sammanfattning-natt-ostergotlands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Östergötlands län",
            "gps": "58.345364,15.519784"
          }
        },
        {
          "id": 472547,
          "datetime": "2023-11-28 10:01:06 +01:00",
          "name": "28 november 09.34, Trafikhinder, Uppsala",
          "summary": "Gris på väg.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-09.34-trafikhinder-uppsala/",
          "type": "Trafikhinder",
          "location": {
            "name": "Uppsala",
            "gps": "59.858564,17.638927"
          }
        },
        {
          "id": 472545,
          "datetime": "2023-11-28 9:40:16 +01:00",
          "name": "28 november 07.46, Trafikolycka, vilt, Västernorrlands län",
          "summary": "Ett antal viltolyckor har rapporterats in till polisen under morgonen",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.46-trafikolycka-vilt-vasternorrlands-lan/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Västernorrlands län",
            "gps": "63.427647,17.729244"
          }
        },
        {
          "id": 472543,
          "datetime": "2023-11-28 9:34:06 +01:00",
          "name": "28 november 08.55, Trafikkontroll, Sundsvall",
          "summary": "Bosvedjan, polisen kontrollerar nykterhet i trafiken",
          "url": "/aktuellt/handelser/2023/november/28/28-november-08.55-trafikkontroll-sundsvall/",
          "type": "Trafikkontroll",
          "location": {
            "name": "Sundsvall",
            "gps": "62.390811,17.306927"
          }
        },
        {
          "id": 472542,
          "datetime": "2023-11-28 9:28:40 +01:00",
          "name": "28 november 08.24, Misshandel, grov, Säffle",
          "summary": "En man sitter anhållen för grov misshandel",
          "url": "/aktuellt/handelser/2023/november/28/28-november-08.24-misshandel-grov-saffle/",
          "type": "Misshandel, grov",
          "location": {
            "name": "Säffle",
            "gps": "59.132661,12.930107"
          }
        },
        {
          "id": 472541,
          "datetime": "2023-11-28 9:28:16 +01:00",
          "name": "28 november 06.18, Stöld/inbrott, Skellefteå",
          "summary": "Burträsk, allmänheten uppmärksammar polisen på en krossad ruta",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.18-stoldinbrott-skelleftea/",
          "type": "Stöld/inbrott",
          "location": {
            "name": "Skellefteå",
            "gps": "64.750244,20.950917"
          }
        },
        {
          "id": 472540,
          "datetime": "2023-11-28 9:18:27 +01:00",
          "name": "28 november 07.45, Trafikkontroll, Vilhelmina",
          "summary": "Skolgatan, polisen kontrollerar nykterhet i trafiken",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.45-trafikkontroll-vilhelmina/",
          "type": "Trafikkontroll",
          "location": {
            "name": "Vilhelmina",
            "gps": "64.624471,16.655497"
          }
        },
        {
          "id": 472527,
          "datetime": "2023-11-28 8:54:57 +01:00",
          "name": "28 november 06.45, Rån, försök, Gävle",
          "summary": "Kvinna utsatt för rånförsök.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.45-ran-forsok-gavle/",
          "type": "Rån, försök",
          "location": {
            "name": "Gävle",
            "gps": "60.67488,17.141273"
          }
        },
        {
          "id": 472537,
          "datetime": "2023-11-28 8:25:18 +01:00",
          "name": "28 november 07.42, Trafikolycka, vilt, Uppsala län",
          "summary": "Många viltolyckor i morgontrafiken.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.42-trafikolycka-vilt-uppsala-lan/",
          "type": "Trafikolycka, vilt",
          "location": {
            "name": "Uppsala län",
            "gps": "60.009226,17.271459"
          }
        },
        {
          "id": 472521,
          "datetime": "2023-11-28 7:31:15 +01:00",
          "name": "28 november 07.26, Trafikolycka, Karlskrona",
          "summary": "Larm om påkörd person",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.26-trafikolycka-karlskrona/",
          "type": "Trafikolycka",
          "location": {
            "name": "Karlskrona",
            "gps": "56.161224,15.5869"
          }
        },
        {
          "id": 472536,
          "datetime": "2023-11-28 8:07:52 +01:00",
          "name": "28 november 00.49, Övrigt, Solna",
          "summary": "Hög siren väcker boende i Solna.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-00.49-ovrigt-solna/",
          "type": "Övrigt",
          "location": {
            "name": "Solna",
            "gps": "59.368879,18.008433"
          }
        },
        {
          "id": 472529,
          "datetime": "2023-11-28 7:52:51 +01:00",
          "name": "28 november 07.46, Sammanfattning natt, Södermanlands län",
          "summary": "Nattsammanfattning",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.46-sammanfattning-natt-sodermanlands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Södermanlands län",
            "gps": "59.033635,16.75189"
          }
        },
        {
          "id": 472528,
          "datetime": "2023-11-28 7:52:45 +01:00",
          "name": "28 november 07.44, Sammanfattning natt, Jönköpings län",
          "summary": "Nattsammanfattning",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.44-sammanfattning-natt-jonkopings-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Jönköpings län",
            "gps": "57.370843,14.343917"
          }
        },
        {
          "id": 472517,
          "datetime": "2023-11-28 6:54:33 +01:00",
          "name": "28 november 06.46, Brand, Hallands län",
          "summary": "Brand i lastbil på E6",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.46-brand-hallands-lan/",
          "type": "Brand",
          "location": {
            "name": "Hallands län",
            "gps": "56.896681,12.803399"
          }
        },
        {
          "id": 472526,
          "datetime": "2023-11-28 7:34:56 +01:00",
          "name": "28 november 07.34, Sammanfattning natt, Jämtlands län",
          "summary": "Ett urval av nattens polisverksamhet 22:00-07:00",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.34-sammanfattning-natt-jamtlands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Jämtlands län",
            "gps": "63.171192,14.95918"
          }
        },
        {
          "id": 472525,
          "datetime": "2023-11-28 7:34:16 +01:00",
          "name": "28 november 07.33, Sammanfattning natt, Västernorrlands län",
          "summary": "Ett urval av nattens polisverksamhet 22:00-07:00",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.33-sammanfattning-natt-vasternorrlands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Västernorrlands län",
            "gps": "63.427647,17.729244"
          }
        },
        {
          "id": 472524,
          "datetime": "2023-11-28 7:33:13 +01:00",
          "name": "28 november 07.31, Sammanfattning natt, Västerbottens län",
          "summary": "Ett urval av nattens polisverksamhet 22:00-07:00",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.31-sammanfattning-natt-vasterbottens-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Västerbottens län",
            "gps": "65.333731,16.516169"
          }
        },
        {
          "id": 472523,
          "datetime": "2023-11-28 7:32:10 +01:00",
          "name": "28 november 01.48, Stöld/inbrott, Hallstahammar",
          "summary": "Inbrott i en container på byggarbetsplats.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-01.48-stoldinbrott-hallstahammar/",
          "type": "Stöld/inbrott",
          "location": {
            "name": "Hallstahammar",
            "gps": "59.613204,16.229476"
          }
        },
        {
          "id": 472522,
          "datetime": "2023-11-28 7:31:50 +01:00",
          "name": "28 november 07.30, Sammanfattning natt, Norrbottens län",
          "summary": "Ett urval av nattens polisverksamhet 22:00-07:00",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.30-sammanfattning-natt-norrbottens-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Norrbottens län",
            "gps": "66.830922,20.399197"
          }
        },
        {
          "id": 472520,
          "datetime": "2023-11-28 7:21:18 +01:00",
          "name": "28 november 00.38, Olaga intrång, Arboga",
          "summary": "Personer bröt sig in i rivningsobjekt.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-00.38-olaga-intrang-arboga/",
          "type": "Olaga intrång",
          "location": {
            "name": "Arboga",
            "gps": "59.393688,15.838175"
          }
        },
        {
          "id": 472519,
          "datetime": "2023-11-28 7:13:25 +01:00",
          "name": "28 november 07.08, Trafikolycka, Malmö",
          "summary": "Larm om trafikolycka, Trafikplats Fosie by",
          "url": "/aktuellt/handelser/2023/november/28/28-november-07.08-trafikolycka-malmo/",
          "type": "Trafikolycka",
          "location": {
            "name": "Malmö",
            "gps": "55.604981,13.003822"
          }
        },
        {
          "id": 472518,
          "datetime": "2023-11-28 6:55:14 +01:00",
          "name": "28 november 04.17, Rattfylleri, Trelleborg",
          "summary": "Man misstänkt för rattfylleri efter samtal från allmänhet, Skegrie.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-04.17-rattfylleri-trelleborg/",
          "type": "Rattfylleri",
          "location": {
            "name": "Trelleborg",
            "gps": "55.376243,13.157423"
          }
        },
        {
          "id": 472516,
          "datetime": "2023-11-28 6:52:30 +01:00",
          "name": "28 november 06.38, Arbetsplatsolycka, Eslöv",
          "summary": "Bärgare skadad i samband med bärgning",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.38-arbetsplatsolycka-eslov/",
          "type": "Arbetsplatsolycka",
          "location": {
            "name": "Eslöv",
            "gps": "55.83912,13.303391"
          }
        },
        {
          "id": 472515,
          "datetime": "2023-11-28 6:50:59 +01:00",
          "name": "28 november 06.41, Trafikolycka, Malmö",
          "summary": "Larm om trafikolycka mellan två personbilar",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.41-trafikolycka-malmo/",
          "type": "Trafikolycka",
          "location": {
            "name": "Malmö",
            "gps": "55.604981,13.003822"
          }
        },
        {
          "id": 472514,
          "datetime": "2023-11-28 6:26:03 +01:00",
          "name": "28 november 06.17, Sammanfattning natt, Västra Götalands län",
          "summary": "Dagens presstalesperson är på plats",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.17-sammanfattning-natt-vastra-gotalands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Västra Götalands län",
            "gps": "58.252793,13.059643"
          }
        },
        {
          "id": 472513,
          "datetime": "2023-11-28 6:17:51 +01:00",
          "name": "28 november 06.06, Sammanfattning natt, Hallands län",
          "summary": "Dagens presstalesperson är på plats.",
          "url": "/aktuellt/handelser/2023/november/28/28-november-06.06-sammanfattning-natt-hallands-lan/",
          "type": "Sammanfattning natt",
          "location": {
            "name": "Hallands län",
            "gps": "56.896681,12.803399"
          }
        }
      ];
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      }),
    );
  }