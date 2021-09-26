const express = require("express"); 
var { graphqlHTTP } = require('express-graphql');
var { graphql, buildSchema } = require('graphql');
var jsonRoot = require('./data.json');

// apparetnyl builSchema isnt a good habbit makes life difficutl later on
var schema = buildSchema(`
    type Query {
        users: [User]
    }

    type mutation {
        userCreate(input: userInput): User
    }

    input userInput {
        id: Int
        name: String
    }

    type User {
        id: Int
        name: String
        email: String
        password: String
        joined: String
    }
`);


const port = 5000;
const app = express(); 

app.use(express.json()); // express middleware to allow parsing a json body 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: jsonRoot,
    graphiql: true,
  }));




// app.get('/', (req, res) => {
//     res.json(database.users);    
// })


// app.post("/signin", (req,res) => {
//     if (req.body.email === database.users[0].email &&
//         req.body.password === database.users[0].password) {
//         res.json("successfully signed in");
//     } else {
//         res.status(400).json("error logging in");
//     }
// })


// app.post("/register", (req,res) => {
//     const {email , name, password} = req.body;
//     database.users.push({
//         id: '125',
//         name: name,
//         email: email,
//         password: password,
//         entries: '0',
//         joined: new Date(),
//     }); 
//     res.json(database.users[database.users.length-1])
// })


// app.get('/profile/:id', (req,res) => {
//     const {id} = req.params;
//     let found = false;
//     database.users.forEach(user => {
//             if (user.id === id) {
//                 found = true;
//                 return res.json(user);
//             } 
//         }) 
// })
//     if (found = false) {
//         res.staus(404).json("user doesnt exist")
//     };


app.listen(port, ()=> {
    console.log("app is runnign on port ", port);
})

//  not necessary as defaults to port 3000 but this is validating the port and logging message for further proof 

