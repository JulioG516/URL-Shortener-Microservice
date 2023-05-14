require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let shortId = 0;
let links = new Map();

app.get("/api/shorturl/:short_url", (req, res) => {
  const shortId = parseInt(req.params.short_url);

  res.redirect(links.get(shortId))
}) 


app.post("/api/shorturl", (req, res) => {
  let passedUrl = req.body.url

  if  (isValidUrl(passedUrl) === false) {
    res.json({error: "invalid url"})
  }else{
    ++shortId;
    links.set(shortId, passedUrl)
    res.json({original_url : passedUrl,
              short_url : shortId
             })
  }
})

const isValidUrl = (url) => {
  // Regular expression pattern for URL validation
  var pattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
  // Test if the URL matches the pattern
  return pattern.test(url);
}

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
