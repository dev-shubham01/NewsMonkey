import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl } = this.props;
    // console.log('newURL',newUrl)
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newUrl} target="_blank" className="btn  btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
