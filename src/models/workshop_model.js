import { Schema, model } from "mongoose"

export const workshopSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    adress: {
        type: Schema.Types.String,
        required: true,
    },
    specialties: {
        type: Schema.Types.String,
        enum: ["MOTOR", "FREIOS", "SUSPENSÃO", "ESTÉTICA"],
        required: true,
    },
    maintenance: [{
        type: Schema.Types.ObjectId,
        ref: "Maintenance",
        required: true,
    }]
})

const Workshop = model("Workshop", workshopSchema)