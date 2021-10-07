const express = require('express');

const app = express()

app.get('/',(req,res) => res.send("Hello WORLD3"))


app.listen(3000, () => {
    console.log('My rest API running on port 3000')
})

//Helpful Links
//https://jhooq.com/requested-access-to-resource-is-denied/     //For pushing to docker hub
// docker 