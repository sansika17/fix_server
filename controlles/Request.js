import Request from "../models/Request.js";
import jwt from "jsonwebtoken";

// Create a new request
export const addRequest = async (req, res) => {
  const { title, category, location, description } = req.body;
  
  try {
    // Check if the request already exists by title (or customize it as per your need)
    const existingRequest = await Request.findOne({ title });

    if (existingRequest) {
      return res.status(400).json({ error: "Request already exists" });
    }

    const newRequest = new Request({
      title,
      category,
      location,
      description,
    });

    // Save the request to the database
    await newRequest.save();

    // Generate a JWT token (this can be customized based on user authentication)
    const token = jwt.sign(
      { requestId: newRequest._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token, message: "Request created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Creation failed. Please try again later." });
  }
};

// Get a request by title from the body (or customize to use other fields)
export const getRequestByTitle = async (req, res) => {
  const { title } = req.body; // Get title from the request body

  try {
    const request = await Request.findOne({ title });

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a request by title (or customize to update by another field)
export const updateRequest = async (req, res) => {
  const { title, category, location, description } = req.body; // Get title and other fields from the body

  try {
    const updatedRequest = await Request.findOneAndUpdate(
      { title },
      { category, location, description },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    res.status(200).json({ message: "Request updated successfully", updatedRequest });
  } catch (error) {
    res.status(500).json({ error: "Update failed. Please try again later." });
  }
};

// Delete a request by title (or any other identifying field)
export const deleteRequestByTitle = async (req, res) => {
  const { title } = req.body; // Get title from the body

  try {
    const deletedRequest = await Request.findOneAndDelete({ title });

    if (!deletedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
