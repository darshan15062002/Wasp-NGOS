import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Featured from "../../components/feature/Featured";
import { Link } from "react-router-dom";

import { collection, collectionGroup, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";



function Home() {


  const [filterdata, setFilterData] = useState([])

  const [querys, setQuery] = useState('')
  const [services, setServices] = useState([])
  console.log(services);

  // console.log("searchdata", services);
  const handleSubmit = async () => {


    setServices(filterdata.filter((doc) => {
      return doc.topic?.toLowerCase() === querys.toLowerCase();
      // comparing category for displaying data
    }))




  }










  useEffect(() => {
    const getServices = async () => {
      const q = query(collection(db, "services"));

      const querySnapshot = await getDocs(q);

      var userDocs = [];
      querySnapshot.forEach((doc) => {


        userDocs.push(doc.data().services);


        // array of documents for all users

      })
      console.log(userDocs.flat());
      setFilterData(userDocs.flat())





      return () => {
        querySnapshot()
      }
    }
    getServices()

  }, [])


  return (
    <div className="home">
      <Featured handleSubmit={handleSubmit} querys={querys} setQuery={setQuery} />
      <div className="search_Result">
        <h1>Our Services</h1>
        <div className="container">



          {services && services.map((item, index) => (


            <div className="card" key={item?.description}>

              <img className="image" src={item?.photoURL} alt="darshan" />

              <div className="info">
                <div className="info_name">
                  <img src={item?.profileURL} alt="" />
                  <h3>{item?.name}</h3>
                </div>
                <h3>{item?.topic}</h3>

                <p>{item?.description}</p>
              </div>
              <div className="button">
                <Link to={"/chating"} className="btn">
                  Message
                </Link>
              </div>

            </div>
          ))
          }

          {services.length === 0 && filterdata?.map((item, index) => (


            <div className="card" key={item?.description}>

              <img className="image" src={item?.photoURL} alt="darshan" />

              <div className="info">
                <div className="info_name">
                  <img src={item?.profileURL} alt="" />
                  <h3>{item?.name}</h3>
                </div>
                <h3>{item?.topic}</h3>

                <p>{item?.description}</p>
              </div>
              <div className="button">
                <Link to={"/chating"} className="btn">
                  Message
                </Link>
              </div>

            </div>
          ))
          }


        </div>
      </div>
      {/* <button className="top" onClick={handleScrollToTop}>TOP</button> */}
    </div>
  );
}

export default Home;
