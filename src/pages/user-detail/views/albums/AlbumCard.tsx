import React from 'react'
import {Post } from '@store/types/post.types'
import { Album } from '@store/types/album.types'


type PostItemProps = {
    album : Album

}
const PostItem = ( props: PostItemProps) => {
    const {album} = props
    return (
        <div>
            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                <div className="text-left">
                    <h2 className="text-gray-800 text-3xl font-semibold">{album.title}</h2>                    
                </div>
                <div className="grid grid-cols-5 mt-4 gap-4">
                    {album.photos && (
                        album.photos.map((photo) =>(
                            <img className="w-full" src={photo.thumbnailUrl}/>
                        ))
                    )}  
                </div>
            </div>
        </div>
    )
}

export default  React.memo(PostItem)
