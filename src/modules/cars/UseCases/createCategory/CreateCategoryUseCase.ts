import { IcategoriesRepository } from "../../repositories/ICategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}


class CreateCategoryUseCase {
  constructor (private categoriesRepository: IcategoriesRepository) {}

    execute({description, name}: IRequest): void  {
        const categoryAloreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAloreadyExists) {
            throw new Error ("Category Already exists !")
        }

        this.categoriesRepository.create({ name, description});
    }

}

export {CreateCategoryUseCase} 