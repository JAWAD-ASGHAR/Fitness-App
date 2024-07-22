const router = require("express").Router();
const StaticticsCard = require("./model");
const { StatisticRepository } = require("./repository");

const STATICTICS_API_ROUTE_GROUP = "/campaigns";
router.get("/getData", async (req, res) => {
  try {
    const data = await StatisticRepository.getData();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await StatisticRepository.getDataById(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/add/data", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await StatisticRepository.addData(body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await StatisticRepository.updateData(id, body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await StatisticRepository.deleteData(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  STATICTICS_API_ROUTE_GROUP,
  router,
};
