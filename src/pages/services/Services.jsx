import React, { useContext, useEffect, useRef, useState } from 'react'
import '../services/Services.scss'
import edit from '../../img/pencil.png'
import { db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { Timestamp, arrayUnion, doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { AuthContext } from '../../context/AuthContext'
import { v4 as uuid } from 'uuid'
const Services = () => {
    const formRef = useRef(null);
    const { currentUser } = useContext(AuthContext)
    const [img, setImg] = useState()
    const [services, setServices] = useState([])
    console.log(services);


    // fatch prve sevices
    useEffect(() => {
        const getServices = () => {
            const unsub = onSnapshot(doc(db, "services", currentUser.uid), (doc) => {
                setServices(doc.data()?.services)
            });

            return () => {
                unsub()
            }
        }
        currentUser && getServices()

    }, [])


    // const handleEdit = async (topic, description, photoURL, price, userId) => {


    //     formRef.current.topic.value = topic;
    //     formRef.current.description.value = description;
    //     formRef.current.price.value = price;






    // }




    const handleSubmit = async (e) => {
        e.preventDefault()

        const topic = e.target[0].value;
        const description = e.target[1].value;
        const price = e.target[2].value;
        const file = e.target[3].files[0];

        try {



            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${topic + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        const res = await getDoc(doc(db, "services", currentUser.uid));

                        if (!res.exists()) {
                            // create chat in chat collection
                            await setDoc(doc(db, "services", currentUser.uid), { services: [] });
                        }

                        //create user on firestore
                        await updateDoc(doc(db, "services", currentUser.uid), {
                            services: arrayUnion({
                                id: uuid(),
                                userId: currentUser.uid,
                                profileURL: currentUser.photoURL,
                                name: currentUser.displayName,
                                topic,
                                description,
                                price,
                                date: Timestamp.now(),
                                photoURL: downloadURL,
                            },)
                        }).then((data) => {
                            alert('Services is added succesfully')
                            e.target.reset();
                        })

                        //create empty user chats on firestore

                    } catch (err) {
                        console.log(err);

                    }
                });
            });

        } catch (err) {
            console.log(err);
        }
    };






    return (
        <div className='formContainer' style={{ height: '90vh' }}>
            <div className="formWrapper" style={{ display: 'flex', flexDirection: 'row', gap: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="logo">Tutors</span>
                    <span className="title">Create Service</span>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <input type="text" name='topic' placeholder='Topic' />
                        <input type="textarea" name='description' placeholder='Description' />
                        <input type="number" name='price' placeholder='Price' />
                        <input type="file" name='file' id='file' onChange={(e) => setImg(e.target.files[0])} />
                        <label htmlFor="file" style={{ display: 'flex', alignItems: 'center', gap: '5px' }} ><img src={img ? URL.createObjectURL(img) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} style={{ height: '120px', width: '100%' }} alt="" />
                        </label>






                        <button>Create </button>

                    </form>
                </div>


                <div className="right">

                    <h2>Previously added services</h2>
                    <div className="service-list">
                        {services?.map((item, index) => (


                            <div key={item.description} className="service-card">
                                <img src={item.photoURL} alt='' />
                                <div className="card-info">
                                    <h3>{item.topic}</h3>
                                    <p>{item.description}</p>
                                    <span> ₹{item.price} INR</span>
                                </div>
                                {/* <div className="edit" onClick={() => handleEdit(item.topic, item.description, item.photoURL, item.price, item.userId)}> */}
                                <div className="edit">
                                    <img src={edit} alt="" />
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services