import React from 'react'

const NewsItem = (props)=> {
        
    let { title, description, imageUrl, newsUrl, time } = props;
        
        return (
            <div className="container">
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://picsum.photos/200/120/?blur"} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ backgroundColor: '#e9e9e9' }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}<a style={{ color: "red" }} target="framename" href={newsUrl}> [readMore]<br /></a><small style={{color:"#999999"}}>{time}</small></p>

                    </div>

                </div>
            </div>
        )

}
 export default NewsItem