import React, { useState, useEffect } from 'react'
import { Post } from '@store/types/post.types'
import Modal from '@components/modal/'
type PostEdit = {
    onSubmitEditPost?: (post: Post) => void
    post: Post,
    ShowModalPostEdit: boolean,
    onDeletPost: (post: Post) => void
    onCloseModal: () => void
}


const PostCreate: React.FunctionComponent<PostEdit> = (props: PostEdit) => {
    const { onSubmitEditPost, post, ShowModalPostEdit, onCloseModal ,onDeletPost } = props
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")


    const onHandleChangeForm = (type: string, value: string) => {
        if (type === "title") {
            setTitle(value)
        }
        if (type === "body") {
            setBody(value)
        }
    }
    const onSubmitForm = () => {
        if (onSubmitEditPost) {
            const paramPost = { ...post, body, title }
            onSubmitEditPost(paramPost)
        }
    }

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [onSubmitEditPost])

    return (
        <Modal onClose={onCloseModal} showModal={ShowModalPostEdit} title="Edit Post">
            <div>
                <div className="w-full text-left py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                    <form className="bg-white rounded px-8  py-4 ">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Title
                         </label>
                            <input value={title} onChange={(e) => onHandleChangeForm('title', e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Body
                         </label>
                            <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                value={body}
                                onChange={(e) => onHandleChangeForm('body', e.target.value)}
                                placeholder="******************" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={onSubmitForm} className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Post
                            </button>
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={()=>onDeletPost(post)}>
                                Delete Post
                                </button>

                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default PostCreate
