import React from 'react'
export default function NewsItem(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
          <img src={props.imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {props.title}....{" "}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {props.source}
              </span>
            </h5>
            <p className="card-text">{props.description}....</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By:{!props.author ? "Unknown" : props.author} <br></br>on {props.date}
              </small>
            </p>
            <a href={props.newsUrl} target="blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
    </div>
  )
}

