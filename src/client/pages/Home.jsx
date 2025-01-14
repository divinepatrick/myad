import React, { useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await apiResponse.json();
      if (data.success) {
        setResponse(data.response);
      } else {
        setResponse(data.message);
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setResponse('An error occurred while processing your query.');
    }
  };

  return (
    <div>
      {/* Jumbotron Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Stop Guessing, Start Generating!</h1>
          <p className="text-xl mb-8">Struggling with ad copy? Our AI generates high-performing ads instantly. Designed for all marketers, no matter their experience level.</p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded">Learn More</button>
        </div>
      </section>



      {/* AI Search Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">AI Marketing Search</h2>
          <form
            id="chat-form"
            className="flex flex-col sm:flex-row items-center justify-center mx-auto w-full sm:w-3/4 lg:w-2/3 px-10 py-6"
            onSubmit={handleSubmit}
          >
            <input
              id="user-input"
              type="search"
              placeholder="Ask me anything..."
              className="w-full sm:w-2/3 py-3 px-5 border rounded mb-4 sm:mb-0 sm:mr-4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded"
            >
              Search
            </button>
          </form>
          {response && (
            <div className="mt-10 bg-white p-8 rounded-lg shadow-md w-full mx-auto">
              <h2 className="text-3xl font-bold mb-6">Response</h2>
              <div className="max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap">{response}</pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg mb-8">
          Empowering individuals and businesses with cutting-edge AI tools to achieve their goals effortlessly.
          </p>
          <div className="flex justify-center">
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p>Pioneering new technologies to simplify and amplify your success.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p>Building trust through transparency, honesty, and responsibility.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
              <p>Delivering unparalleled quality and value in every interaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;