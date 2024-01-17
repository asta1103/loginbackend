//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(
    cors(
        { origin : "http://localhost:3000" }
    )
)

const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123",
        status: 1
    },
    {
        id: 2,
        username: "staff",
        password: "123",
        status: 0
    }

]


app.post('/login-validation', (req, res)=>{
    let username_login = req.body.username;
    let password_login = req.body.password;
   console.log()
   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {

        res.status(200).json(
           { code: "success", msg:"Username and Password matched a record", loginUser:user }   
        )

    } else {
       res.status(401).json({ code: "failed", msg:"Incorrect Username and Password testing"}) 
    }


})

const profileDB = [];
 
app.post('/registration', ()=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;

    idCoount = profileDB.length + 1;
    const newRecord = {
        id: idCoount,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email,
    }
    
  const saveStatus = profileDB.push(newRecord);  
   if (saveStatus) {
     res.status(200).json(
        { code: "success", msg:"registration successful" }   
     )
   } else {
     res.status(401).json(
        { code: "failed", msg:"registration error in saving" }   
     )
   }

})

//HTTP METHODS
//GET, POST, PUT, HEAD, DELETE, PATCH
app.get('/test/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query

    const twoNumbers = [
        {
           id : num1,
           name: "Odeth",
           signal: true, 
        },
        {
            id : num2,
            name: "Odeth",
            signal: true,   
        }
    ]

    let sample = [num1, num2]

    let z = parseInt(num1);

    let m = "Hello WD95P";

    res.json(twoNumbers);
    
}
);


app.post('/save-data', (req, res) => {
    let fname = req.body.firstname;
    let lname = req.body.lastname;

    res.json([fname, lname])

})

app.put('/put-data/:id', (req, res) => {
     let fname = req.body.firstname;
    //let lname = req.body.lastname;

    let id = req.params.id;
   //update change firstname where id = id

    res.json([num1, fname])
})

app.delete('/delete/record/:id', (req, res)=>{
  
})

app.listen(5000)
console.log('Server is running in port 5000')