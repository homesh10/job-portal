const express = require('express');
const path = require('path'); // Import the 'path' module
const BodyParser = require('body-parser');
const cors = require('cors');
const contactRoute =require('./Routes/contactRoute');
const registerRoute =require('./Routes/registerRoute');
const userLoginRoute =require('./Routes/userLoginRoute');
const notificationRoute =require('./Routes/notificationRoute');
const currentJobRoute = require('./Routes/currentJobRoute');
//  object for express
const app = express();

// Middleware
app.use(BodyParser.json());
app.use(express.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());

// Port No. For Running Api 
const PORT = process.env.PORT || 3100;

// Set 'views' directory for any views
app.set('Views', path.join(__dirname, 'Views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Message On Browser - Route to render index.ejs
app.get("/", (req, res) => {
    res.render('index');
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     //   const uploadPath = path.join(__dirname, './Uploads/Profile-Sign');
//     //   fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the directory exists
//     //   console.log('Destination path:', uploadPath);
//     //   cb(null, uploadPath);
//     cb(null,'../Uploads/Profile-Sign');
//     },
//     filename: function (req, file, cb) {
//       const filename = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
//       console.log('Filename:', filename);
//       cb(null, filename);
//     }
//   });
//   const upload = multer({ storage: storage });

//   app.use(express.static('./Uploads'));

 
// Calling Routing Apis -
app.use('/api/post',contactRoute);
app.use('/api/post',registerRoute);
app.use('/api/post',userLoginRoute);
app.use('/api/get',notificationRoute);
app.use('/api/get',currentJobRoute);


// Listening to the port
app.listen(PORT, () => {
    console.log('Project :- Kanker Recruitment Portal');
    console.log(`\x1b[31mBacked Api Is Running On => http://localhost:${PORT}\x1b[0m`);
    console.log('Developed By. Lomash Rishi');
  });