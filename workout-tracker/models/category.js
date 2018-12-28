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


module.exports = {Category, Workout}