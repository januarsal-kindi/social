import { Dispatch } from "redux";
import {
	UserListDispatchType,
	USER_LIST_LOADING,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
} from "@store/types/user.types";
import httpRequest from "../../config/httpRequest";
import axios from "axios";

const { socialApi } = httpRequest();
export const getuserList = (page: number, limit: number) => async (
	dispatch: Dispatch<UserListDispatchType>,
) => {
	try {
		dispatch({
			type: USER_LIST_LOADING,
		});

		const res = await socialApi.get(`users?limit=${limit}&page=${page}`);

		if (res.data) {
			const { data } = res;
			dispatch({
				type: USER_LIST_SUCCESS,
				payload: {
					list: data,
					page: page,
					limit: limit,
				},
			});
		} else {
			dispatch({
				type: USER_LIST_FAIL,
			});
		}
	} catch (e) {
		dispatch({
			type: USER_LIST_FAIL,
		});
	}
};
