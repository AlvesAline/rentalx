import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    static execute(arg0: { name: any; description: any; }) {
        throw new Error("Method not implemented.");
    }
    constructor(private specificationsRepository : ISpecificationsRepository) {} 
        execute({ name, description}: IRequest): void {
            const specificationAlreadyExists = this.specificationsRepository.findBYName(
                name
            );

            if(specificationAlreadyExists) {
                throw new Error("Specification already exists")
            }

            this.specificationsRepository.create ({
                name,
                description,
            });
    }
}

export {CreateSpecificationUseCase };