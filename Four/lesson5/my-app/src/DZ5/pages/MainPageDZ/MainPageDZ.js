import React,{useState} from "react";
import News from "../../components/news/NewsDZ";
function MainPageDZ (){
    const [news, setNews] = useState([])
    const getNews = (e) => {
        e.preventDefault()
        setNews(['War','Ukraine','Russia','Who win?'])
    }
    return(
        <>
            <h2>Main Page</h2>
            <News propNews={news} getNewsProps={getNews}/>
        </>
    )
}

export default MainPageDZ