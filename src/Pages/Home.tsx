import React from 'react'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState, useCallback } from 'react';
import {getAllPosts, createPost } from '../Controllers/posts';

// const [ posts, setPosts ] = useState()


const Home = () => {

  const allPosts = async () => {
    const posts = await getAllPosts()
  }


  const fetchData = useCallback(async () => {
    await allPosts()
  }, [])


  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>Home page</div>
  )
}

export default Home