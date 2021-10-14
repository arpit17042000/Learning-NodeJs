const Eventemitter=require('events');
const event=new Eventemitter();

event.on('name',()=>{
    console.log("Hi");
})

event.emit('name');   