import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    useParams
} from "react-router-dom";
import {
    UserDetail as UserState,
    UserPost as UserPostState,
    UserAlbum as UserAlbumState
} from "@store/selector/userDetail";
import { getUserDetail, getPostByUserId, createPost, getAlbumByUserId,editPost ,deletePost} from "../../store/actions/userDetail";
import CardUser from "./views/CardUser"
import Sidebar from "./views/Sidebar"
import PostList from "./views/PostList"
import AlbumList from "./views/albums/AlbumList"
import ModalPostEdit from "./views/PostEdit"
import { Post } from '@store/types/post.types';
function Home() {
    const dispatch = useDispatch();
    const userDetail = useSelector(UserState);
    const userPosts = useSelector(UserPostState);
    const userAlbums = useSelector(UserAlbumState);
    const { id } = useParams<{ id: string }>();

    const [activeTab, setActiveTab] = useState<string>("posts")
    const [configModalPost, setConfigModalPost] = useState<{
        isShowModal: boolean,
        post: Post
    }>({
        isShowModal: false,
        post: {
            userId: '',
            id: '',
            title: '',
            body: ''
        }
    })


    const onSubmitCreatePost = (title: string, body: string) => {
        dispatch(createPost({
            userId: parseInt(id),
            title,
            body
        }))
    }

    const onSubmitEditPost = (post: Post) => {
        dispatch(editPost(post))
        setConfigModalPost((prev)=> ({
            ...configModalPost,
            isShowModal : false,
        }))
    }

    const onDeletPost = (post:Post) => {
        dispatch(deletePost(post))
        setConfigModalPost((prev)=> ({
            ...configModalPost,
            isShowModal : false,
        }))
    }
    const onCloseModalEditPost = () => {
        setConfigModalPost((prev) => ({ ...prev, isShowModal: false }))
    }
    const onClickTab = (tab: string) => {
        setActiveTab(tab)
    }

    const onClickPost = (post: Post) => {
        setConfigModalPost({
            isShowModal: true,
            post: post,
        })

    }

    useEffect(() => {
        dispatch(getUserDetail(parseInt(id)))
        dispatch(getPostByUserId({
            userId: parseInt(id),
            limit: 100,
            pages: 1
        }))
        dispatch(getAlbumByUserId({
            userId: parseInt(id),
            limit: 100,
            pages: 1
        }))

    }, [])
    return (
        <div className="w-full max-w-5xl mx-auto my-20">
            <CardUser
                user={userDetail.data}
            />
            <div className="grid grid-cols-4 gap-4 mt-10">
                <div className="flex">
                    <Sidebar activeTab={activeTab} onClickTab={onClickTab} />
                </div>
                <div className="col-span-3">
                    {activeTab == "posts" && (
                        <PostList posts={userPosts.data}
                            onSubmitCreatePost={onSubmitCreatePost}
                            onClickPost={onClickPost}
                        />
                    )}

                    {activeTab === "albums" && (
                        <AlbumList albums={userAlbums.data} />
                    )}

                </div>

                <ModalPostEdit
                    onSubmitEditPost={onSubmitEditPost}
                    post={configModalPost.post}
                    ShowModalPostEdit={configModalPost.isShowModal}
                    onCloseModal={onCloseModalEditPost}
                    onDeletPost={onDeletPost}
                />

            </div>
        </div>
    );
}

export default Home;
