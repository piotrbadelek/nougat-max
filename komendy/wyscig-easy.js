const Discord = require("discord.js")
class wyscigpociagoweasy {
  constructor(){
    this.name = "wyscigpociagow-easy"
    this.alias = ["wyscig-easy"]
  }
  async run (client, msg, args) {
    let gracze = []
    let pociagwykoleil = []
    let wystartowalo = false
    let otwarte = true
    let a = gracze.push(msg.author.tag)
    msg.channel.send(msg.author.tag + " rozpoczyna grę! Czekamy na minimum 2 graczy, kto chce może dołączyć komendą `*wyscigi-easy-dolacz`.")
    let collector = msg.channel.createMessageCollector(m => m)
    collector.on('collect', m => {
        if(m.content == "*wyscigi-easy-dolacz") {
            if(otwarte == false) {
                msg.channel.send(m.author.username + ", nie można już dołączać! Poczekaj na następną grę!")
            } else {
                if(gracze.includes(m.author.tag) == true) {
                    msg.channel.send("Nie możesz dołączyć jeszcze raz, " + m.author.tag + "!")
                } else {
                    let a = gracze.push(m.author.tag)
                    if(gracze.length >= 2) {
                        msg.channel.send("Mamy "+gracze.length+" graczy i możemy zaczynać grę! "+msg.author.tag+" może w każdej chwili wpisać `*wyscigi-easy-start` żeby zacząć wyścig.")
                    }

                }
            }
        }
        if(m.content == "*wyscigi-easy-start") {
            if(wystartowalo == true) {

            } else {
                let wykolejeni = []
                setTimeout(function() {

                    gracze.forEach(function(gg) {
                        let niemamjuzpomyslownanazwyzmiennychhlep = pociagwykoleil.push(false)
                    })
                    wystartowalo == true
                    otwarte = false
                    let mapa = ""
                    let makspol = 9
                    let pole = ":white_large_square:+"
                    let pociagi = []
                    gracze.forEach(function(gracz) {
                        let pociagimozliwe = [":bullettrain_front:", ":bullettrain_side:", ":train:", ":train2:", ":tram:", "<:wagontowarowy:699222584918671361>", "<:SFNC:699222584918671361>"]
                        let pociag = pociagimozliwe[Math.floor(Math.random() * pociagimozliwe.length)]
                        let c = pociagi.push(pociag + ";" + gracz + ";0")
                    })
                    pociagi.forEach(function(pociagiitp) {
                        let pociag = pociagiitp.split(";")[0]
                        let gracz = pociagiitp.split(";")[1]
                        let pozycja = pociagiitp.split(";")[2]
                        let pociagnalini = pole.repeat(makspol).split("+")
                        pociagnalini[pozycja] = pociag
                        pociagnalini = pociagnalini.join("") + " - " + gracz
                        mapa += pociagnalini + "\n"
                    })
                    msg.channel.send(mapa).then(ms => {
                        let x = setInterval(function() {
                            mapa = ""
                            let ind = 0
                            pociagi.forEach(function(poc) {
                                if(Math.floor(Math.random() * 100) <= 1) {
                                    if(pociagwykoleil[ind] == false) {
                                        pociagwykoleil[ind] = true // wykoleił się

                                        let powody = ["Paliwa nalałeś na 2cm ruchu", "Powerbank wybychł", "Pociąg zapadł w depresję", "Pociąg został planetą :ringed_planet: ", "pociąg nie lubił właściciela", "TheTroll zjadł koła pociągu", "pzpl zjadł ci pociąg", "liseu zjadł wagony", "Pieseł zjadł silnik"];
                                        let powodd = powody[Math.floor(Math.random() * powody.length)]
                                        let jkfg = wykolejeni.push(poc.split(";")[1] + ";" + powodd)
                                        msg.channel.send("Pociąg " + poc.split(";")[1] + " wykoleił się! Powód: " + powodd)
                                        if(pociagwykoleil.includes(false) == false) {
                                            msg.channel.send("Wszystkie pociągi się wykoleiły!")
                                            collector.stop()
                                            clearInterval(x)
                                        }
                                    }
                                }
                                if(Math.floor(Math.random() * 100) <= 90) {
                                    if(pociagwykoleil[ind] == false) {
                                        pociagi[ind] = poc.split(";")[0] + ";" + poc.split(";")[1] + ";" + (parseInt(poc.split(";")[2]) + 1)
                                    }

                                }
                                ind += 1
                            })
                            pociagi.forEach(function(pociagiitp) {
                                let pociag = pociagiitp.split(";")[0]
                                let gracz = pociagiitp.split(";")[1]
                                let pozycja = pociagiitp.split(";")[2]
                                let pociagnalini = pole.repeat(makspol).split("+")
                                pociagnalini[pozycja] = pociag
                                pociagnalini = pociagnalini.join("") + " - " + gracz
                                mapa += pociagnalini + "\n"
                            })
                            ms.edit(mapa)
                            let wygrywaja = []
                            pociagi.forEach(function(aa) {
                                if(parseInt(aa.split(";")[2]) == makspol) {
                                    let bb = wygrywaja.push(aa.split(";")[1])
                                }
                            })
                            let odpowiedzi = ["Paliwo się skończyło", "Powerbank wybychł", "Pociąg zapadł w depresję", "Pociąg został rakietą kosmiczną", "PGE wyłączyło ci prąd bo rachunków nie zapłaciłeś", "TheTroll zjadł koła pociągu", "pzpl zjadł ci pociąg", "liseu zjadł wagony", "Pieseł zjadł silnik"];
                            if(wygrywaja.length == 0) {} else if(wygrywaja.length == 1) {
                                msg.channel.send("KONIEC! Gratulujemy " + wygrywaja[0] + " za wygranie wyścigu!")
                                clearInterval(x)
                                collector.stop()
                                gracze.forEach(function(graczz) {
                                    if(wygrywaja.includes(graczz) == false) {
                                        let powod = ""
                                        powod = odpowiedzi[Math.floor(Math.random() * odpowiedzi.length)]
                                        wykolejeni.forEach(function(wykolejony) {
                                            if(wykolejony.split(";")[0] == graczz) {
                                                powod = wykolejony.split(";")[1]
                                            }
                                        })
                                        msg.channel.send(graczz + " przegrał bo: " + powod)
                                    }
                                })
                            } else if(wygrywaja.length > 1) {
                                msg.channel.send("REMIS! Gratulujemy " + wygrywaja.join(", ") + "!")
                                clearInterval(x)
                                collector.stop()
                                gracze.forEach(function(graczz) {
                                    if(wygrywaja.includes(graczz) == false) {
                                        let powod = ""
                                        powod = odpowiedzi[Math.floor(Math.random() * odpowiedzi.length)]
                                        wykolejeni.forEach(function(wykolejony) {
                                            if(wykolejony.split(";")[0] == graczz) {
                                                powod = wykolejony.split(";")[1]
                                            }
                                        })
                                        msg.channel.send(graczz + " przegrał bo: " + powod)
                                    }
                                })
                            }
                        }, 1000)
                    })
                }, 500)
            }

        }
    })
  }
}

module.exports = wyscigpociagoweasy;
