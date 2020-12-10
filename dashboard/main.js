const express = require("express");
const path = require("path");

class Dashboard {
    constructor () {
        this.app = express();
    }
    init () {
        // this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(express.static('./public'))
        this.app.get("/pieniadze", (req, res) => {
            res.sendFile(path.join(__dirname, ".././pieniadze.txt"))
        })
        this.app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "html/index.html"))
        })
        this.app.get("/topka", (req, res) => {
            res.sendFile(path.join(__dirname, "html/topka.html"))
        })
        this.app.get("/panel", (req, res) => {
            res.sendFile(path.join(__dirname, "html/panel.html"))
        });
        this.app.use("/api/", require("./api/discord.js")); // odpalilo juz
    }
    start () {
        console.log("Proszę szczekać, łączenie") //xD XD
        this.app.listen(1337);
        console.log("Dashboard Nougata jest uruchomiony na porcie 1337!")
    }
} 

module.exports = Dashboard;

const dashboard = new Dashboard();
dashboard.init();
dashboard.start();