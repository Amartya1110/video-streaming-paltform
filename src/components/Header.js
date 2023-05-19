import { toggle } from "../utils/features/appSlice"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestionList, setSuggestionList] = useState([])
    const dispatch = useDispatch()
    function toggleSideBar() {
        dispatch(toggle())
    }

    useEffect(() => {
        const timerID = setTimeout(() => {
            getSuggestionList()
        },200)
        // console.log(timerID)

        return(() => {
            // console.log("return func in useEffect")
            clearTimeout(timerID)
        })

    }, [searchQuery])

    async function getSuggestionList() {
        const responseObj = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&q=" + searchQuery)
        const jsonData = await responseObj.json()
        setSuggestionList(jsonData[1])
    }

    return(
        <div className="flex items-center p-5">
            <div className="flex items-center ml-4">
                <button onClick={() => {toggleSideBar()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <a href="/" className="flex items-center">
                    <img alt="logo" className="h-12 ml-6" src="https://www.quelmastermarketing.fr/wp-content/uploads/2020/10/youtube-logo-1024x1024.png" />
                    <h1 className="font-bold text-lg">UTube</h1>
                </a>

            </div>
            <div className="w-5/6 relative">
                <div className="w-full flex justify-center items-center">
                    <input 
                        className="border-2 rounded-l-full px-6 py-2 w-1/2" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value)}}
                    />
                    <button className="bg-gray-100 hover:bg-gray-200 border-2 rounded-r-full px-4 py-2 w-1/12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                {
                    (suggestionList?.length === 0) ? null : (
                        <div className="mt-2 w-7/12 absolute left-1/2 -translate-x-2/4 bg-white py-3 rounded-lg">
                            {
                                suggestionList?.map(suggestion => {
                                    return(
                                        <div key={suggestion}>
                                            <h1 className="hover:bg-gray-100 w-full py-2 px-4">{suggestion}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
            <div>
                <svg className="inline-block h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="#525a59" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>
    )
}

export default Header