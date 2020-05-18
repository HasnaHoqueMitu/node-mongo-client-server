const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const rootcall = (req, res) =>res.send('Thanks to all cruel people');
const user = ["Asad", "hassan", "Hasu", "bosu"];

app.get('/', rootcall );

app.get('/fruits/bana', (req,res) => {
    res.send({fruit: 'banana', quantity: 1000});
})

app.get('/users/:id', (req,res)=>{
    const userId= req.params.id;
    const name = user[userId];
    res.send({name});
})

//post
app.post('/addUser',(req, res) =>{
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
    console.log(user);
    console.log('data received',req.body);
})



app.listen(3000, ()=> console.log('Listening to port 3000'));                      