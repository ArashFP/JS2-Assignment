import { useFormik } from "formik"
import { RegisterFormSchema } from "../../lib/Schemas"

const ContactForm = ({ className, errormsg, }) => {

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: RegisterFormSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)



  return (
    <div className={`text-black ${className}`}>
      <form onSubmit={form.handleSubmit} noValidate className="flex flex-col border-2 border-black rounded-3xl px-10 pb-10 pt-2 bg-blue-950 gap-2">
        <h1 className="text-white text-center underline font-bold text-2xl"> Contact Us</h1>
        <label id="name" htmlFor="text" className="text-white">Full Name:</label>
        <input id="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} type="text" className="rounded-lg px-2 py-1" placeholder="John Doe" />
        {form.errors.name && form.touched.name && (
          <div className="text-red-500">{form.errors.name}</div>
        )}

        <label id="email" htmlFor="email" className="text-white">Email:</label>
        <input id="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} type="email" className="rounded-lg px-2 py-1" placeholder="Example@email.com" />
        {form.errors.email && form.touched.email && (
          <div className="text-red-500">{form.errors.email}</div>
        )}

        <label id="message" htmlFor="message" className="text-white">Message:</label>
        <textarea id="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} type="text" style={{ height: '100px' }} className="rounded-lg px-2 py-1" placeholder="Write message here..." />
        {form.errors.message && form.touched.message && (
          <div className="text-red-500">{form.errors.message}</div>
        )}
        <button type="submit"  className="text-white bg-blue-700 rounded-xl mt-5 py-1 hover:bg-blue-600 hover:scale-105 transform transition duration-300">Send Message</button>


      </form>
    </div>
  )
}
export default ContactForm