import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async(request) =>{
        const { prompt, tag, userId} = await request.json();

        try{
            await connectToDB();
            const newPrompt = new Prompt({ creator: userId, prompt, tag})
            await newPrompt.save();

            return new Response(JSON.stringify(new Prompt), {status: 201});

        } catch(error){
            return new Response('Failed to create new prompt', { status: 500});
        }
}