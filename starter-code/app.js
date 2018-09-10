const express=require('express');
const app=express();

app.use(express.static('public'));
app.set('views',__dirname+'/views');
app.set('view engine','hbs');

app.get('/',(req,res,next)=> {
    console.log("WHY HBS?");
    res.render('index',{layout: 'layout'});
    // res.send('<h1> Hello IronHacker!</h1>');
})

app.get('/about',(req,res,next)=> {
    res.render('about');
    // res.send('<h1> Hello IronHacker!</h1>');
})

app.get('/paradise',(req,res,next)=> {
    res.render('paradise');
    // res.send('<h1> Hello IronHacker!</h1>');
})

app.listen(3000,()=>{
    console.log("My first app listening on port 3000")
});
