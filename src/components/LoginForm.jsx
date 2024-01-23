import { useFormik } from 'formik'

const LoginForm = () => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <form onSubmit={form.handleSubmit} className="mt-2 mr-2">
      <div className="mb-4 flex justify-between">
        <label htmlFor="email" id="email" className="w-1/3" >Email: </label>
        <input type="text" id="email" value={form.values.email} onChange={form.handleChange} className="border-2 rounded-lg w-2/3 text-black" />
      </div>
      <div className="mb-4 flex justify-between">
        <label htmlFor="password" id="password" className="w-1/3" >Password: </label>
        <input type="text" id="password" value={form.values.password} onChange={form.handleChange} className="border-2 rounded-lg w-2/3 text-black" />
      </div>
      <button className="bg-blue-700 hover:bg-white hover:text-orange-600 transition-colors duration-200 mb-3 rounded-lg px-2" type='submit'>Log in</button>
    </form>
  )
}
export default LoginForm