const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <button className="px-5 py-2 bg-blue-600 text-white rounded shadow">
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
