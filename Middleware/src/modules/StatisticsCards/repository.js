const StaticticsCard = require("./model");

const getData = async () => {
  try {
    console.log("1");
    const data = await StaticticsCard.find();
    console.log(data);
    return data;
  } catch (error) {
    res.send(error);
  }
};

const getDataById = async (id) => {
  try {
    const data = await StaticticsCard.findById(id);
    return data;
  } catch (error) {
    res.send(error);
  }
};

const addData = async (data) => {
  try {
    const newData = await StaticticsCard.create(data);
    return newData;
  } catch (error) {
    res.send(error);
  }
};

const updateData = async (id, data) => {
  try {
    const updatedData = await StaticticsCard.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedData;
  } catch (error) {
    res.send(error);
  }
};

const deleteData = async (id) => {
  try {
    const deletedData = await StaticticsCard.findByIdAndDelete(id);
    return deletedData;
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  StatisticRepository: {
    getData,
    getDataById,
    addData,
    updateData,
    deleteData,
  },
};
