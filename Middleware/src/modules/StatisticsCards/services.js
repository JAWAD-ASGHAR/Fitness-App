const { StatisticRepository } = require("./repository");
const getData = () => {
  try {
    const data = StatisticRepository.getData();
    return data;
  } catch (error) {
    res.send(error);
  }
};
const getDataById = (id) => {
  try {
    const data = StatisticRepository.getDataById(id);
    return data;
  } catch (error) {
    res.send(error);
  }
};
const addData = (data) => {
  try {
    const newData = StatisticRepository.addData(data);
    return newData;
  } catch (error) {
    res.send(error);
  }
};
const updateData = (id, data) => {
  try {
    const updatedData = StatisticRepository.updateData(id, data);
    return updatedData;
  } catch (error) {
    res.send(error);
  }
};
const deleteData = (id) => {
  try {
    const deletedData = StatisticRepository.deleteData(id);
    return deletedData;
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  StatisticServices: {
    getData,
    getDataById,
    addData,
    updateData,
    deleteData,
  },
};
