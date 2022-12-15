const { Router } = require("express");
const { ListModel } = require("../Models/List.Model");
const ShoppingRouter = Router();


ShoppingRouter.post("/create",async(req,res)=>{
    const { title, quantity, priority, description } = req.body;

    const newlist = new ListModel({
      title,
      quantity,
      priority,
      description,
      date:new Date(),
      timestamp:new Date().getTime()

    });
    await newlist.save()
    res.send({ msg: "List Added", item: newlist });


})

ShoppingRouter.get("/get", async (req, res) => {

  let items =await ListModel.find()

  res.send({msg:"Success",item:items});
})


ShoppingRouter.get(`/get/:query`, async (req, res) => {
     let query = req.params.query;
  let items = await ListModel.find({ title: query });

  res.send({msg:"Success",item:items});
});

ShoppingRouter.delete(`/delete/:id`, async (req, res) => {
  let id = req.params.id;
//   console.log(id)
  let items = await ListModel.deleteOne({ _id: id });
    // res.send({ "id": id });
  res.send({ msg: "Success", item: items });
});





module.exports = { ShoppingRouter };