import CategoryService from "./categoryService";
import CategoryDTO from "./categoryDTO";

export default class CategoryController {

    private categoryService: CategoryService;
    
    constructor () {
        this.categoryService = new CategoryService();
    }

    public getAllCategories (): Promise<CategoryDTO[]> {
        return this.categoryService.getAllCategories();
    }

    public getCategoryByName(name: string): Promise<CategoryDTO> {
        return this.categoryService.getCategoryByName(name);
    }

    public save(categoryDTO: CategoryDTO): Promise<CategoryDTO> {
        return this.categoryService.save(categoryDTO);
    }

}