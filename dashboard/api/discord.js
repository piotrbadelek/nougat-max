const express = require("express");
const rp = require("request-promise");
const cookie = require("cookie-parser");
const util = require("util");
const bodyParser = require("body-parser");
const router = express.Router();
CLIENT_ID = "698613249616117881";
CLIENT_SECRET = "E7mmR_k6JQgCtkl0GXoX2Z3H_Q7lgHJM"
redirect = "http://83.7.215.70:1337/api/callback" //http://83.7.42.185:1337/api/callback
router.get('/login', (req, res) => { // w ustawieniach bota redirect jest ustawiony na http://83.7.42.185:1337/api/callback co wy tu probujecie     naprawiamy oauth
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=` + encodeURIComponent(redirect) + `&response_type=code&scope=identify guilds`);
}); 
router.get('/callback', (req, res) => { // ja nie moge dlaczego ten discord zmienił domene bez potrzeby asdashdfashdghj
    if(!req.query.code) throw new Error("No code provided ty debilu");
    const code = req.query.code;
    const creds = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
    rp({
        method: "POST",
        uri: `https://discord.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
        headers: {
            "Authorization": `Basic ${creds}`,
            "User-Agent": "NougatBot v1"
        },
        json: true
    }).then((response) => {
        res.cookie('token', response.access_token, {
            maxAge: 1000 * 60 * 60 * 24 * 3 
        }); 
        res.redirect(`/panel/`);
    });
});

function getto(token) {
    return new Promise((resolve, reject => {
        rp({
            method: "GET",
            uri: `https://discord.com/api/users/@me`,
            headers: {
                "Authorization": `Bearer ${token}`,
                'User-Agent': "NougatBot v1"
            },
            json: true
        }).then(resp => {
            resolve(resp);
        }).then(err => {
            reject(err); 
        });
    }));
}

router.get('/getId', (req, res) => {
    getto(req.cookies.token)
        .then(resp => {
            res.send(resp.id)
        }).catch(err => {
            res.send(new Error(err.message))
        })
});

router.use(cookie());
router.get('/check', (req, res) => {
    if(!util.isUndefined(req.cookies)) {
        if(util.isUndefined(req.cookies.token)) {
            res.status(401);
            return res.send({ status: "ERROR", message: "Not logged in!"});
        }
        rp("https://discord.com/api/users/@me", {
            headers: {
                Authorization: "Bearer " + req.cookies.token
            },
            json: true
        }).then(resp => {
            res.status(200);
            res.send({
                status: "INFO",
                message: "Logged in!",
                data: resp
                // tutaj by moglybyc gildie i wgl ale ich nie ma XD
            })
            }).catch(() => {
                res.status(401);
                return res.send({ status: "ERROR", message: "Not logged in!"})
            }); 
    } else {
        res.status(401);
        res.send({
            status: "ERROR",
            message: "Not logged in!"
        })
    }
});

router.get('/serwery', (req, res) => {
    if(!util.isUndefined(req.cookies)) {
        if(util.isUndefined(req.cookies.token)) {
            res.status(401);
            return res.send({ status: "ERROR", message: "Not logged in!"});
        }
        rp("https://discord.com/api/users/@me/guilds", {
            headers: {
                Authorization: "Bearer " + req.cookies.token
            },
            json: true
        }).then(resp => {
            let objg = [];
            resp.forEach((serv) => {
                if(serv.permissions.toString().includes(2147483647) || serv.owner === true) { 
                    objg.push(serv) // html
                }
            }) 
            res.status(200); 
            return res.send({ status: "INFO", data: objg}); 
        }); 
            
    } else {
        res.status(401);
        res.send({
            status: "ERROR",
            message: "Not logged in!"
        })
    }
});

router.get('/logout', (req, res) => {
    rp({
        method: "POST",
        uri: `https://discord.com/api/oauth2/token/revoke?token=` + req.cookies.token,
        headers: {
            "User-Agent": "Nougat v1"
        }
    })
    res.clearCookie('token');
    res.redirect('/')
})

module.exports = router;