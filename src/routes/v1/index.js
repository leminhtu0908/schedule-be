const express = require('express');
const scheduleRoute = require('./schedule.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/schedules',
    route: scheduleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
