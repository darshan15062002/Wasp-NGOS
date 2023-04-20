import React, { useRef, useState } from 'react'
import tutor from "../../img/tutor.png"
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_u96ktuk",
      "template_3dsy6sq",
      {
        from_name: form.name,
        to_name: "Cloudcore",
        from_email: form.email,
        to_email: "carnageitself@gmail.com",
        message: form.message,
      },
      "oiyK82ekyOKggogpg",
    ).then(() => {
      setLoading(false);
      alert("Thank you, I will get back to you ASAP !")
      setForm({
        name: "",
        email: "",
        message: "",
      })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  return (
    <div className="contact">
      <div className="left">
        <img src={tutor} alt="" />
      </div>
      <div className="right">
        <h1 className='head'>Contact</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <label>
            <span>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your Good Name?"

            />
          </label>
          <label >
            <span >Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email Address?"

            />
          </label>
          <label >
            <span >Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'

            />
          </label>

          <button
            type='submit'

          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact