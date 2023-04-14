import React from "react";
import "./Featured.scss";
import search from '../../img/search.png'

function Featured() {
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
                            <input type="text" placeholder='Search Topic Here.....' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;