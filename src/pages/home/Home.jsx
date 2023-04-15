import React from "react";
import "./Home.scss";
import Featured from "../../components/feature/Featured";
import { Link, useNavigation } from "react-router-dom";
const cardData = [{
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
},
{
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
}, {
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
}, {
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
}, {
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
}, {
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
}, {
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
},
{
  name: 'Darshan',
  pimg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
  star: 5,
  title: 'Micro Processor',

  discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia maxime corrupti!'
},]



function Home() {
  const navigate = useNavigation()
  return (
    <div className="home">
      <Featured />
      <div className="search_Result">

        <div className="container">

          {
            cardData.map((item, index) => (
              <div className="card" onClick={() => navigate('/chating')}>

                <img className="image" src={item.image} alt="darshan" />


                <div className="info"><h3>{item.title}</h3>
                  <div className="info_name">
                    <img src={item.pimg} alt="" /><h3>{item.name}</h3>
                  </div>
                  <p>{item.discription}</p>


                </div>
                <Link to={'/chating'} className="btn">Message</Link>

              </div>
            ))
          }

        </div>
      </div>



    </div>
  );
}

export default Home;