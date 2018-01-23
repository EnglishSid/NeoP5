var express = require('express');
var path = require ('path');
var logger = require ('morgan');
var bodyParser = require ('body-parser');
var neo4j = require('neo4j-driver').v1;
var app = express();
app.locals.persondata = require('./files/names.json');


//View engine
app.set ('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use("/files", express.static(__dirname + '/files'));
//app.use("/js", express.static(__dirname + '/files/js'));

//local instance
var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','neo4j'));

var session=driver.session();

app.get('/', function (req, res) {
    res.render('homepage')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/WordCloud', function (req, res) {
    var CountArr =[];
    var TopWordsQuery ="match (w:Word) return  w.name as Word, w.count as Count order by w.count desc LIMIT 10";

    res.render('WordCloud');// used with local file.

   // session 
   //    .run(TopWordsQuery)
   //    
   //    .then(function(result,returnVar){
   //        console.log('Connected to Neo');
   //        result.records.forEach(function(record) {
    //                CountArr.push({
    //        word: record.get(0),
    //        count: record.get(1)
    //       });
    // }); 
   //       res.render('WordCloud',{
    //        WordsList: CountArr
    //        });

    //    })
    //    .catch(function(err){
    //        console.log(err)
    //    })
})


})

app.listen(3000, function (){console.log('server started on 3000')});
module.exports= app;