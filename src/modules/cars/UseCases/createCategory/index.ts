import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositiry";
import { CreareCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase =  new CreateCategoryUseCase(categoriesRepository);

const createCategopryController = new CreareCategoryController (
    createCategoryUseCase
);


export { createCategopryController };