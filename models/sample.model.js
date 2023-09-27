const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
  sampleProperty1: {
    type: String,
    required: true,
  },
  sampleProperty2: {
    type: Number,
    required: true,
  },
});

const Sample = mongoose.model("samples", SampleSchema);

module.exports = Sample;

// This can be consumed and used as SampleSchema.find(), like queries
// Read more about schema from mongoose official doc.
