import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { collapseSideBar } from "../utils/features/appSlice";

const WatchPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    // serachParams returned by useSearchParams is a URLSearchParams - object. It's a browser's native object.
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(collapseSideBar())
    })

    return(
        <div className="px-8">
            <iframe 
                width="812" 
                height="457" 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default WatchPage