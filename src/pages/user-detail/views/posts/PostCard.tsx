import React from 'react'
import { Post } from '@store/types/post.types'


type PostItemProps = {
    post: Post
    onClickPost ?: (post : Post) => void

}
const PostItem = (props: PostItemProps) => {
    const { post ,onClickPost} = props
    return (
        <div>
            <div  className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                <div className="text-left " onClick={()=> onClickPost && onClickPost(post) }>
                    <h2 className="text-gray-800 text-3xl font-semibold">{post.title}</h2>
                    {post.body && (
                        <p className="mt-2 text-gray-600">{post.body}</p>
                    )}

                </div>
                <div className="grid grid-cols-1 mt-4 gap-4 ">
                    {post.comments && (
                        post.comments.map((comment) => (
                            <div className="border-l-2 text-left pl-2">
                                <div className="flex items-center">
                                    <p className="text-bold text-xl ml-1">{comment.name} </p>  <p className="text-gray-500 ml-3">{comment.email}</p>
                                </div>
                                <p className="text-md ml-1">{comment.body}</p>
                            </div>
                        )
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default React.memo(PostItem)
