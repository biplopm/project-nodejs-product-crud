import multer from "multer";


// disk storage setup

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      cb(
        null,
        Date.now() +
          "-" +
          Math.round(Math.random() * 1000000) +
          "-" +
          file.originalname
      );
    },
    destination: (req, file, cb) => {
        if (file.fieldname === "productPhoto") {
          cb(null, "public/products");
        }
    },
  });

  export const createProductMulter = multer({ storage }).single("productPhoto");