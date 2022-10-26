import { Router } from "express";
import { creteSpecificationController } from "../modules/cars/UseCases/createSpecification";


const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {
    return creteSpecificationController.handle(request, response);
});

export { specificationsRoutes};
