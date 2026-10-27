import mongoose, { Schema, model, models } from "mongoose";

export type BlogStatus = "pending" | "approved" | "rejected";

export interface BlogDTO {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: string; // sanitized HTML
  image: string;
  keywords: string[];
  authorName: string;
  authorEmail: string;
  isAdminPost: boolean;
  status: BlogStatus;
  createdAt: string;
  updatedAt: string;
}

const BlogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true, trim: true, maxlength: 200 },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    keywords: { type: [String], default: [] },
    authorName: { type: String, required: true, trim: true, maxlength: 80 },
    authorEmail: { type: String, required: true, trim: true, lowercase: true },
    isAdminPost: { type: Boolean, default: false },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending", index: true },
  },
  { timestamps: true }
);

// Cast the WHOLE expression – this removes the union-type "not callable" error
export default (models.Blog || model("Blog", BlogSchema)) as mongoose.Model<any>;
