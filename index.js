const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

async function singleApi(req, res,reference_1) {
  console.log("we are callred");
  try {
    const promises = Object.keys(req.body).map(async (data) => {
      const required_filed = {};
      const populate_filed = [];
      let filter_data = [];
      let filter_data_obj = {};

      Object.keys(req.body[data]).map((field_name) => {
        if (!isObjectEmpty(req.body[data][field_name])) {
          //for filtering data
          if (!isObjectEmpty(req.body[data][field_name])) {
            filter_data_obj = {
              [field_name]: req.body[data][field_name],
            };
          }

          //for reference data
          if (req.body[data][field_name]?.ref_data == 1) {
            let required_filed_inner = null;
            let populate_ref_obj = {};
            required_filed_inner = Object.keys(req.body[data][field_name]);
            populate_ref_obj = {
              path: field_name,
              select: required_filed_inner,
            };

            //condition in populate method  get data
            Object.keys(req.body[data][field_name]).map(
              (populate_field_name) => {
                if (
                  !isObjectEmpty(
                    req.body[data][field_name][populate_field_name]
                  )
                ) {
                  populate_ref_obj.match = {
                    [populate_field_name]:
                      req.body[data][field_name][populate_field_name],
                  };
                }
              }
            );
            filter_data_obj = {};
            populate_filed.push(populate_ref_obj);
          }
          if (!isObjectEmpty(filter_data_obj)) {
            filter_data.push(filter_data_obj);
          }
        } else {
          filter_data.push({});
        }
        required_filed[field_name] = 1;
      });

      const results = await reference_1[data]
        .find(...filter_data, required_filed)
        .populate(populate_filed);
      return results;
    });
    const all_res = await Promise.all(promises);
    return res.json({
      data: all_res,
    });
  } catch (error) {
    console.error(error);
    return res.json({ err: error, msg: "an error occurred" });
  }
}


module.exports = { singleApi };
