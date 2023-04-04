const express = require('express');
const scheduleController = require('../../controllers/schedule.controller');

const router = express.Router();

router
  .route('/:id')
  .get(scheduleController.getSchedule)
  .put(scheduleController.updateSchedule)
  .delete(scheduleController.deleteSchedule);
router.route('/').get(scheduleController.getSchedules).post(scheduleController.createSchedule);

module.exports = router;
