const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json())
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/arcade", {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true
    //    useFindAndModify: false
})
.then(() => console.log("MongoDB successfully connected!!"))
.catch(err => console.log(err));

// const User = require('./models/User.js')

// const userInput = {
//   username : "noobcoder1234",
//   password : "1234567",
//   role : "admin"
// }

// const user = new User (userInput);
// user.save((err,document)=>{
//   if(err)
//     console.log(err);
//   console.log(document)
// });

const userRouter = require('./routes/User');
app.use('/user',userRouter)

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });