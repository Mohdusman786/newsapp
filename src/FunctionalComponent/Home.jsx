import React, { useEffect, useState } from "react";
import NewsArticls from "./NewsArticls";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props){
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)

  async function getApiData() {
    let data = await fetch(` https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=12&page=${page}&language=${props.language}&sortBy=publishedAt&apiKey=f7520d054fc047cfbb8cae313795cebf`);
    data = await data.json();
    setArticles(data.articles.filter((x) => x.title !== "[Removed]"))
    setTotalResults(data.totalResults)
  }
  async function fetchData(){
    setPage(page+1)
    let data = await fetch(` https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=12&page=${page}&language=${props.language}&sortBy=publishedAt&apiKey=f7520d054fc047cfbb8cae313795cebf`);
    data = await data.json();
    setArticles(articles.concat(data.articles.filter((x) => x.title !== "[Removed]")))
  }
  useEffect(()=>{
    getApiData()
  },[props])
    return (
      <div className="container-fluid">
        <h5 className="background text-center p-2 my-2 text-capitalize">
          {props.search ? props.search : props.q} News Articles
        </h5>
        <InfiniteScroll className="scroller-component"
          dataLength={articles.length} 
          next={fetchData}
          hasMore={articles.length<totalResults}
          loader={<div className="text-center">
            <div className="spinner-border m-5" role="status">
            <span className="sr-only"></span>
            </div>
          </div>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>no-more articles</b>
            </p>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                >
                  <NewsArticls
                    title={item.title}
                    source={item.source.name}
                    date={item.publishedAt}
                    pic={item.urlToImage}
                    description={item.description}
                    url={item.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
}
