const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));