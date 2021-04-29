import React from 'react'
import { Album } from '@store/types/album.types'
import AlbumCard  from './AlbumCard'


type AlbumListTypeProps = {
    albums: Album[],

}
const PostList: React.FunctionComponent<AlbumListTypeProps> = (props: AlbumListTypeProps) => {
    const { albums  } = props
    return (
        <>
            <h5 className="text-4xl text-left text-bold">  Album</h5>
            <div>
                {albums.map((album) => (
                    <AlbumCard album={album} key={album.id} />
                ))}
            </div>
        </>
    )
}

export default PostList