import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    // Parse the buffer to get a data URI
    const extName = path.extname(file.originalname).toString(); // Get file extension
    return parser.format(extName, file.buffer); // Return a data URI
}

export default getDataUri;