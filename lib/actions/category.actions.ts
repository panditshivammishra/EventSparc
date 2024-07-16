
import {CreateCategoryParams} from "@/types/index"
import { connectToDatabase } from "../database/index"
import Category from "../database/models/category.model";
import { handleError } from "../utils";
export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
    try {
          await connectToDatabase();
    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
    }
    catch(error) {
        handleError(error);
  }

}

export const getAllCategories = async () => {
    try {
          await connectToDatabase();
        const allCategory = await Category.find();

    return JSON.parse(JSON.stringify(allCategory));
    }
    catch(error) {
        handleError(error);
  }

}