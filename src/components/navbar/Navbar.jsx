import React, { useContext, useEffect, useState } from 'react'
import logo from "../../img/gallary.png"

import './Navbar.scss'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
function Navbar() {

    const [menu, setMenu] = useState(false)
    const [user, setUser] = useState({})
    console.log(user.isVolunteer
    );
    const { currentUser } = useContext(AuthContext)

    console.log(currentUser);


    const handleManu = async () => {
        setMenu(!menu)
        const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
            setUser(doc.data())
        });
        currentUser.uid && handleManu()
        return () => {
            unsub()
        }

    }



    // const currentUser = {
    //     id: 1,
    //     userName: 'Darshan',
    //     isSeller: true,
    // }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <div className={`navbar ${scrolled ? "transparent" : "background"}`}>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" className='logo-img' />
                    <Link to="/" className='link'>
                        <span className='text'>Tutors</span>
                    </Link>
                    <span className='dot' ></span>
                </div>
                <div className="links">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span>About</span>

                    {currentUser ? (
                        <div className="user" onClick={handleManu}>
                            <img src={currentUser.photoURL} alt="" />
                            <span>{currentUser?.displayName
                            }</span>
                            {menu && <div className="options">
                                {
                                    user?.isVolunteer && (
                                        <Link className="link" to="/services">
                                            Create Service
                                        </Link>
                                    )
                                }
                                <Link className="link" to="/chating">
                                    Messages
                                </Link>
                                <p className="link" to="/">
                                    <button onClick={() => signOut(auth)}>Logout</button>

                                </p>
                            </div>}
                        </div>) : <>     <Link to='/register' className='link'>Sign Up</Link></>}



                </div>
            </div>


        </div>
    )
}

export default Navbar