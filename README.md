app.use("/singleApi",(req,res)=> singleApi(req,res,reference));

const reference = {
  gallery: galleryModel,
  painter: painterModel,
  'name as you want to acess':'modal name of the schema'
};




