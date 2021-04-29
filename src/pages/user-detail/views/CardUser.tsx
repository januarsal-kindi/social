import React from 'react'
import { User as userType } from "@store/types/user.types"
interface UserItemProps {
    user: userType,
    onClickCard?: (id: string) => void
}

const UserItem: React.FunctionComponent<UserItemProps> = (props: UserItemProps) => {
    const { user, onClickCard } = props
    return (
        <div onClick={(e) => { onClickCard && (onClickCard(user.id)) }} className="cursor-pointer relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                {user.name ? (<h1 className="text-3xl text-bold">{user.name?.split(" ").map((n) => n[0]).join("").toUpperCase()}</h1>) : ('sad')}
            </div>
            <div className="mt-8">
                <div className="flex space-x-2 text-gray-400 text-sm">
                    <p className="text-2xl font-semibold my-2">{user.name}</p>
                </div>
                <div className=" text-2xl flex space-x-2 text-gray-400 text-sm">
                    <p>{user.company.name}  |  @{user.username}</p>
                </div>
                <div className="flex text-xl space-x-2 text-gray-400 text-sm my-3">

                    <p>{user.website}</p>
                </div>
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2 text-left">Address</p>
                        <div className="flex space-x-2">
                            {user.address.street} ,  {user.address.suite} , {user.address.city} , {user.address.zipcode}
                        </div>
                    </div>
                    <div className="my-2">
                    <p className="font-semibold text-base mb-2 text-right">Company</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>
                                {user.company.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UserItem)