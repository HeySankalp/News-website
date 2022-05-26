import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [Articles, setArticles] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const [Heading, setHeading] = useState('genearal')

    News.defaultProps = {
        category: 'general'

    }

    const updateNews = async () => {
        props.setProg(60);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=4e917df4c1a242c6a21fbac01d9ee635&page=${Page}&pagesize=9`;
        let data = await fetch(url);
        // props.setProgress();
        let dataParsed = await data.json()
        // props.setProgress(50);
        // console.log(dataParsed);
        setArticles(dataParsed.articles)
        settotalResults(dataParsed.totalResults)
        setLoading(false)
        setHeading(props.category)
        setHeading(props.category)
        props.setProg(100);
    }

  

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])


   const fetchMoreData = async () => {
       let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=4e917df4c1a242c6a21fbac01d9ee635&page=${Page + 1}&pagesize=9`;
       setPage(Page + 1 );
        let data = await fetch(url);
        let dataParsed = await data.json()
        // console.log(dataParsed);
        setTimeout(() => {
            setArticles(Articles.concat(dataParsed.articles))
            settotalResults(dataParsed.totalResults)
            setLoading(false)
        }, 500);
    };


    return (
        <>
            <div style={{ backgroundColor: "#dc3545", color: "white", borderRadius: "8px" }} className="container py-2 my-5">
                <h2 className="my-1">Top-Headlines <span style={{ float: "right" }} className="badge rounded-pill bg-light text-danger">{Heading}</span></h2>
            </div>
            {Loading && <Spinner />}
            <InfiniteScroll
                dataLength={Articles.length}
                next={fetchMoreData}
                hasMore={Articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container my-4">
                    <div className="row">
                        {Articles.map((element) => {
                            return <div className="col-md-4  my-2" key={element.url} >
                                <NewsItem time={element.publishedAt} title={element.title} description={element.content ? element.content.replace(/\W\s\[\W([0-9][0-9][0-9][0-9]|[0-9][0-9][0-9])\s[a-z][a-z][a-z][a-z][a-z]\]/g, "  ") : "Oops feed can't load click on read more to read"} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
            <div className="container my-3 d-flex justify-content-start">
                <a href="#top">
                    <button style={{ position: "fixed", bottom: "40px", borderRadius: "40px", boxShadow: "4px 4px 5px grey" }} type="button" className=" btn btn-dark my-4 py-2 ">Page Top</button>
                </a>
            </div>
        </>
    ) 
}
export default News