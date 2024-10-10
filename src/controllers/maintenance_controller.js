import Maintenance from "../models/maintenance_model.js";

export const store = async (req, res) => {
    try {
        await Maintenance.create(req.body)
        res.status(201).json()
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const index = async (req, res) => {
    try {
        let content = await Maintenance.find().exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const show = async (req, res) => {
    try {
        let content = await Maintenance.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const update = async (req, res) => {
    try {
        let content = await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        let content = await Maintenance.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
