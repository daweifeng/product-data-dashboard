import React from "react";
import "./style.css"

export const InfoBar = ({ title, subtitle, imgSrc, tags }) => {
  return (
    <div className="info-bar-content">
      <div className="info">
        <img className="product-img" src={imgSrc} alt="shark ninja" />
        <h2>{title}</h2>
        <div className="description">
          {subtitle}
        </div>
      </div>
      <div className="tags">
        {
          tags.map((t, index) => <Tag name={t} key={`${t}_${index}`}/>)
        }
      </div>
      <div className="menu">
        <div className="item">
          <i className="fas fa-home"></i>
          <span>OVERVIEW</span>
        </div>
        <div className="item active">
          <i className="fas fa-chart-bar"></i>
          <span>SALES</span>
        </div>
      </div>
    </div>
  )
}

const Tag = ({ name }) => {
  return (
    <div className="tag">
      { name }
    </div>
  )
}