//this is my main js file


// 1. Make an express program that will display "Hello, world!" at the root URL: /

const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req, res) => {
    //node handles the header stuff for us!
    res.send(`<h1>Hello World!</h1>`)
})


// 2. Add to your program the following pages:

// "Meow" at the URL /cats "Woof" at the URL /dogs "Living together" at the URL /cats_and_dogs

app.get('/cats', (req, res)=>{   
    res.send('Meow')
})

app.get('/dogs', (req, res)=>{   
    res.send('Woof')
})

app.get('/cats_and_dogs', (req, res)=>{   
    res.send('Living together')
})


// 3. Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc..


//localhost:3000/greet/Kennedy(or whatever name)
app.get('/greet/:firstName', (req, res)=>{
    let firstName = req.params.firstName;

    console.log(req.params);
    res.send(`<h1>Hello ${firstName}!</h1>`)
})


//4. Query Parameters: Tell the year you were born
// Adding to the program started below, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:

// /year?age=32    
// it will display 
// You were born in 1985.


// app.get('/hello1', function(req, res){

//     var name = req.query.name || 'world';

//     res.send('Hello ' + name + '!');

// });

//localhost:3000/year?age=37 
app.get('/year', (req, res)=>{

    var age = req.query.age;
    var birthYear = 2022 - age;

    res.send(`You were born in ${birthYear}`);
});



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})


//BELOW IS A GIANT CAN OF WORMS THAT I ABANDONED!
// var today = new Date(); 
// var dd = String(today.getDate()).padStart(2, '0'); 
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! 
// var yyyy = today.getFullYear(); 

// // let date = new Date()
// // console.log(date.getDate())
// var age = req.query.age;
// var birthDate = 
// var birthYear = today - birthDate;

// res.send(`You were born in ${birthYear}`);