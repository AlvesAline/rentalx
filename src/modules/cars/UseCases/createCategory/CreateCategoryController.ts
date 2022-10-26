import {Response, Request} from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreareCategoryController {
    constructor (private createCategoryUseCase: CreateCategoryUseCase ) {}


    handle(request: Request, response: Response) {
        const { name, description} = request.body;

        this.createCategoryUseCase.execute({name, description});
 
        return response.status(201).send();
        
    }
}

export {CreareCategoryController};