
var a1=require('./public/data1.json');
var express=require('express');
var app=express();

app.use(express.static("public"));
app.get("/extraRuns", function(req,res){
    //res.send("Satyendra");
    var season=req.query.year;
    var result=a1.extraRuns[season];
    res.send(result);
})

app.listen(process.env.PORT || 8080, () => console.log('Gator app listening on port'));
