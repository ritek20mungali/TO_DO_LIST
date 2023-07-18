const express= require('express');
const path=require('path');
const port=8000;
//db connection
const db=require('./config/mongoose');
//schema  
const todolist=require('./models/contact')
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'assets')));


app.post('/delete-list/', async function(req,res){

  for(var i in req.body){
    // console.log(i);
    try{
      const delcon= await todolist.findByIdAndDelete(i);
      //  res.redirect('back');
     }catch(err){
      console.log('error',err)
     }
  }
  return res.status(200).json({
    data:{
      id:req.body
    }
     });
     


  // console.log(req.body);
  // //get the id from query in url
  // let id=req.query.id;

  // //find the todo list in the DB using id and delete
  // try{
  //  const delcon= await todolist.findByIdAndDelete(id);
  //  return res.redirect('back');
  // }catch(err){
  //  console.log('error',err)
  // }
  
})



app.post('/create-list',async function(req,res){
   

  try {
    const result = await todolist.create(req.body);
    // Handle the result
    console.log(result);
  } catch (error) {
    // Handle the error
    console.log(error)
  }

    return res.redirect('back');
})



app.get('/',async function(req,res){
  
  try {
    const todo = await todolist.find({});
    return res.render('home', {
      title: "TO_DO",
      todo_list: todo
    });
  } catch (err) {
    console.log('Error in fetching to do list from the database', err);
    return;
  }
    

});
 

app.listen(port,function(err){
    if(err){
        console.log("error in running the server "+err);
    }
    console.log("my express server is running on port "+port);
})
