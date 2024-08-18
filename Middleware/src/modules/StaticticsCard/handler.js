const router = require("express").Router();
const { StatisticServices } = require("./services");

const STATICTICS_API_ROUTE_GROUP = "/campaigns";
router.get("/getData", async (req, res) => {
  try {
    const data = await StatisticServices.getData();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await StatisticServices.getDataById(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/add/data", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await StatisticServices.addData(body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await StatisticServices.updateData(id, body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await StatisticServices.deleteData(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  STATICTICS_API_ROUTE_GROUP,
  router,
};
