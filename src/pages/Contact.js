import {useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    emailjs.sendForm('service_fv2h62r', 'template_1o5cg3r', form.current, 'user_7d3wuOeWtOQ0Uch7I2HXq')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    
    e.target.reset()
  }
  return (
    <section className="contact" id='contact'>
      <h1>Let's chat!</h1>
      <p>Have a question or want to work together? Send me an email and I'll get back to you shortly.</p>
      <div className='form-container'>
        <form ref={form} onSubmit={handleSubmit} name="contact">
          <div >
            <label htmlFor="name">
              Name
            </label>
            <textarea 
              className="input"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div >
            <label htmlFor="email">
              Email
            </label>
            <textarea 
              className="input"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact