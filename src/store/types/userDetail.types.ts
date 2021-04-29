
import { User } from './user.types'
import { Post } from './post.types'
import { Album } from './album.types'

export const USER_DETAIL_LOADING = "userDetail/USER_DETAIL_LOADING";
export const USER_DETAIL_FAIL = "userDetail/USER_DETAIL_FAIL";
export const USER_DETAIL_SUCCESS = "userDetail/USER_DETAIL_SUCCESS";
export const USER_POST_LOADING = "userDetail/USER_POST_LOADING";
export const USER_POST_FAIL = "userDetail/USER_POST_FAIL";
export const USER_POST_SUCCESS = "userDetail/USER_POST_SUCCESS";
export const USER_ADD_POST_LOADING = "userDetail/USER_POST_LOADING";
export const USER_ADD_POST_FAIL = "userDetail/USER_POST_FAIL";
export const USER_ADD_POST_SUCCESS = "userDetail/USER_POST_SUCCESS";
export const USER_ALBUMS_LOADING = "userDetail/USER_ALBUMS_LOADING";
export const USER_ALBUMS_FAIL = "userDetail/USER_ALBUMS_FAIL";
export const USER_ALBUMS_SUCCESS = "userDetail/USER_ALBUMS_SUCCESS";


export interface  UserDetailLoading {
  type: typeof USER_DETAIL_LOADING 
}

export interface UserDetaFail {
  type: typeof USER_DETAIL_FAIL
}

export interface UserDetailSuccess {
  type: typeof USER_DETAIL_SUCCESS,
  payload: User
}

export interface  UserPostLoading {
    type: typeof USER_POST_LOADING 
  }
  
  export interface UserPostFail {
    type: typeof USER_POST_FAIL
  }
  
  export interface UserPostSuccess {
    type: typeof USER_POST_SUCCESS ,
    payload: {
        posts : Post[],
        page : number, limit: number
    } 
  }
  export interface  UserAlbumsLoading {
    type: typeof USER_ALBUMS_LOADING 
  }
  
  export interface UserAlbumsFail {
    type: typeof USER_ALBUMS_FAIL
  }
  
  export interface UserAlbumsSuccess {
    type: typeof USER_ALBUMS_SUCCESS ,
    payload: {
        albums : Album[],
        page : number, limit: number
    } 
  }

export type UserDetailDispatchType  = UserDetailLoading | UserDetaFail | UserDetailSuccess
export type UserPostsDispatchType = UserPostLoading | UserPostFail | UserPostSuccess
export type userAlbumsDispatchType =  UserAlbumsLoading | UserAlbumsFail | UserAlbumsSuccess