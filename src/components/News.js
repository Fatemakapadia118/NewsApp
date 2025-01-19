import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)   
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0) 
  const updateNews=async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=656cc1f4c40542d4a5fc699458c7350f&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setLoading(false)
    setPage(page)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(() => {
    document.title = props.category;
    updateNews();
  }, [page, props.category]);
  
  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonKey-Top Headlines {props.category}</h2>
        {loading && <Spinner />}
        <div className='row'>
          {articles && articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 45) : ""}  
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage}
                  newsUrl={element.url} 
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps = {
  pageSize: 8,
  country: 'us',
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
export default News
