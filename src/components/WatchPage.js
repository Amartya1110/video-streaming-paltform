import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import comments from "../utils/commentsData";
import { collapseSideBar } from "../utils/features/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    // serachParams returned by useSearchParams is a URLSearchParams - object. It's a browser's native object.
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(collapseSideBar())
    })

    return(
        <div className="pl-8 max-w-[70%]">
            <div className="mb-10">
                <iframe 
                    className="w-full"
                    height="457" 
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <h1 className="text-2xl mb-6">Comments</h1>
                <CommentsContainer comments={comments} />
            </div>
        </div>
    )
}

export default WatchPage