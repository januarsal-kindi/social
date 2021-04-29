
import { RootStore } from '@store/reducers/rootReducer';

export const UserDetail = (state: RootStore) => state.userDetail.userDetail
export const UserPost = (state: RootStore) => state.userDetail.posts
export const UserAlbum = (state: RootStore) => state.userDetail.albums