// import formik from "formik"

const ContactForm = ({ className }) => {
  return (
    <div className={`text-black ${className}`}>
      <form className="flex flex-col border-2 border-black rounded-3xl px-10 pb-10 pt-2 bg-blue-950 gap-2">
        <h1 className="text-white text-center underline font-bold text-2xl"> Contact Us</h1>
        <label id="fullName"  htmlFor="text" className="text-white">Full Name:</label>
        <input id="fullName" type="text" className="rounded-lg px-2 py-1" placeholder="John Doe" />
        <label id="email" htmlFor="email" className="text-white">Email:</label>
        <input id="email" type="email" className="rounded-lg px-2 py-1" placeholder="Example@email.com" />
        <label id="message" htmlFor="message" className="text-white">Message:</label>
        <textarea id="message" type="text" style={{ height: '100px' }} className="rounded-lg px-2 py-1" placeholder="Write message here..." />
        <button className="text-white bg-blue-700 rounded-xl mt-2 py-1">Send Message</button>
      </form>
    </div>
  )
}
export default ContactForm