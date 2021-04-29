export interface Post  {
    userId: string,
    id: string,
    title: string,
    body : string,
    comments  ?: Array<Comment>
}

export interface PostCreate  {
    title: string,
    body : string,
}

export interface Comment {
    postId : string,
    id : number,
    name : string,
    email : string,
    body : string
}