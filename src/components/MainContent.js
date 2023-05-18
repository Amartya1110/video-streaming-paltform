import { Outlet } from "react-router-dom"
import FavouritesList from "./FavouritesList"


const MainContent = () => {
    return(
        <div>
            <FavouritesList />
            <Outlet />
        </div>
    )
}

export default MainContent