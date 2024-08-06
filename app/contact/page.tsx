const Contact = ()=>{
    return(
        <section className="w-full min-h-screen bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-center text-3xl font-bold mb-8">CONTACT ME</h1>
    <div className="flex justify-center items-center">
      <div className="text-center w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Names"
              required
              className="flex-1 block w-full border border-gray-600 rounded-md px-4 py-2 bg-blue-300 text-black placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 block w-full border border-gray-600 rounded-md px-4 py-2 bg-blue-300 text-black placeholder-gray-400"
            />
          </div>
          <textarea
            rows={8}
            placeholder="Message"
            required
            className="block w-full border border-gray-600 rounded-md px-4 py-2 bg-blue-300 text-black placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded-md hover:bg-gray-500 text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}
export default Contact;