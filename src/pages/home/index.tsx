import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userList as getUser } from "@store/selector/user";
import { getuserList } from "../../store/actions/user";
import CardUser from "./views/CardUser";
import CardUserLoading from "./views/CardUserLoading";
import { useHistory } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userList = useSelector(getUser);
  const [paramsUser, setParamUser] = useState<{ page: number, limit: number }>({
    page: 1,
    limit: 12
  })

  const onLoadMore = () => {
    const temParams = { ...paramsUser }
    setParamUser({
      page: temParams.page + 1,
      limit: temParams.limit
    })
    dispatch(getuserList(temParams.page, temParams.limit))

  }

  const onClickCard = (id : string) => {
    history.push(`user/${id}`)
  }
  useEffect(() => {
    dispatch(getuserList(paramsUser.page, paramsUser.limit))
  }, [])
  return (
    <div className="w-full max-w-8xl mx-auto my-20">
      {/* <div className="flex items-center justify-center"> */}
      <div className="grid grid-cols-4 auto-cols-max gap-6">
        
        {!userList.loading && userList.list.length > 0 && (
          userList.list.map((user, index) =>
            (<CardUser user={user} onClickCard={onClickCard} key={index} />)
          )
        )}
        {userList.loading && (
          <>
            <CardUserLoading />
            <CardUserLoading />
            <CardUserLoading />
            <CardUserLoading />
          </>
        )}
      </div>
      {/* </div> */}
      <div className=" w-full flex justify-center mt-10">
        <button onClick={onLoadMore} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Home;
