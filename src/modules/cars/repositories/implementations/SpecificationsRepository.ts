
import { Specification } from "../../model/Specification";
import {
    ISpecificationsRepository,
    IcreateSpceficationDTO,
} from "../ISpecificatiosRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }
 
    create ({description, name} : IcreateSpceficationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findBYName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );     
        return specification;
    }
}

export {SpecificationsRepository}




