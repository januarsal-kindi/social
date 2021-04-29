import React from 'react'
import {Post } from '@store/types/post.types'
import { Album } from '@store/types/album.types'


type PostItemProps = {
    data : {
        title : string,
        body?: string,
    },

}
const PostItem = ( props: PostItemProps) => {
    const {data} = props
    return (
        <div>
            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                <div className="text-left">
                    <h2 className="text-gray-800 text-3xl font-semibold">{data.title}</h2>
                    { data.body ? (
                        <p className="mt-2 text-gray-600">{data.body}</p>
                    ) : (
                        ''
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default  React.memo(PostItem)
