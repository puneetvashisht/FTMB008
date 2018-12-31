const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, default: 'Default' },
    date: { type: Date, default: Date.now }
  });
const Category = mongoose.model('Category', CategorySchema);



const WorkoutSchema = new Schema({
  title: { type: String, default: 'Default' },
  notes: { type: String, default: 'Default notes' },
  cbpm: { type: Number},
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
});
const Workout = mongoose.model('Workout', WorkoutSchema);



const WorkoutActiveSchema = new Schema({
  startDate: { type: Date, default: new Date()},
  startTime: { type: Date, default: new Date() },
  endDate: { type: Date, default: new Date()},
  endTime: { type: Date, default: new Date() },
  status: { type: Boolean, default: true},
  workoutId: { type: Schema.Types.ObjectId, ref: 'Workout' }
});
const WorkoutActive = mongoose.model('WorkoutActive', WorkoutActiveSchema);

module.exports = {Category, Workout, WorkoutActive}