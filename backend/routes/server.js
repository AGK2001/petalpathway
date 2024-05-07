const express = require("express");
const mysql = require("mysql");
//const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcrypt");
const validator = require("validator");

//const app = express();

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Kramenator51!$",
    database: "petalpathway"
 
})

router.post('/register', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    //const hashedPassword = await bcrypt.hash(password, 10);
    const insertUserQuery = "INSERT INTO users (firstName, lastName, email, password, address, city, state, zip) values (?,?,?,?,?,?,?,?)"

    const isFirstAccount = await checkFirstAccount;
    const role = isFirstAccount? 'admin' : 'user';
    const hashedPassword = await bcrypt.hash(password, 10);


    con.query(insertUserQuery, [firstName, lastName, email, hashedPassword, address, city, state, zip],
        (err, results) => {
            if(results){
                res.send(results);
            }else{
                res.send({message: "Error Registering User"});
            }
            const user = results[0];
            //const tokenUser = createTokenUser(user);
            //attachCookiesToResponse({ res, user: tokenUser });
            //res.status(StatusCodes.CREATED).json({ user: tokenUser });

        }
    )

})

router.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    con.query("SELECT * FROM users WHERE email = ?", [email],
        async (err, results) => {
            if (err) {
                console.error('Error finding user:', err);
                res.status(500).json({ message: "Invalid Credentials" });
            } else {
                if (results.length > 0) {
                    const user = results[0];
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (isMatch) {
                        //res.status(200).json({ message: "User logged in successfully" });
                       // res.send({message: "User logged in successfully"});
                       res.status(200).json({ message: "User logged in successfully" });
                    } else {
                        res.status(401).json({ message: "Invalid Credentials" });
                    }
                } else {
                    res.status(404).json({ message: "User Not Found" });
                }
            }
            //const tokenUser = createTokenUser(user);
            //attachCookiesToResponse({ res, user: tokenUser });
            //res.status(StatusCodes.OK).json({ user: tokenUser });
        }
    )
})

const checkFirstAccount = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT COUNT(*) AS count FROM users', (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            const count = results[0].count;
            resolve(count === 0);
        });
    });
  };
  
  const clearCookie = (res, cookieName) => {
    res.setHeader('Set-Cookie', `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  };
  

//app.listen(3001, () => {
    //console.log("Server 3001 is running...");
//})

module.exports = router;