import { useSelector } from "react-redux"

const SideBar = () => {
    const sideBarList = ["Home", "Shorts", "Sunscriptions", "Library", "History", "Watch Later", "Liked Videos"]
    const isSideBarOpen = useSelector(store => store?.app?.isSideBarOpen)

    return(
        (!isSideBarOpen) ? null : (
            <div className="px-8 border-r-2 mr-8 min-h-full">
                <ul>
                    {
                        sideBarList.map(item => {
                            return(
                                // <Link to="/" key={item}>{item}</Link>
                                <li key={item} className="font-semibold">{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    )
}

export default SideBar