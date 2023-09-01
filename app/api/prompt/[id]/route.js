import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const DELETE = async (request, {params}) =>{
    try{
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfuly" , {status: 200});
    }catch(error){
        return new Response ("Error deleting Prompt", {status: 500});
    }
}