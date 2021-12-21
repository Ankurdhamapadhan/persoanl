import React, { useEffect, useState } from "react";

import Loder from "./Loder";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [artical, setartical] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [toatlResult, settoatlResult] = useState(0)

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    props.setProgress(50)
    let data = await fetch(url);
    let pd = await data.json();
    // console.log(pd);
    props.setProgress(80)
    setartical(pd.articles)
    settoatlResult(pd.totalResults)
    setloading(false)
    // this.setState({
    //   artical: pd.articles,
    //   totalResults: pd.totalResults,
    //   loading: false,
    // });
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${Capitalize(props.category)} - NewsMonkey`
    updateNews()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    setloading(true)
    let data = await fetch(url);
    let pd = await data.json();
    // console.log(pd);
    setartical(artical.concat(pd.articles))
    settoatlResult(pd.totalResults)
    setloading(false)
  };
  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {Capitalize(props.category)} Headlines</h1>
      {loading && <Loder />}
      <InfiniteScroll
        dataLength={artical.length}
        next={fetchMoreData}
        hasMore={artical.length !== toatlResult}
        loader={<Loder />}
      >
        <div className="container">
          <div className="row">
            {artical.map((element) => {
              // console.log(element);
              return (
                <div className="col-md-3">
                  <NewsItem
                    key={element.source.id}
                    title={element.title ? element.title.slice(0, 50) : " West Indies vs Bangladesh T20 World Cup Live Score Online, WI vs BAN Cricket Score Streaming Online Updates:"}
                    description={
                      element.description ? element.description.slice(0, 100) : " West Indies vs Bangladesh T20 World Cup Live Score Online, WI vs BAN Live Cricket Score Streaming Online Updates:"
                    }
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                    date={new Date(element.publishedAt).toGMTString()}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>

              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "genral",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string
};

export default News;
