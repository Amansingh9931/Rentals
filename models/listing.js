const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-scuba-diver-explores-the-deep-blue-sea-snb8JwEKZd0 ",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-scuba-diver-explores-the-deep-blue-sea-snb8JwEKZd0 "
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
