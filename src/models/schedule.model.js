const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const scheduleSchema = mongoose.Schema(
  {
    room: {
      type: String,
    },
    subjectId: {
      type: String,
    },
    subjectName: {
      type: String,
    },
    lectureName: {
      type: String,
    },
    grade: {
      type: String,
    },
    day: {
      type: String,
    },
    period: {
      type: String,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
scheduleSchema.plugin(toJSON);
scheduleSchema.plugin(paginate);

/**
 * @typedef Schedule
 */
const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
