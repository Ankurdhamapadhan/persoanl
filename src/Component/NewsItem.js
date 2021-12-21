import React from "react";

const  NewsItem =(props)=> {
    let { title, description, imageUrl, newsurl, date, author, source} = props;
    return (

      <div className="my-3">
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:"0",
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://s.yimg.com/os/creatr-uploaded-images/2021-10/4d0e1b40-32f1-11ec-99eb-57977b25e4bd"
            }
            className="card-img-top"
            alt="..."
            height="150px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "25px" }}>
              {title}{"..."}
            </h5>
            <p className="card-text" style={{ fontSize: "15px" }}>
              {" "}
              {description}{"..."}
            </p>
            <p className="card-text"><small className="text-muted">by {!author ? "Unknow" : author} on {date}</small></p>
            <a
              rel="noreferrer"
              href={newsurl ? newsurl : "https://getbootstrap.com/"}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
