import mongoose, { Schema, model, models } from "mongoose";

const ImageSchema = new Schema(
  {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { timestamps: true }
);

export default (models.Image || model("Image", ImageSchema)) as mongoose.Model<any>;
