import React, { useEffect, useState } from 'react'
import logo from "../../img/gallary.png"

import './Navbar.scss'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
function Navbar() {

    const [menu, setMenu] = useState(false)


    const currentUser = {
        id: 1,
        userName: 'Darshan',
        isSeller: true,
    }

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
                    {/* <Link to="/" className='link'> */}
                    <span className='text'>Tutors</span>
                    {/* </Link> */}
                    <span className='dot' ></span>
                </div>
                <div className="links">
                    <span>Home</span>
                    <span>Contact</span>
                    <span>About</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setMenu(!menu)}>
                            <img src="https://pps.whatsapp.net/v/t61.24694-24/312248467_237228451996318_6104864477789700214_n.jpg?ccb=11-4&oh=01_AdT4fStubsKRAFw9jqcRWHmpA9ag1AivY82IfY_JldtLng&oe=6427F3BD" alt="" />
                            <span>{currentUser?.userName}</span>
                            {menu && <div className="options">
                                {currentUser?.isSeller && (<>
                                    <p className="link" to="/mygigs">
                                        Gigs
                                    </p>
                                    <p className="link" to="/add">
                                        Add New Gig
                                    </p>
                                </>
                                )}
                                <p className="link" to="/orders">
                                    Orders
                                </p>
                                <p className="link" to="/messages">
                                    Messages
                                </p>
                                <p className="link" to="/">
                                    <button onClick={() => signOut(auth)}>Logout</button>

                                </p>
                            </div>}
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Navbar