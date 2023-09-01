"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {useEffect, useState} from 'react';

import Form from "@components/Form";

const UpdatePrompt = () => {
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");
    const router = useRouter();

    const [post, setPost] = useState({ prompt: "", tag: "",});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() =>{
            const getPrompsDetails = async () =>{
                const response =  await fetch(`/api/prompt/${promptId}`);
                const data = await response.json();

                setPost({
                    prompt: data.prompt,
                    tag: data.tag,
                });
            }

            if(promptId) getPrompsDetails();
    }, [promptId]);

    const updatePost = async (e) =>{
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) return alert("Missing PromptId!");

        try{
            const response = await fetch(`/api/prompt/${promptId}`,{
                    method: "PATCH",
                    body: JSON.stringify({
                        prompt: post.prompt,
                        tag: post.tag,
                    })
                 });
            if(response.ok) router.push("/");
        }catch(error){
            console.log(error)
        } finally{
            setSubmitting(false);
        }
    }
  return (
    <Form 
        type="Edit"
        post={post}
        setPost={setPost}
        submitting= {submitting}
        handleSubmit={updatePost}
    />
  )
}

export default UpdatePrompt