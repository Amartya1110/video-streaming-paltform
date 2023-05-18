import { useEffect, useState } from "react"
import { YOUTUBE_API_URL } from "../constants.js"
import VideoCard from "./VideoCard.js"

const VideoContainer = () => {
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        getVideosData();
    }, [])


    async function getVideosData() {
        // console.log(YOUTUBE_API_URL)
        const responseObj = await fetch(YOUTUBE_API_URL)
        const jsonData = await responseObj.json()
        // console.log(jsonData?.items)
        setVideoList(jsonData?.items)
        
    }

    return(
        <div className="flex flex-wrap">
            {
                videoList.map(video => <VideoCard key={video?.id} {...video} />)
            }
        </div>
    )
}

export default VideoContainer