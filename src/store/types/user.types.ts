export const USER_LIST_LOADING = "user/USER_LIST_LOADING";
export const USER_LIST_FAIL = "MOVIE_LIST_FAIL";
export const USER_LIST_SUCCESS = "MOVIE_LIST_SUCCESS";


export interface UserList {
  list : User[],
  page : number,
  limit : number
}

export interface User  {
    id: string,
    name: string,
    username: string,
    email : string,
    address : UserAddress,
    phone : string,
    website : string,
    company : {
        name : string,
        catchPhrase : string,
        bs : string
    }
}

export type UserAddress = {
    street : string,
    suite : string,
    city : string,
    zipcode : string,
    geo : {
        lat : string,
        lng : string
    },

}

export interface  UserListLoading {
  type: typeof USER_LIST_LOADING | typeof USER_LIST_LOADING
}

export interface UserListFail {
  type: typeof USER_LIST_FAIL
}

export interface UserListSuccess {
  type: typeof USER_LIST_SUCCESS | typeof USER_LIST_SUCCESS,
  payload: UserList
}


export type UserListDispatchType  = UserListLoading | UserListFail | UserListSuccess