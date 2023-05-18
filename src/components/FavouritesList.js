const FavouritesList = () => {
    const favouritesList = ["All", "Music", "Gaming", "Podcasts", "Live", "Technologies", "Programming", "Movies", "Anime", "Exercise", "Marvel", "DSA"]
    return(
        <div>
            <ul className="flex">
                {
                    favouritesList.map(favItem => {
                        return (<li key={favItem}><button className="px-4 py-1 rounded-md bg-gray-100 mx-2 mb-8 hover:bg-gray-200">{favItem}</button></li>)
                    })
                }
            </ul>
        </div>
    )
}

export default FavouritesList