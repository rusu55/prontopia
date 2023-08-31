"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";
 
const MyProfile = () => {
    const {data: session} = useSession();

    useEffect(() =>{        
                  
            const fetchPosts =  async () => {  
                               
                    const response = await fetch(`/api/users/${session?.user.id}/posts`);
                    const data = response.json();
                    
                    }               
            if(session?.user.id) fetchPosts()

            }, [session?.user.id])

  return (
    <div>Profile</div>
  )
}

export default MyProfile