import React, { useState } from 'react'

import './Navbar.scss'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
function Navbar() {

    const [menu, setMenu] = useState(false)


    const currentUser = {
        id: 1,
        userName: 'darshan',
        isSeller: true,
    }

    return (

        <div className={"navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/" className='link'> */}
                    <span className='text'>Tutors</span>
                    {/* </Link> */}
                    <span className='dot' >.</span>
                </div>
                <div className="links">
                    <span>Home</span>
                    <span>Contact Us</span>
                    <span>About</span>
                    <span>Sign in</span>
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