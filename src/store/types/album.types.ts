export interface Album  {
    userId: string,
    id: string,
    title: string,
    photos: Photo []
}

export interface Photo {
    albumId : string,
    id : string,
    title : string,
    thumbnailUrl : string,
}