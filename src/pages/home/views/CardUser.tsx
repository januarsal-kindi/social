import React from 'react'
import { User as userType } from "@store/types/user.types"
interface UserItemProps {
    user: userType,
    onClickCard: (id: string) => void
}

const UserItem: React.FunctionComponent<UserItemProps> = (props: UserItemProps) => {
    const { user, onClickCard } = props
    return (
        <div onClick={(e) => onClickCard(user.id)} className="cursor-pointer relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                {user.name ? (<h1 className="text-xl text-bold">{user.name?.split(" ").map((n) => n[0]).join("").toUpperCase()}</h1>) : ('sad')}

            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">{user.name}</p>
                <div className="flex space-x-2 text-gray-400 text-sm">

                    <p>{user.company.name}</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">

                    <p>{user.website}</p>
                </div>
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">User Name</p>
                        <div className="flex space-x-2">
                            {user.username}
                        </div>
                    </div>
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">city</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>
                                {user.address.city}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem