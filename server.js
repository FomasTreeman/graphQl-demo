const express = require("express"); 
const app = express(); 

app.use(express.json()); // express middleware to allow parsing a json body 

const  database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: '0',
            joined: new Date(),
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'banananas',
            entries: '0',
            joined: new Date(), 
        }
    ]
}

app.get('/', (req, res) => {
    res.send("this is working");    
})

app.post("/signin", (req,res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json("successfully signed in");
    } else {
        res.status(400).json("error logging in");
    }
})

app.listen(3000, ()=> {
    console.log("app is runnign on port 3000");
})

//  not necessary as defaults to port 3000 but this is validating the port and logging message for further proof 

