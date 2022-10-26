import { Router} from "express";
import multer from "multer";

import { createCategopryController } from "../modules/cars/UseCases/createCategory";
import { importCategoryController } from "../modules/cars/UseCases/importCategory";
import { listCategoriesController } from "../modules/cars/UseCases/listCategories";


const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategopryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export {categoriesRoutes};