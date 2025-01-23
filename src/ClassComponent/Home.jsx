import React, { Component } from "react";
import NewsArticls from "./NewsArticls";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    };
  }
  async getApiData() {
    let data = await fetch(` https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&sortBy=publishedAt&apiKey=f7520d054fc047cfbb8cae313795cebf`);
    data = await data.json();
    this.setState({
      articles: data.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: data.totalResults,
    });
  }
  
  fetchData = async()=>{
    this.setState({page:this.state.page+1})
    let data = await fetch(` https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&sortBy=publishedAt&apiKey=f7520d054fc047cfbb8cae313795cebf`);
    data = await data.json();
    this.setState({
      articles: this.state.articles.concat(data.articles.filter((x) => x.title !== "[Removed]")),
    });
  }

  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getApiData();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h5 className="background text-center p-2 my-2 text-capitalize">
          {this.props.search ? this.props.search : this.props.q} News Articles
        </h5>
        <InfiniteScroll className="scroller-component"
          dataLength={this.state.articles.length} 
          next={this.fetchData}
          hasMore={this.state.articles.length<this.state.totalResults}
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
            {this.state.articles.map((item, index) => {
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
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
