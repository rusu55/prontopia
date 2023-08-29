'use client'

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const {data: session} = useSession();

  const isUserLoogedIn = false;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);      
    })();
  }, []);
  console.log(session)
  return (
    <nav className="flex-between w-full mb-16 pt-3">
         <Link href='/' className='flex gap-2 flex-center'>
            <Image
              src='/assets/images/logo.svg'
              alt='logo'
              width={30}
              height={30}
              className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>
         </Link>

         { /* Desktop Navigation */ }
         <div className="sm:flex hidden">
            {session?.user ? 
            ( <div className='flex gap-3 md:gap-5'>
                <Link href="/create-prompt" className='black_btn'>Create New Post</Link>
                <button onClick={signOut} className='outline_btn'>Sign Out</button>
                <Link href='/profile'>
                  <Image src={session?.user.image} width={37} height={37}  className='rounded-full' alt='profile' />
                </Link>
            </div>) : (
               <>
               {providers &&
                 Object.values(providers).map((provider) => (
                   <button
                     type='button'
                     key={provider.name}
                     onClick={() => {
                       signIn(provider.id);
                     }}
                     className='black_btn'>
                     Sign in
                   </button>
                 ))}
             </>
           )}
         </div>
         {/* Mobile Navigation */}
         <div className="sm:hidden flex relative">
              {session?.user ? (
                <div></div>
              ) : ( <div></div>)}
         </div>
    </nav>
  )
}

export default Nav
