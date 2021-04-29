import { Dispatch } from "redux";
import {
	USER_DETAIL_LOADING,
	USER_DETAIL_FAIL,
	USER_DETAIL_SUCCESS,
	USER_POST_LOADING,
	USER_POST_FAIL,
	USER_POST_SUCCESS,
	USER_ALBUMS_LOADING,
	USER_ALBUMS_FAIL,
	USER_ALBUMS_SUCCESS,
	UserDetailDispatchType,
	UserPostsDispatchType,
	userAlbumsDispatchType,
} from "@store/types/userDetail.types";
import {Album} from "@store/types/album.types";
import {Post} from "@store/types/post.types";

import httpRequest from "../../config/httpRequest";

const { socialApi } = httpRequest();
export const getUserDetail = (id: number) => async (
	dispatch: Dispatch<UserDetailDispatchType>,
) => {
	try {
		dispatch({
			type: USER_DETAIL_LOADING,
		});

		const res = await socialApi.get(`users/${id}`);

		if (res.data) {
			const { data } = res;
			dispatch({
				type: USER_DETAIL_SUCCESS,
				payload: data,
			});
		} else {
			dispatch({
				type: USER_DETAIL_FAIL,
			});
		}
	} catch (e) {
		dispatch({
			type: USER_DETAIL_FAIL,
		});
	}
};

type parapDetailUserAtributes = {
	userId: number;
	limit: number;
	pages: number;
};

const  getCommentByPost = async function*(posts :Array<Post>){
    for (let i=0 ; i < posts.length ; i++){
        try {
            const postByIndex = posts[i];
            const getComments = await socialApi.get(
               `post/${postByIndex.id}/comments`,
           );
           if(getComments.data){ 

               yield {
                   ...postByIndex,
                   comments: getComments.data
               }
            }else {
                yield postByIndex
            }
            
        } catch (error) {
        }
       
    }
  
}

export const getCommentPost = (params :Array<Post>) => async (
	dispatch: Dispatch<UserPostsDispatchType>,
) => {
	try {
        const post = []
        for await (let postWithComment of getCommentByPost(params)) {
            post.push(postWithComment)
        }
        console.log(params)
        dispatch({
            type: USER_POST_SUCCESS,
            payload: {
                limit: 100,
                page: 1,
                posts: post,
            },
        });
	} catch (e) {
		
	}
};




export const getPostByUserId = (params: parapDetailUserAtributes) => async (
	dispatch: Dispatch<UserPostsDispatchType | any>,
) => {
	try {
		dispatch({
			type: USER_POST_LOADING,
		});

		const res = await socialApi.get(
			`users/${params.userId}/posts?start=${params.pages}&limit=${params.limit}&_sort=id&_order=desc`,
		);

		if (res.data) {
			const { data } = res;
			dispatch({
				type: USER_POST_SUCCESS,
				payload: {
					limit: params.limit,
					page: params.pages,
					posts: data,
				},
			});
            dispatch(getCommentPost(data))
		} else {
			dispatch({
				type: USER_POST_FAIL,
			});
		}
	} catch (e) {
		console.log(e);
		dispatch({
			type: USER_POST_FAIL,
		});
	}
};

export const createPost = (params: {
	userId: number;
	title: string;
	body: string;
}) => async (dispatch: Dispatch<UserPostsDispatchType | any>) => {
	try {
		const res = await socialApi.post(
			`users/${params.userId}/posts`,{
                title: params.title,
                body:params.body
            }
		);
        if(res){
            dispatch(getPostByUserId({
                userId: params.userId,
                pages :1,
                limit : 100
            }))
        }
      	
	} catch (e) {
		console.log(e);
		dispatch({
			type: USER_POST_FAIL,
		});
	}
};



export const editPost = (params: Post ) => async (dispatch: Dispatch<UserPostsDispatchType | any>) => {
	try {
		const res = await socialApi.put(
			`posts/${params.id}`,{
				userId: params.userId,
                title: params.title,
                body:params.body
            }
		);
        if(res){
            dispatch(getPostByUserId({
                userId: parseInt(params.userId),
                pages :1,
                limit : 100
            }))
        }
      	
	} catch (e) {
		console.log(e);
		dispatch({
			type: USER_POST_FAIL,
		});
	}
};


export const deletePost = (params: Post ) => async (dispatch: Dispatch<UserPostsDispatchType | any>) => {
	try {
		const res = await socialApi.delete(
			`posts/${params.id}`
		);
        if(res){
            dispatch(getPostByUserId({
                userId: parseInt(params.userId),
                pages :1,
                limit : 100
            }))
        }
      	
	} catch (e) {
		console.log(e);
		dispatch({
			type: USER_POST_FAIL,
		});
	}
};


export const getAlbumByUserId = (params: parapDetailUserAtributes) => async (
	dispatch: Dispatch<userAlbumsDispatchType | any>,
) => {
	try {
		dispatch({
			type: USER_ALBUMS_LOADING,
		});

		const res = await socialApi.get(
			`users/${params.userId}/albums?start=${params.pages}&limit=${params.limit}`,
		);

		if (res.data) {
			const { data } = res;
			dispatch({
				type: USER_ALBUMS_SUCCESS,
				payload: {
                    limit: params.limit,
					page: params.pages,
					albums: data,
                },
			});
            dispatch(getPhotoByAlbum(data))
		} else {
			dispatch({
				type: USER_ALBUMS_FAIL,
			});
		}
	} catch (e) {
		dispatch({
			type: USER_ALBUMS_FAIL,
		});
	}
};

const  getPhotByAlbum = async function*(albums :Array<Album>){
    for (let i=0 ; i < albums.length ; i++){
        try {
            const AlbumByIndex = albums[i];
            const getPhotos = await socialApi.get(
               `albums/${AlbumByIndex.id}/photos`,
           );
           if(getPhotos.data){ 

               yield {
                   ...AlbumByIndex,
                   photos: getPhotos.data
               }
            }
            
        } catch (error) {
            
        }
       
    }
  
}

export const getPhotoByAlbum = (params :Array<Album>) => async (
	dispatch: Dispatch<userAlbumsDispatchType>,
) => {
	try {
        const albums = []
        for await (let albumWithPhoto of getPhotByAlbum(params)) {
            albums.push(albumWithPhoto)
        }
        dispatch({
            type: USER_ALBUMS_SUCCESS,
            payload: {
                limit: 100,
                page: 1,
                albums: albums,
            },
        });
	} catch (e) {
		
	}
};


