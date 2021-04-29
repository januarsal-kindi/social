import {
	USER_LIST_LOADING,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
	UserListDispatchType,
	User,
} from "@store/types/user.types";

interface DefaultStateI {
    userList : {
        loading : boolean,
        list : User[],
        page : number,
        limit : number, 
        error : {
            isError : boolean,
            message : string
        }
    }
}

const defaultState: DefaultStateI = {
    userList : {
        loading: false,
        list : [],
        page : 0,
        limit : 10,
        error : {
            isError : false,
            message : ""
        }
    }
};

const userReducer = (
	state: DefaultStateI = defaultState,
	action: UserListDispatchType,
): DefaultStateI => {
	switch (action.type) {
		case USER_LIST_FAIL:
			return {
				...state,
                userList : {
                    ...state.userList,
                    loading : false
                }
			};
		case USER_LIST_LOADING:
			return {
				...state,
                userList : {
                    ...state.userList,
                    loading : true
                }
			};
		case USER_LIST_SUCCESS:
			return {
				...state,
                userList : {
                    ...state.userList,
                    loading : false,
                    list : [
                        ...state.userList.list,
                        ...action.payload.list
                    ],
                    limit : action.payload.limit,
                    page : action.payload.page
                }
			};
		default:
			return state;
	}
};

export default userReducer;
