const {
  STATICTICS_API_ROUTE_GROUP,
  router,
} = require("./modules/StaticticsCard/handler");

const Routes = (app) => {
  app.use(STATICTICS_API_ROUTE_GROUP, router);
};
module.exports = Routes;
