const express=require("express")
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser')
const authRoutes=require('./routes/authRoutes')
const {requireAuth}=require('./middleware/authMiddleware')
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://pijushbera98:1234@auth.h5jvzak.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes)