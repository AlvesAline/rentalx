import { Specification } from "../model/Specification";

interface IcreateSpceficationDTO {
    name: string;
    description: string;

}

interface ISpecificationsRepository {

    create({ description, name }: IcreateSpceficationDTO) : void;
    findBYName (name: string): Specification;
}

export {ISpecificationsRepository, IcreateSpceficationDTO}