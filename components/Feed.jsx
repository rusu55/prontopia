"use client"

import { useEffect, useState } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({data}) =>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) =>(
        <PromptCard key={post._id} post={post} />)
      )}
    </div>
  )
}

const Feed = () => {

  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () =>{
    const response = await  fetch('/api/prompt');
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() =>{
    fetchAllPosts()
  }, [])

  return (
    <section className='feed'>
      <PromptCardList data={allPosts} />
    </section>
  )
}

export default Feed