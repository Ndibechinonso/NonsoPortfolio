import mongoose, { Schema, models } from "mongoose";

const visitorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
});

const Visitor = models.Visitor || mongoose.model("Visitor", visitorSchema);

export default Visitor;
