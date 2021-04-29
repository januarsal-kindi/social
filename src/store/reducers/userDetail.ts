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
	UserDetailSuccess,
	UserPostsDispatchType,
	userAlbumsDispatchType,
	UserPostSuccess,
	UserAlbumsSuccess,
} from "@store/types/userDetail.types";
import { Post } from "@store/types/post.types";
import { Album } from "@store/types/album.types";
import { User } from "@store/types/user.types";

interface DefaultStateI {
	userDetail: {
		loading: boolean;
		data: User;
		error: {
			isError: boolean;
			message: string;
		};
	};
	posts: {
		loading: boolean;
		data: Post[];
		page: number;
		limit: number;
		error: {
			isError: boolean;
			message: string;
		};
	};
	albums: {
		loading: boolean;
		data: Album[];
		page: number;
		limit: number;
		error: {
			isError: boolean;
			message: string;
		};
	};
}

const defaultState: DefaultStateI = {
	userDetail: {
		loading: true,
		data: {
			id: "",
			name: "",
			username: "",
			email: "",
			address: {
				street: "",
				suite: "",
				city: "",
				zipcode: "",
				geo: {
					lat: "",
					lng: "",
				},
			},
			phone: "",
			website: "",
			company: {
				name: "",
				catchPhrase: "",
				bs: "",
			},
		},
		error: {
			isError: false,
			message: "",
		},
	},
	posts: {
		loading: true,
		data: [],
		page: 1,
		limit: 12,
		error: {
			isError: false,
			message: "",
		},
	},
	albums: {
		loading: false,
		data: [],
		page: 1,
		limit: 12,
		error: {
			isError: false,
			message: "",
		},
	},
};

const userReducer = (
	state: DefaultStateI = defaultState,
	action: UserDetailDispatchType | UserPostsDispatchType | userAlbumsDispatchType,
): DefaultStateI => {
	switch (action.type) {
		case USER_DETAIL_FAIL:
			return setUserDetailFail(state, action);
		case USER_DETAIL_LOADING:
			return setUserLoading(state, action);
		case USER_DETAIL_SUCCESS:
			return setUserSuccess(state, action);
		case USER_POST_LOADING:
			return setUserPostFail(state);
		case USER_POST_FAIL:
			return setUserPostLoading(state);
		case USER_POST_SUCCESS:
			return setUserPostSuccess(state, action);
		case USER_ALBUMS_FAIL:
			return setUserAlbumsFail(state);
		case USER_ALBUMS_LOADING:
			return setUserAlbumsLoading(state);
		case USER_ALBUMS_SUCCESS:
			return setUserAlbumsSuccess(state, action);
		default:
			return state;
	}
};

export default userReducer;

const setUserDetailFail = (
	state: DefaultStateI = defaultState,
	action: UserDetailDispatchType,
) => {
	const { userDetail } = state;
	return {
		...state,
		userDetail: {
			...userDetail,
			loading: false,
		},
	};
};

const setUserLoading = (
	state: DefaultStateI = defaultState,
	action: UserDetailDispatchType,
) => {
	const { userDetail } = state;
	return {
		...state,
		userDetail: {
			...userDetail,
			loading: true,
		},
	};
};
const setUserSuccess = (
	state: DefaultStateI = defaultState,
	action: UserDetailSuccess,
) => {
	const { userDetail } = state;
	return {
		...state,
		userDetail: {
			...userDetail,
			loading: false,
			data: { ...action.payload },
		},
	};
};

const setUserPostFail = (state: DefaultStateI = defaultState) => {
	const { posts } = state;
	return {
		...state,
		posts: {
			...posts,
			loading: false,
		},
	};
};

const setUserPostLoading = (state: DefaultStateI = defaultState) => {
	const { posts } = state;
	return {
		...state,
		posts: {
			...posts,
			loading: true,
		},
	};
};

const setUserPostSuccess = (
	state: DefaultStateI = defaultState,
	action: UserPostSuccess,
) => {
	const { posts } = state;
	return {
		...state,
		posts: {
			...posts,
			loading: false,
			page: action.payload.page,
			limit: action.payload.limit,
			data: [...action.payload.posts],
		},
	};
};

const setUserAlbumsFail = (state: DefaultStateI = defaultState) => {
	const { albums } = state;
	return {
		...state,
		albums: {
			...albums,
			loading: false,
		},
	};
};

const setUserAlbumsLoading = (state: DefaultStateI = defaultState) => {
	const { albums } = state;
	return {
		...state,
		albums: {
			...albums,
			loading: true,
		},
	};
};

const setUserAlbumsSuccess = (
	state: DefaultStateI = defaultState,
	action: UserAlbumsSuccess,
) => {
	const { albums } = state;
	return {
		...state,
		albums: {
			...albums,
			loading: false,
			page: action.payload.page,
			limit: action.payload.limit,
			data: [...action.payload.albums],
		},
	};
};
