const catchAsync = require('../utils/catchAsync');
const Schedule = require('../models/schedule.model');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const getSchedules = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  res.json(await Schedule.paginate(null, options));
});

const getSchedule = catchAsync(async (req, res) => {
  const scheduleId = req.params.id || '';
  res.json(await Schedule.findById(scheduleId));
});

const createSchedule = catchAsync(async (req, res) => {
  const schedule = req.body;
  const response = await Schedule.create(schedule);
  res.json(response);
});

const updateSchedule = catchAsync(async (req, res) => {
  const schedule = req.body;
  const scheduleId = req.params.id || '';
  const scheduleFound = await Schedule.findById(scheduleId);
  if (!scheduleFound) throw ApiError('Not found');
  Object.assign(scheduleFound, schedule);
  await scheduleFound.save();
  res.json({ message: 'success' });
});

const deleteSchedule = catchAsync(async (req, res) => {
  const scheduleId = req.params.id || '';

  await Schedule.findByIdAndRemove(scheduleId);
  res.json({ message: 'success' });
});

module.exports = {
  getSchedules,
  createSchedule,
  updateSchedule,
  getSchedule,
  deleteSchedule,
};
