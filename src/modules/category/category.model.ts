import { Schema, model } from 'mongoose';
import { ICategory, ICategoryModel } from './category.interface';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: { type: String, default: '' },
    parent: { type: Schema.Types.ObjectId, ref: 'Category', default: null }, // Parent category for subcategories
    image: { type: String, default: '' }, // Optional image for category
    metaTitle: { type: String, default: '' }, // SEO meta title
    metaDescription: { type: String, default: '' }, // SEO meta description
  },
  { timestamps: true },
);

// Indexes for faster queries
categorySchema.index({ name: 1 }); // Index to quickly find categories by name
categorySchema.index({ slug: 1 }); // Index to quickly find categories by slug

// Middleware: Auto-generate the slug if not provided
categorySchema.pre('save', function (next) {
  if (!this.slug) {
    // Generate the slug from the category name (e.g., "Electronics" => "electronics")
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  next();
});

// Model creation
const Category = model<ICategory, ICategoryModel>('Category', categorySchema);

export default Category;
