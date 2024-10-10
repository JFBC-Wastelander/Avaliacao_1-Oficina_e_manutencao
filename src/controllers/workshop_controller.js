import Workshop from "../models/workshop_model.js";

export const store = async (req, res) => {
  try {
    await Workshop.create(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const index = async (req, res) => {
  try {
    let content = await Workshop.find().exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const show = async (req, res) => {
  try {
    let content = await Workshop.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const update = async (req, res) => {
  try {
    let content = await Workshop.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    let content = await Workshop.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
