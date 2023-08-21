import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getPostsError, getPostsStatus, selectAllPosts } from '../features/postSlice'
import BasicCard from '../components/BasicCard'
import '../App.css';

const PostsList = () => {

    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const status = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(getPosts())
        }
    }, [status, dispatch])

    let content;
    if(status === 'loading'){
        content = <h1>Loading</h1>
    } else if(status === 'succeeded'){
        content = posts.map(post =>(
            <BasicCard key={post.id} post={post} />
        ))
    } else if(status === 'failed'){
        content = <h1>{error}</h1>
    }
  return (
    <div className='appContent'>
        {content}
    </div>
  )
}

export default PostsList