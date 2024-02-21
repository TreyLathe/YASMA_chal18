const { Schema, model } = require("mongoose");

// Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

// Define virtual field
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Reaction schema
const reactionSchema = new Schema({
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toISOString()
    }
  });
  
const Thought = model("thought", userSchema);

module.exports = Thought;