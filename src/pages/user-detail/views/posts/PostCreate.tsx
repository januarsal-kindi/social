import React , {useState} from 'react'

type PostCreate = {
    onSubmitCreatePost?: (title :string,body :string) => void
}


const PostCreate :React.FunctionComponent<PostCreate> = (props : PostCreate) => {
    const {onSubmitCreatePost} = props
    const [title,setTitle] = useState<string>("")
    const [body,setBody] = useState<string>("")


    const onHandleChangeForm = (type :string,value :string) => {
        if(type === "title"){
            setTitle(value)
        }
        if (type === "body"){
            setBody(value)
        }
    }
    const onSubmitForm = () => {
        if(onSubmitCreatePost){
            onSubmitCreatePost(title,body)
        }
    }

    return (
        <div>
            <div className="w-full text-left py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                <form className="bg-white rounded px-8  py-4 ">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Title
                         </label>
                        <input value={title} onChange={(e) => onHandleChangeForm('title',e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Body
                         </label>
                        <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        onChange={(e) => onHandleChangeForm('body',e.target.value)}
                        placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={onSubmitForm} className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                           Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostCreate
