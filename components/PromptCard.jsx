"use client";

import { useSession } from "next-auth/react";

const PromptCard = ({post}) => {
  const { data: session } = useSession();

  return (
   <div className="prompt_card">
     <div className="flex justify-betwwen items-start gap-5">
       <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
     </div>
   </div>
  )
}

export default PromptCard