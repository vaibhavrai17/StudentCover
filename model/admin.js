import mongoose from 'mongoose'

// Define the user schema using the Mongoose Schema constructor
const expertSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ['Admin', 'Student', 'Instructor'],
      required: true,
    },

    token: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    // Skills: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Tags',
    //   },
    // ],
    skills: {
      type: [String],
    },
    ratingAndReviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feedback',
      },
    ],

    Time: {
      start: Date,
      end: Date,
    },

    count: {
      type: Number,
    },
    satisfyStudent: {
      type: Number,
    },

    on_off: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

// Export the Mongoose model for the user schema, using the name "user"
export const Expert =
  mongoose.models.Expert || mongoose.model('Expert', expertSchema)
// export default mongoose.model("Expert", expertSchema);
