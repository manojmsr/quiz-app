const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
    res.end();
});
app.post("/",(req,res)=>{
    var ans=req.body.ans;
    if(ans == '4')
    {
        res.send("Correct!!");
    }
    else{
        res.send("Incorrect!! The correct answer is 4 bits.");
    }
    res.end();
})
app.listen(3000,()=>console.log("listening on port 3000"));
