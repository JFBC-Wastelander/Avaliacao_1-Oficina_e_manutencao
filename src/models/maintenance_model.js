import { Schema, model } from "mongoose"

const totalCost = () => {
    for (let i = 0; i < services.price; i++) {
        return i
    }
}

export const maintenanceSchema = new Schema ({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true,
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true,
    },
    services: [{
        name: {
            type: Schema.Types.String,
            required: true,
        },
        price: {
            type: Schema.Types.Number,
            required: true
        },
        required: true,
    }],
    date: {
        type: Schema.Types.Date,
        required: true,
    },
    totalCost: {
        totalCost
    }
})

const Maintenance = model("Maintenance", maintenanceSchema)