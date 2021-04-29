import React from 'react'
import { Post } from '@store/types/post.types'
import PostCard  from './PostCard'
import PostCreate from './PostCreate'
type PostListTypeProps = {
    posts: Post[],
    onClickPost? : (post : Post) => void,
    onSubmitCreatePost?: (title: string, body: string) => void

}
const PostList: React.FunctionComponent<PostListTypeProps> = (props: PostListTypeProps) => {
    const { posts, onSubmitCreatePost ,onClickPost } = props
    return (
        <>
            <h5 className="text-4xl text-left text-bold">  Post</h5>
            <div>
                <PostCreate onSubmitCreatePost={onSubmitCreatePost} />
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} onClickPost={onClickPost} />
                ))}
            </div>
        </>
    )
}

export default PostList