import multer from "multer";

// Multer storage configuration
const storage = multer.memoryStorage(); // Storing file in memory, as Cloudinary will handle file storage
export const singleUpload = multer({storage}).single("file");