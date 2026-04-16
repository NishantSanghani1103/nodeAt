import { postModel } from "../model/post.model.js";


export const postService = async (data) => {
    const { title, content, userId } = data
    const res = await postModel.create({
        title,
        content,
        userRegisterId:userId
    })
    // console.log(res);
    
}