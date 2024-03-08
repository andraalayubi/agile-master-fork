const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/api/posts', async (req, res) =>{
    // const userData = await 
});

app.get('/api/users/:id', (req, res)=>{

});

app.listen(port, ()=>{
    console.log(`Express app running on ${port}`);
});

