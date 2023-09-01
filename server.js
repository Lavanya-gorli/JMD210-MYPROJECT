
const express = require('express');

const mysql = require('mysql2'); // Import mysql2 library

const bodyParser = require('body-parser');

const cors = require('cors');

 

const app = express();

app.use(cors());

app.use(bodyParser.json());

 

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "lavanya@7",

    database: "jinapp"

})

 

db.connect((err) => {

    if (err) {

        console.error('Database connection failed:', err);

    } else {

        console.log('Connected to database');

    }

});

 

app.post('/signup', (req, res) => {

    const sql = 'INSERT INTO datatable (`name`,`email`,`password`) VALUES (?)';

    const values = [

        req.body.name,

        req.body.email,

        req.body.password

    ]

    db.query(sql, [values], (err, data) => {

        if (err) {

            return res.json("Error");

        }

        return res.json(data);

    })

})

 

app.post('/Profile', (req, res) => {

    const sql = 'INSERT INTO profiles (`fullName`,`designation`,`email`,`mobile`,`bloodGroup`,`location`) VALUES (?)';

    const values = [

        req.body.fullName,

        req.body.designation,

        req.body.email,

        req.body.mobile,

        req.body.bloodGroup,

        req.body.location

    ]

    db.query(sql, [values], (err, data) => {

        if (err) {

            return res.json("Error");

        }

        return res.json(data);

    })

})

 

app.post('/login', (req, res) => {

    const sql = 'SELECT * FROM datatable WHERE `email`=? AND `password`=?';

    db.query(sql, [req.body.email, req.body.password], (err, data) => {

        if (err) {

            return res.json("Error");

        }

        if (data.length > 0) {

            return res.json("Success");

        }

        else {

            return res.json("failed");

        }

    })

})

 

// app.get('/getProfileData/:email', (req, res) => {

//     // Assuming you have a session mechanism for authentication, you can retrieve the user's ID from the session

//     const emailid=req.params.email

 

//     const sql = `SELECT * FROM profiles WHERE email ='${emailid}'`; // Modify this query to match your schema

//     db.query(sql, (err, data) => {

//         if (err) {

//             console.error(err);

//             console.log(data)

//             return res.status(500).json({ error: 'Error fetching profile data' });

//         }

//         if (data.length === 0) {

//             return res.status(404).json({ message: 'Profile not found' });

//         }

//         console.log(res)

//         res.status(200).json(data[0]); // Send the profile data as JSON

//     });

// });

 

 

app.get(`/getProfileData/:useremail`,(req,res)=>{
 const email=req.params.useremail;
 console.log("params",email)
  db.query(`SELECT * FROM profiles WHERE email=${email}`,
      (err, result) => {
          if (err) throw err;
          console.log(result);
          return res.json(result);
      }
      );
  });

app.listen(3002, () => {
    console.log("listening")
})
