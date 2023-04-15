import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Featured from "../../components/feature/Featured";
import { Link } from "react-router-dom";
import arrow from "../../img/arrow.png"
import { doc, onSnapshot } from "firebase/firestore";
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
  const { currentUser } = useContext(AuthContext)
  console.log(services);

  useEffect(() => {
    const getServices = () => {

      // const unsub = db.collectionGroup('services').get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, " => ", doc.data());
      //   })
      // });
      const unsub = onSnapshot(doc(db, "services", currentUser.uid), (doc) => {
        setServices(doc.data().messages)
      });


      return () => {
        unsub()
      }
    }
    currentUser && getServices()

  }, [])

  return (
    <div className="home">
      <Featured />
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
