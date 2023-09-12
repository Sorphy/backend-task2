import mongoose from "mongoose";

export const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.user_id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  next();
};


export const isValidName = (name) => { 
      return /^[A-Za-z\s.]+$/.test(name);
}
    