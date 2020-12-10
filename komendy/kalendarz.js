const Discord = require("discord.js")
class kalendarz {
    constructor() {
        this.name = "kalendarz",
            this.alias = ["kalend"]
    }
    async run(client, msg, args) {
        function dateFromDay(year, day){
            var date = new Date(year, 0); // initialize a date in `year-01-01`
            var hahayes = new Date(date.setDate(day));
            var dzien = hahayes.getDate()
            var mies = days[hahayes.getMonth()]
            return dzien + " " + mies // add the number of days
          }
        const ayy = ':(';
        let cookie = [
            "Światowy Dzień Kaca, **Nowy Rok**",
            "Dzień Przodków na Haiti",
            "Święto Powstania Ludowego w Burkina Faso",
            "Urodziny króla Samoa",
            "Joma Shinji w Japonii",
            "Dzień Filatelisty, **Trzech Króli**",
            "Dzień Dziwaka",
            "Dzień Elvisa Presleya",
            "Dzień Ligi Ochrony Przyrody",
            "Święto Suwerenności Ludowej (Benin)",
            "Dzień Wegetarian",
            "Dzień Upamiętnienia Rewolucji Zanzibaru",
            "Dzień Wzajemnej Adoracji",
            "Dzień Ukrytej Miłości, Dzień Osób Nieśmiałych",
            "Dzień Wikipedii",
            "Dzień Pikantnych Potraw",
            "Dzień ProgramistyZpolski przepisującego kalendarz bo nie chce mu się płacić za API",
            "Dzień Kubusia Puchatka",
            "Święto Wojskowych Jednostek Organizacyjnych Prokuratury Wojskowej",
            "Dzień Bigosu, Dzień Męczenników (Azerbejdżan)",
            "**Dzień Babci**",
            "**Dzień Dziadka**, Dzień Jedności Ukrainy",
            "Dzień bez Opakowań Foliowych",
            "Światowy Dzień Środków Masowego Przekazu",
            "Dzień Sekretarki i Asystentki",
            "Światowy Dzień Celnictwa, Dzień Transplantacji, ***Niedziela Handlowa***",
            "Dzień Dialogu z Islamem, Międzynarodowy Dzień Pamięci Ofiar Holokaustu",
            "Międzynarodowy Dzień Mobilizacji przeciwko Wojnie Nuklearnej",
            "Dzień Męczenników (Nepal)",
            "Dzień Martyrsów (Indie)",
            "Międzynarodowy Dzień Przytulania",
            "Rocznica zniesienia niewolnictwa (Mauritius)",
            "**Ofiarowanie Pańskie**, Dzień Pozytywnego Myślenia, Światowy Dzień Mokradeł, Dzień Handlowca, Dzień Świstaka (w USA)",
            "Dzień Bohaterów Mozambiku",
            "Międzynarodowy Dzień Walki z Rakiem",
            "Dzień Chama Cha Mapinduzi, Światowy Dzień Nutelli",
            "Dzień Boba Marleya",
            "Dzień Najwyższej Izby Kontroli",
            "Święto Służby Więziennej, Święto Rewolucji (Irak)",
            "Międzynarodowy Dzień Pizzy (Mniam! 🍕)",
            "Dzień Dyplomaty",
            "Światowy Dzień Chorego",
            "Dzień Darwina (lub Dzień Ewolucjonizmu)",
            "Światowy dzień radia",
            "**Walentynki – Międzynarodowy Dzień Zakochanych**, Dzień Chorych na Padaczkę",
            "Dzień Singla, Światowy Dzień Młodzieży Prawosławnej",
            "Międzynarodowy Dzień Listonoszy i Doręczycieli Przesyłek",
            "Dzień Kota",
            `Nie ma świąt ${ayy}`,
            "Święto Zieloniutkiej Flagi Turkmeńskiej, Święto Demokracji w Nepalu",
            "**Tłusty czwartek**, Światowy Dzień Sprawiedliwości Społecznej",
            "Międzynarodowy Dzień Dziedzictwa Językowego, Dzień Walki z Reżimem Kolonialnym",
            "**Ostatni dzień karnawału**, Dzień Myśli Braterskiej, Europejski Dzień Ofiar Przestępstw",
            "Międzynarodowy Dzień Pomocy Potrzebującym, Ogólnopolski Dzień Walki z Depresją",
            `Nie ma świąt ${ayy}`,
            "**Ostatki**, Dzień Masturbacji",
            "**Popielec**, Dzień Spania w Miejscach Publicznych, Dzień Pozdrawiania Blondynek, Dzień Dinozaura",
            "Dzień Niedźwiedzia Polarnego",
            "Dzień Kibica Cracovii, Dzień Chorób Rzadkich",
            "Dzień Roku Przestępnego [spawdztutajczyjestprzestepnypls]",
            "**Dzień Żołnierzy Wyklętych**, Międzynarodowy Dzień Walki przeciwko Zbrojeniom Atomowym, Światowy Dzień Obrony Cywilnej, Światowy Dzień Świadomości Autoagresji, Dzień Puszystych, Dzień Piegów",
            "Dzień Dyskordii",
            "Międzynarodowy Dzień Pisarzy, Dzień miodu w uszach",
            "Światowy Dzień Tenisa, Międzynarodowy Dzień Mistrza Gry, Kaziuki",
            "Dzień Teściowej, Dzień Dentysty",
            "Europejski Dzień Logopedy, Dzień Czystego Stołu",
            "Dzień Nauczyciela w Albanii",
            "**Dzień Kobiet**",
            "Dzień Statystyki Polskiej",
            "**Dzień Mężczyzny**",
            "Dzień Sołtysa",
            "Światowy Dzień Drzemki w Pracy, Dzień Matematyki",
            "Kasuga Matsuri (Festiwal Małpy)",
            "Dzień Liczby Pi, Biały Dzień",
            "Światowy Dzień Praw Konsumenta, Europejski Dzień Konsumenta, Światowy Dzień Choroby Alzheimera, Dzień Idioty, Dzień kukanqa",
            "Dzień Przemytnika Litewskiej Książki",
            "Światowy Dzień Morza, Dzień Św. Patryka",
            "Europejski Dzień Mózgu",
            "Dzień Wędkarza",
            "**Początek astronomicznej wiosny**, Dzień Bez Mięsa",
            "Dzień Wagarowicza, Światowy Dzień Zespołu Downa, Międzynarodowy Dzień Poezji, Światowy Dzień Lasu, Światowy Dzień Walki z Dyskryminacją Rasową",
            "Światowy Dzień Wody, Dzień Ochrony Bałtyku",
            "Światowy Dzień Meteorologii, Dzień Windy, Dzień Przyjaźni Polsko-Węgierskiej",
            "Narodowy Dzień Życia, Dzień Walki z Gruźlicą",
            "Dzień Czytania Tolkiena",
            `Nie ma świąt ${ayy}`,
            "Międzynarodowy Dzień Teatru",
            "Dzień Mastrubacji",
            "Dzień Metalowca",
            "Dzień Ziemi Palestyńskiej",
            "Święto Wolności Malty",
            "**Prima Aprilis**, Międzynarodowy Dzień Ptaków",
            "Międzynarodowy Dzień Książki Dla Dzieci, Światowy Dzień Wiedzy o Autyzmie",
            "Rocznica Drugiej Republiki (Gwinea)",
            "Międzynarodowy Dzień Wiedzy o Minach i Działań Zapobiegających Minom",
            "***Niedziela Handlowa***, Dzień Leśnika i Drzewiarza, Dzień Bez Makijażu, Dzień Grzeczności za Kierownicą",
            "Dzień upamiętnienia ludobójstwa w Rwandzie",
            "Dzień Pracownika Służby Zdrowia",
            "Międzynarodowy Dzień Romów",
            "Dzień Bohaterów (Filipiny)",
            "Dzień Bandurka, Dzień Lotnictwa Wojskowego",
            "Dzień Radia, Dzień Osób z Chorobą Parkinsona",
            "Dzień Czekolady, Międzynarodowy Dzień Lotnictwa i Kosmonautyki, Dzień Ptaków Wędrownych, Dzień czystych okien",
            "Światowy Dzień Pamięci Ofiar Katynia",
            "Dzień Ludzi Bezdomnych, Dzień patrzenia w niebo",
            "Światowy Dzień Trzeźwości",
            "Dzień Sapera, Dzień Włókniarza",
            "Światowy Dzień Chorych na Hemofilię, Dzień Edukacji w Syrii",
            "Międzynarodowy Dzień Ochrony Zabytków, Światowy Dzień Krótkofalowca, Dzień Pacjenta w Śpiączce",
            "**Święto Bożego Miłosierdzia**, Dzień republiki Sierra Leone, Urodziny króla Suazi",
            "Międzynarodowy Dzień Wolnej Prasy",
            "Rocznica założenia Rzymu",
            "Dzień odkrycia Brazylii, **Międzynarodowy Dzień Matki Ziemi**",
            "Światowy Dzień Książki i Praw Autorskich, Dzień Koni",
            "Międzynarodowy Dzień Solidarności Młodzieży, Międzynarodowy Dzień Przeciwko Wiwisekcji",
            "Dzień Sekretarki, Międzynarodowy Dzień Świadomości Zagrożenia Hałasem",
            "***Niedziela Handlowa***, Dzień Drzewa, Dzień Drogowca i Transportowca",
            "Międzynarodowy Dzień Świadomości Zagrożenia Hałasem, Światowy Dzień Grafika i Rysunku Graficznego",
            "Dzień Ziemi, Światowy Dzień Pamięci Ofiar Wypadków przy Pracy",
            "Międzynarodowy Dzień Tańca",
            `Nie ma świąt ${ayy}`,
            "**Święto Pracy**",
            "**Święto Polskiej Flagi**, Dzień Polonii i Polaków za Granicą",
            "**Święto konstytucji 3 maja, Dzień Słońca, Dzień bez Komputera, Dzień Chorych na Astmę i Alergię",
            "Międzynarodowy Dzień Gwiezdnych Wojen, Międzynarodowy Dzień Strażaka, Dzień Hutnika, Dzień Kominiarza, Dzień Garncarza, Dzień Piekarza",
            "Międzynarodowy Dzień Położnika",
            "Święto Gwardii Szwajcarskiej (Watykan)",
            "Urodziny Tomka Pochwały, Dzień Radia (Rosja)",
            "Dzień Bibliotekarza i Bibliotek",
            `Nie ma świąt ${ayy}`,
            "Dzień Pracownika Gospodarki Komunalnej, **swięto zbugowania boombobota przez thetrolla**, Dzień w którym kukanq obraniał 05xapresses",
            "Święto Miasta Miszkolc (Węgry)",
            "Światowy Dzień Ptaków Wędrownych",
            "Światowy Dzień Chorego",
            "Dzień Farmaceuty",
            "Święto Polskiej Muzyki i Plastyki, Dzień Niezapominajki",
            "Dzień Straży Granicznej   (aczkolwiek jest strefa shengen więc nie wiem po co nam to święto)",
            "Międzynarodowy Dzień Telekomunikacji",
            "Międzynarodowy Dzień Muzeów",
            "Dzień Mycia Samochodów, Międzynarodowy Dzień Rysowania Mahometa",
            "Międzynarodowy Dzień Płynów do Mycia Naczyń",
            "Światowy Dzień Rozwoju Kulturalnego, Dzień Kosmosu",
            "Dzień Praw Zwierząt, Dzień Pac–Mana, Światowy Dzień Różnorodności Biologicznej",
            "Dzień Spedytora",
            "**Wniebowstąpienie**, Dzień Cyrylicy, Europejski Dzień Parków Wodnych",
            "Dzień Stemplarza, Dzień Piwowara, Dzień Mleka, Dzień Ręcznika",
            "**Dzień Matki**, Dzień Gruzji, Dzień Znalezienia Kaspara Hausera",
            "Dzień Samorządu Terytorialnego",
            `Nie ma świąt ${ayy}`,
            "Dzień Działacza Kultury",
            `Nie ma świąt ${ayy}`,
            "Dzień Pracownika Przemysłu Spożywczego, Dzień Bociana Białego, Światowy Dzień bez Tytoniu (dawniej obchodzony 7 kwietnia)",
            "Święto Bułki, **Dzień Dziecka**, Dzień bez Alkoholu, Światowy Dzień Mleka",
            "Dzień Leśnika, Dzień Sąsiada, Dzień bez Krawata",
            "Dzień Dobrej Oceny",
            "Dzień Drukarza, Dzień Demokracji",
            "Dzień Ochrony Środowiska",
            "Dzień bez Samochodu, Dzień Slayera, Światowy Dzień Pocałunku",
            "Dzień Chemika",
            "Dzień Informatyka",
            "Dzień Agugaga, Dzień Przyjaciela, Dzień Księgowego",
            "Dzień Straży Granicznej",
            "**Boże Ciało**, Dzień podeptanych na śmierć w czasie tańca.",
            "Święto Biura Ochrony Rządu, Dzień Stylisty Paznokci",
            "Święto Dobrych Rad",
            "Dzień Dziennikarza Obywatelskiego, Światowy Dzień Krwiodawstwa",
            "Dzień Wiatru",
            "Międzynarodowy Dzień Pomocy Dzieciom Afrykańskim",
            "Dzień Walki z Pustynnieniem i Suszami",
            "Dzień Ewakuacji",
            "Teksański Dzień Emancypacji",
            "**Pierwszy dzień lata**, Światowy Dzień Uchodźcy",
            "Święto Muzyki, Dzień Deskorolki, Dzień Masturbacji",
            "Światowy Dzień „Garbusa”, Dzień Kultury Fizycznej",
            "**Dzień Ojca**, Dzień Służby Publicznej",
            "Światowy Dzień Chorych na Osteoporozę, Dzień Przytulania",
            "Dzień Stoczniowca, Światowy Dzień Smerfa",
            "Międzynarodowy Dzień Solidarności z Osobami Uzależnionymi od Narkotyków, Międzynarodowy Dzień Pomocy Ofiarom Tortur",
            "Światowy Dzień Rybołówstwa, Dzień Walki z Cukrzycą",
            "***Niedziela Handlowa***, Narodowy Dzień Pamięci Poznańskiego Czerwca 1956",
            "Dzień Marynarki Wojennej, Dzień Ratownika WOPR",
            "Dzień Motyla Kapustnika",
            "Światowy Dzień Architektury, Dzień Psa, Dzień Jazzu",
            "Dzień Dziennikarza Sportowego, Międzynarodowy Dzień UFO",
            `Nie ma świąt ${ayy}`,
            "Święto Hot-doga, Światowy Dzień Mleka",
            "Dzień Tynwaldu",
            "Światowy Dzień Pocałunku",
            "Dzień Spółdzielczości",
            `Nie ma świąt ${ayy}`,
            `Nie ma świąt ${ayy}`,
            "Dzień Sił Zbrojnych Mauretanii",
            "Światowy Dzień Ludności",
            "Światowy Dzień Imprezy",
            `Nie ma świąt ${ayy}`,
            `Nie ma świąt ${ayy}`,
            "Dzień bez Telefonu Komórkowego",
            "Dzień Księgowego",
            `Nie ma świąt ${ayy}`,
            "Międzynarodowy Dzień Nelsona Mandeli",
            "Dzień Czerwonego Kapturka",
            `Nie ma świąt ${ayy}`,
            `Nie ma świąt ${ayy}`,
            "Dzień Liczby Pi",
            "Dzień Włóczykija",
            "Dzień Policjanta",
            "Dzień Bezpiecznego Kierowcy",
            `Nie ma świąt ${ayy}`,
            `Nie ma świąt ${ayy}`,
            `Nie ma świąt ${ayy}`,
            "Święto narodowe Ólavsøka (Wyspy Owcze)",
            `Nie ma świąt ${ayy}`,
            "Wigilia Lughnasadh",
            "**Narodowy Dzień Pamięci Powstania Warszawskiego (Dzień Pamięci Warszawy)**",
            "Dzień Karmienia Piersią, Światowy Dzień Pamięci o Zagładzie Romów",
            "Święto Sił Zbrojnych w Gwinei Równikowe",
            "Święto Rewolucji Burkina Faso",
            "Międzynarodowy Dzień Piwa i Piwowara",
            "Dzień Musztardy",
            "Dzień Republiki (Wybrzeże Kości Słoniowej)",
            "Dzień Transportu",
            "Międzynarodowy Dzień Ludności Tubylczej na Świecie",
            "Dzień Przewodników i Ratowników Górskich",
            "Dzień Konserwatora Zabytków",
            "Międzynarodowy Dzień Młodzieży, Dzień Pracoholików",
            "Międzynarodowy Dzień Osób Leworęcznych",
            "Dzień Energetyka",
            "**Wniebowzięcie NMP, Święto Wojska Polskiego**",
            "Światowy Dzień Krwiodawstwa"
        ];
        var now = new Date();
        const days = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var dzien = now.getDate()
        var mies = days[now.getMonth()]
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay); // ło panie
        let join = args.join(" ");
        if (join) {
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Kalendarz :calendar:`)
                .setDescription(cookie[join - 1] + "\n\n" + dateFromDay(2020, join));
            if(cookie[join - 1] == undefined){
                msg.channel.send("Proszę pana, nie ma takiego dnia w roku jak " + join)
            }
            else {
                msg.channel.send(embed);
            }
        }
        else {
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Kalendarz :calendar:`)
                .setDescription(cookie[day - 1] + "\n\n" + dzien + " " + mies + " " + h + ":" + m);
            msg.channel.send(embed);
        }
    }
}
module.exports = kalendarz;