"use client"

import { useEffect, useState } from "react";

import PromptCard from "./PromptCard";

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
    <div>
      Feed
    </div>
  )
}

export default Feed