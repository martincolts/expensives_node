import CategoryRepository from "./categoryRepository";
import CategoryDTO from "./categoryDTO";
import Category from "./category";
import { getCustomRepository } from "typeorm";

export default class CategoryService {

    private categoryRepository: CategoryRepository;

    constructor () {
        this.categoryRepository = getCustomRepository(CategoryRepository);
    }

    public async save (categoryDTO: CategoryDTO): Promise<CategoryDTO> {
        const category: Category = categoryDTO.toCategory();
        const categorySaved = await this.categoryRepository.save(category);
        return categorySaved.toCategoryDTO();
    }

    public async getCategoryByName (name: string): Promise<CategoryDTO> {
        const category: Category = await this.categoryRepository.findByName(name);
        return category.toCategoryDTO();
    }

    public async getAllCategories (): Promise<CategoryDTO[]> {
        const categories: Category[] = await this.categoryRepository.find();
        const categoriesDTO: CategoryDTO[] = [];
        categories.forEach((category) => {
            categoriesDTO.push(category.toCategoryDTO());
        })
        return categoriesDTO;
    }
}