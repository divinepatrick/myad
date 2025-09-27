import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
      <section className="max-w-5xl w-full mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About MyAd</h1>
        <p className="text-lg mb-6">
          My goal is to build tools that provide real value to marketers, entrepreneurs, and businesses. I believe in creating solutions that empower users to achieve more with less effort, leveraging technology to simplify complex tasks and drive meaningful results.
        </p>
        <p className="text-lg">
          Every tool I create is designed to be intuitive, effective, and genuinely helpful. Your feedback and ideas are always welcome!
        </p>
      </section>

  <section className="max-w-3xl w-full bg-transparent rounded-lg shadow-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Have questions, suggestions, or want to collaborate? Send me an email below:</p>
        <form action="mailto:your@email.com" method="POST" encType="text/plain" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="py-3 px-4 rounded bg-transparent text-white border border-textColor focus:outline-none focus:border-secondary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="py-3 px-4 rounded bg-transparent text-white border border-textColor focus:outline-none focus:border-secondary"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="py-3 px-4 rounded  text-white border focus:outline-none focus:border-secondary"
            required
          />
          <button
            type="submit"
            className="bg-button hover:bg-secondary text-white font-bold py-3 px-6 rounded"
          >
            Send Email
          </button>
        </form>
      </section>
    </div>
  )
}

export default About