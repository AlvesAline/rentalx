import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCAse = new CreateSpecificationUseCase(specificationsRepository);
const creteSpecificationController = new CreateSpecificationController(createSpecificationUseCAse);


export {creteSpecificationController} 