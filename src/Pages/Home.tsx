import React from 'react'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getAllPosts} from '../Controllers/posts'
// const [ posts, setPosts ] = useState()


const Home = () => {
  const allPosts = async () => {
    const posts = await getAllPosts()
    console.log('posts', posts);
    
    // setPosts(posts)
  }
  
  
  useEffect(() => {
    (async () => {
      allPosts();
      // let res = await fetchUser();
      // if (res.success) {
      //   setUser(res.data.results[0]);
      //   setUserLoaded(true);
      // }
    })();
  }, []);
  
  return (
    <div>Home page
    </div>
    
  )
}

export default Home