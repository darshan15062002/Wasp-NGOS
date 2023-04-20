import Navbar from './components/navbar/Navbar'
import './App.scss'
import '../src/styles.scss'
import Login from './pages/Login'
import Register from './pages/Register'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Home from './pages/home/Home';

import Chating from './pages/chating/Chating.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Services from './pages/services/Services'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    return <Navigate to='/login' />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chating",
        element: <ProtectedRoute><Chating /></ProtectedRoute>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      }, {
        path: "/contact",
        element: <Contact />,
      },

      // {
      //   path: "/message/:id",
      //   element: <Message />,
      // },
      // {
      //   path: "/add",
      //   element: <Add />,
      // },
      // {
      //   path: "/gig/:id",
      //   element: <Gig />,
      // },

    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/volunteer-register",
  //   element: <Volunteer />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
