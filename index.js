const bodyParser = require('body-parser');
const express = require('express');
const app = express();

require('./prod')(app);

// enable extended to let nested POST
app.use(bodyParser.urlencoded({extended: true}));

// webhook set up
// on production authenticate each POST - you could add a token to the URL
app.post('/webhook/', (req, res) => {
  // for development only - console log the post content
  console.log(req.body);
  console.log("agil");

  // builds the answer replicating the message sent
  let reply = {
    'message-out': "test msg",
    'delay': 0,
  };

  // Sends the reply - ENSURE a JSON response add JSON.stringfy just to be safe
  res.status(200).send(JSON.stringify(reply));
});

app.get('/getName',function (req,res){
  res.send('Swarup Bam');
});


app.post('/getMovies',function (req,res)  {
    console.log("req received..!");
    res.status(200).send("agil");
//   if(request.body.result.parameters['top-rated']) {
//       var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");
//           req.query({
//               "page": "1",
//               "language": "en-US",
//               "api_key": ""
//           });
//           req.send("{}");
//           req.end(function(res) {
//               if(res.error) {
//                   response.setHeader('Content-Type', 'application/json');
//                   response.send(JSON.stringify({
//                       "speech" : "Error. Can you try it again ? ",
//                       "displayText" : "Error. Can you try it again ? "
//                   }));
//               } else if(res.body.results.length > 0) {
//                   let result = res.body.results;
//                   let output = '';
//                   for(let i = 0; i<result.length;i++) {
//                       output += result[i].title;
//                       output+="\n"
//                   }
//                   response.setHeader('Content-Type', 'application/json');
//                   response.send(JSON.stringify({
//                       "speech" : output,
//                       "displayText" : output
//                   })); 
//               }
//           });
//   }
});

// Sets server port and logs message on success
app.listen(process.env.PORT || 8000, () => console.log('server is listening'));