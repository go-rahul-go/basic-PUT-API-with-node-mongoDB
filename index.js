const dbConnect = require("./databases/mongoConnector");
const express = require('express');

const app = express();


app.use(express.json())


app.put("/", async (req, resp) => {
    let result = await dbConnect();
    let response = await result.updateOne({name:"iphone 14"},{$set:req.body});
    console.log(response)
    if(response.modifiedCount===0)
    {
        resp.send("Not updated or same data");
    }
    else{
        resp.send("updated successfully");
    }
})


app.listen(5000)