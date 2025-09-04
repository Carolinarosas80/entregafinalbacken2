import mongoose from "mongoose";
import ProductModel from "./src/models/product.modeljs"; 
import productos from "./src/data/productos.json" assert{type:"json"};

// 🔹 Conexión a tu base Mongo Atlas
const MONGO_URI = "mongodb+srv://carolinaUser:Caro2025@cluster0.1s2ghh5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const importData = async () => {
  try {
    // Conexión
    await mongoose.connect(MONGO_URI);

    // Limpiar colección (opcional, si no querés duplicados)
    await ProductModel.deleteMany();

    // Insertar productos
    await ProductModel.insertMany(productos);

    console.log("✅ Productos insertados correctamente en la base de datos");
    process.exit();
  } catch (error) {
    console.error("❌ Error al insertar productos:", error);
    process.exit(1);
  }
};

importData();
