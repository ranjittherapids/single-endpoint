

const galleryModel = require("./models/gallery");
const painterModel = require("./models/painter");
.
.
.
.

const reference = {
  gallery: galleryModel,
  painter: painterModel,
'name as you want to acess':'modal name of the schema'

};

app.use("/singleApi",(req,res)=> singleApi(req,res,reference));




