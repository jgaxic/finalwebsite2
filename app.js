const express = require('express');                 //const expressLayouts = require('express-ejs-layouts');
const collection = require('./mongodb');  
const collection1 = require('./mongodb2');           //app.use(expressLayouts);
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 
app.set('views', 'C:\\Users\\Jga_x\\OneDrive\\Documents\\final website');
app.use(express.static('C:\\Users\\Jga_x\\OneDrive\\Documents\\final website'));

app.use(express.json())
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// In-memory storage for registered users
const registeredUsers = [];

// Serve login page

app.get('/login', (req, res) => {
 res.render('./html/login.ejs');
});

// Serve register page
app.get('/register', (req, res) => {
  res.render('./html/register.ejs');
});

app.get('/main', (req, res) => {
  res.render('./html/main.ejs');
});

app.get('/westin', (req, res) => {
  res.render('./html/westin.ejs');
});

app.get('/booking' , (req,res) => {
 res.render('./html/booking.ejs');
})

app.get('/westinlogin' , (req,res) => {
  res.render('./html/westinlog.ejs');
})

app.get('/loginmain' , (req,res) => {
  res.render('./html/log.ejs');
})

// Handle login form submission
app.post('/login', async(req, res) => {
  try{
    const check = await collection.findOne({name: req.body.username});
    if(check){
      console.log("login success");
      res.redirect('/loginmain');
    }
    const passwordmatch = await collection.findOne({password: req.body.password});
    if(!passwordmatch){
      console.log("invalid password")
      res.redirect('/login');
    }
   }catch{
      res.send("wrong detail");
   }
  
});

// Handle register form submission
app.post('/register', async (req, res) => {
  const data ={
    name: req.body.username,
    password: req.body.password
  }
  const existingUser = await collection.findOne({name: data.name});
  if (existingUser) {
    console.log('Username already exists. Please choose a different username.');
    res.redirect('/register');
  } else {
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    console.log('Registration successful! Please log in.');
    res.redirect('/login');
  }
});
app.post('/booking', async (req,res)=>{
  const data1 ={
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    guest:  req.body.guest,
    bed: req.body.bed,
    room: req.body.room,
    CheckIn: req.body.CheckIn,
    CheckOut: req.body.CheckOut,
    Email: req.body.email,
    Mobile: req.body.Mobile,
    Price: req.body.price
  }
  console.log("Submit Success");
  const userdata1 = await collection1.insertMany(data1);
  console.log(userdata1);
  res.redirect('/loginmain');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})


/*const letter = username.charAt(0);
                            console.log(letter);
                             console.log("login success")
                            //u = (`${username}`);
                            u = letter;*//*const { username, password } = req.body;
  const existingUser = registeredUsers.find(user => user.username === username);*/