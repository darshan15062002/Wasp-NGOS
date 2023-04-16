import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Featured from "../../components/feature/Featured";
import { Link } from "react-router-dom";
import arrow from "../../img/arrow.png"
import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
const cardData = [
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
  {
    name: "Darshan",
    pimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    star: 5,
    title: "Micro Processor",

    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!",
  },
];

function Home() {

  const [services, setServices] = useState([])
  const [querys, setQuery] = useState('')
  console.log(querys);
  const { currentUser } = useContext(AuthContext)


  const handleSubmit = async () => {
    const q = query(collection(db, "services"), where("topic", "==", `${querys}`));

    const querySnapshot = await getDocs(q);
    const userDocs = [];
    querySnapshot.forEach((doc) => {


      userDocs.push(doc.data());


      // array of documents for all users

    })
    console.log(userDocs);
    setQuery("")
  }


  // useEffect(() => {
  //   const getServices = async () => {
  //     const q = query(collection(db, "services"), where("topic", "==", `${querys}`));

  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       const userDocs = [];
  //       querySnapshot.forEach((doc) => {
  //         userDocs.push(doc.data());
  //       });
  //       console.log(userDocs);
  //       // array of documents for all users
  //     })

  //     return () => {
  //       querySnapshot()
  //     }
  //   }
  //   getServices()

  // }, [])

  return (
    <div className="home">
      <Featured setQuery={setQuery} query={querys} handleSubmit={handleSubmit} />
      <div className="search_Result">
        <div className="container">
          {cardData.map((item, index) => (
            <div className="card">
              <img className="image" src={item.image} alt="darshan" />

              <div className="info">
                <h3>{item.title}</h3>
                <div className="info_name">
                  <img src={item.pimg} alt="" />
                  <h3>{item.name}</h3>
                </div>
                <p>{item.discription}</p>
              </div>
              <Link to={"/chating"} className="btn">
                Message
              </Link>
            </div>
          ))}

        </div>
      </div>
      {/* <button className="top" onClick={handleScrollToTop}>TOP</button> */}
    </div>
  );
}

export default Home;
