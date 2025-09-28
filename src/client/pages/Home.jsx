import React, { useState } from 'react';
import { FiFileText } from "react-icons/fi";
import FormatAIResponse from '../components/FormatAIResponse';

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
      <section className="text-white flex items-center min-h-[calc(100vh-100px)] justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-4 " style={{ fontFamily: "'Noto Serif Display', serif" }}>Start Creating Winning Ads!</h1>
          <p className="text-xl mb-8 "><span>Struggling with ad copy? This Tool generates high-performing ads instantly.</span> 
          <br />
          <span>Designed for marketers at every level.</span> 
          </p>
          <div className="flex justify-center">
          <button className="bg-button text-buttonText  text-xl py-2 px-4 border border-secondary rounded-2xl flex items-center gap-2">
            <span>Create Ad</span>
            <FiFileText size={22} />
          </button>
          </div>
        </div>
      </section>



      {/* Email Subject Line Maker Form */}
      <section id="emailSubjectGen" className="py min-h-fit">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white font-bold mb-4">Email Subject Line Maker</h2>
          <form
            id="chat-form"
            className="flex flex-col sm:flex-row items-center justify-center mx-auto w-full sm:w-3/4 lg:w-2/3 px-10 py-6"
            onSubmit={handleSubmit}
          >
            <input
              id="user-input"
              type="search"
              placeholder="Input your email content..."
              className="w-full sm:w-2/3 py-3 px-5 border border-button placeholder-white rounded-2xl mb-4 sm:mb-0 sm:mr-4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-button text-buttonText text-xl py-2 px-4 border border-secondary rounded-2xl flex items-center gap-2"
            >
              Create
            </button>
          </form>
          {response && (
            <div className="mt-10 bg-white p-8 rounded-lg shadow-md w-full mx-auto">
              <h2 className="text-3xl font-bold mb-6">Response</h2>
              <div className="max-h-64 overflow-y-auto">
              <FormatAIResponse text={response} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Vision</h2>
          <p className="text-lg mb-8">
          Building Tools That truly Maximise Efforts.
          </p>
          <div className="flex justify-center">
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Simplicity </h3>
              <p>emphasizing intuitive design and seamless functionality.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Flexibility </h3>
              <p>Building tools that remain relevant and valuable over time.</p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-2">Efficiency</h3>
              <p>Building to reduce manual effort and enabling users to focus on high-priority tasks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;