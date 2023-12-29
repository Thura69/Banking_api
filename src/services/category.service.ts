import { CategoryModel } from "../models/category.model"

export async function addCategoryService(obj:Object) {
    try { 
        const category = await CategoryModel.create(obj);
        return category;
    } catch (e:any) {
      throw new Error(e)  
    }
};

export async function findCategoryByNameService(name:string) {
    try { 
        const category = await CategoryModel.findOne({name});
        return category;
    } catch (e:any) {
      throw new Error(e)  
    }
};

export async function addMorePostsIdService(categoryId: string, postId: string) {
    try {
        const update = await CategoryModel.updateOne({ _id: categoryId }, {
            $push: { postIds: postId }
        });
        return update;
    } catch (e: any) {
        throw new Error(e)
    }
}


export async function getAllCategoriesService() {
    try { 
        const category = await CategoryModel.find().populate('postIds');
        return category;
    } catch (e:any) {
      throw new Error(e)  
    }
};