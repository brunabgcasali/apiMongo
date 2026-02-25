const mongoose = require("mongoose");
const { Schema } = mongoose;

const JornadaSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true
  },

  dataInicio: {
    type: Date,
    default: () => new Date()
  },

  xpTotal: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },

  nivel: {
    type: Number,
    required: true,
    default: 1,
    min: 1
  }
}, {
  versionKey: false,
  timestamps: true
});

// 🔴 GARANTE valores padrão mesmo se vier undefined
JornadaSchema.pre("save", function (next) {

  if (this.xpTotal === undefined || this.xpTotal === null) {
    this.xpTotal = 0;
  }

  if (this.nivel === undefined || this.nivel === null) {
    this.nivel = 1;
  }

  next();
});

module.exports = mongoose.model("jornada", JornadaSchema);
