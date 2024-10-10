import Vehicle from "../models/vehicle_model.js";

export const store = async (req, res) => {
    try {
        await Vehicle.create(req.body)
        res.status(201).json()
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const index = async (req, res) => {
    try {
        let content = await Vehicle.find().exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const show = async (req, res) => {
    try {
        let content = await Vehicle.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const update = async (req, res) => {
    try {
        let content = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        let content = await Vehicle.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
