import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Banco conectado com sucesso!")
    } catch (err) {
        console.log(err)
    }
})