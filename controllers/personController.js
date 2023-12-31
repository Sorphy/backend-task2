import Person from "../models/person.js";
import { isValidName } from "../middlewares/validation.js";

const handleServerError = (res, err) => {
  console.error(err);
  res.status(500).json({ error: " Internal server error" });
};

export async function createPerson(req, res) {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!isValidName(name)) {
      return res
        .status(400)
        .json({
          error:
            "Invalid Name Format. Only letters, spaces and dots are allowed",
        });
    }
    const newPerson = new Person({ name });
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getAllPersons(req, res) {
  try {
    const persons = await Person.find(); // Retrieve all Person objects from the database
    res.status(200).json(persons);
  } catch (err) {
    handleServerError(res, err);
  }
}
export async function updatePersonById(req, res) {
  const { user_id } = req.params;
  const { name } = req.body;
  try {
    if (name !== undefined) {
      if (!isValidName(name)) {
        return res.status(400).json({
          error:
            "Invalid Name Format. Only letters, spaces and dots are allowed",
        });
      }
    }
    const updatedPerson = await Person.findByIdAndUpdate(user_id, {name}, {
      new: true,
    });

    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.status(200).json(updatedPerson);
  } catch (err) {
    handleServerError(res, err);
  }
}

export async function deletePersonById(req, res) {
  const { user_id } = req.params;

  try {
    const deletedPerson = await Person.findByIdAndDelete(user_id);

    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    handleServerError(res, err);
  }
}
