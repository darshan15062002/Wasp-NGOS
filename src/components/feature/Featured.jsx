import React from "react";
import "./Featured.scss";
import featured from '../../img/feature.png'
import search from '../../img/search.png'

function Featured({
    handleSubmit,
    querys,
    setQuery
}) {




    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>
                        Empowering Students to Excel Through Comprehensive Resources and Guidance
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src={search} alt="" />
                            <input type="text" style={{ width: '300px' }} placeholder="What service are you looking for today ?" value={querys} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <button onClick={handleSubmit}>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>JavaScript</button>
                        <button>Python</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src={featured} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;