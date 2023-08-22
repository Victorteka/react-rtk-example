import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostDetials, getPostError, getPostStatus, selectPost } from '../features/postDetails'
import BasicCard from '../components/BasicCard'

const PostDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(selectPost)
  const status = useSelector(getPostStatus)
  const error = useSelector(getPostError)

  useEffect(()=>{
    dispatch(getPostDetials(id))
  }, [dispatch, id])

  let content;
    if(status === 'loading'){
        content = <h1>Loading ...</h1>
    } else if(status === 'succeeded'){
      
      content = <BasicCard post={post}/>

    } else if(status === 'failed'){
        content = <h1>{error}</h1>
    }

  return (
    <div>
      {content}
    </div>
  )
}

export default PostDetails