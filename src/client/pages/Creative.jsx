import React, { useState } from 'react';
import FormatAIResponse from '../components/FormatAIResponse';

const CreativeGenerator = () => {
  const [formData, setFormData] = useState({ title: '', description: '', audience: '' });
  const [generatedAd, setGeneratedAd] = useState('');
  const [loading, setLoading] = useState(false);

  // input changes and update formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // API request
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    setLoading(true); // Set loading state to true
    setGeneratedAd(''); // Clear previous generated ad content

    try {
      // Sending data to backend API for ad generation
      const response = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Throw error if response is not OK
      if (!response.ok) {
        throw new Error('Failed to generate ad');
      }

      // Parse JSON response
      const data = await response.json();
      setGeneratedAd(data.adContent);
    } catch (error) {
      console.error(error);
      setGeneratedAd('Error generating ad. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='shadow-2xl m-auto'>
      <h1 className="text-base md:text-4xl font-extrabold text-white mb-8 text-center">
          AI-Powered Ad Creative Generator
        </h1>
    </div>
    <div className="grid sm:grid-cols-2 gap-4 items-center justify-center p-8 ">
      <div className=''>
        

        {/* Form for user input */}
        <form
          onSubmit={handleSubmit}
          className="bg-transparent shadow-2xl rounded-lg p-6 w-full max-w-3xl space-y-6"
        >
          <div>
            <label htmlFor="title" className=" text-white font-semibold mb-2">
              Ad Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a catchy title..."
              className="w-full border placeholder-white text-white border-textColor rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-hidden"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input field for ad description */}
          <div>
            <label htmlFor="description" className=" text-white font-semibold mb-2">
              Ad Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Write a compelling description..."
              className="w-full border placeholder-white text-white border-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-hidden"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Input field for target audience */}
          <div>
            <label htmlFor="audience" className=" text-white font-semibold mb-2">
              Target Audience
            </label>
            <input
              type="text"
              id="audience"
              name="audience"
              placeholder="Define your target audience..."
              className="w-full placeholder-white text-white border border-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-hidden"
              value={formData.audience}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-4xl text-white font-semibold ${loading ? 'bg-button cursor-not-allowed' : 'bg-button hover:bg-secondary'
              }`}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Ad'}
          </button>
        </form>
      </div>

      {/* Display generated ad if available */}
      {generatedAd && (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
            Generated Ad Content
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg max-h-96 overflow-y-auto">
            <div className="prose prose-gray max-w-none">
              <FormatAIResponse text={generatedAd} />
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CreativeGenerator;
