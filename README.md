# singleApi

### The 'single-endpoint' package helps you to call any API without creating multiple endpoints in your app for getData.
### singleAPi for getAll api


## <span style="color:#4caf50">Installation

<p> install npm package from the npmjs.com </p>
<a href="https://www.npmjs.com/package/single_api">click here to download</a>
</span>

### <span style="color:#2196f3">how to use it</span>
```
 const {singleApi}=require('single_api')//import singleAPi from the single_api

const galleryModel = require("./models/gallery");//import schema that you want to acess
const painterModel = require("./models/painter");

 reference object represent :-
  key :- use any kay as you want for acess that modal
  value :- value must be a modal
  
const reference = {
  gallery: galleryModel,
  painter: painterModel,
'name as you want to acess':'modal name of the schema'

};
 pass a singleApi function as callback and pass req,res and reference
app.use("/singleApi",(req,res)=> singleApi(req,res,reference));
```

for acessing the referenceData you can pass {associated_data_singleApi:1}

```
  gallery: {
       theme:{
           associated_data_singleApi:1,
       }
       
      }
```
"That's great! Congratulations! Now, you are able to access the SingleAPI."



