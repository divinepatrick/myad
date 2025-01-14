import React, { useState } from 'react';

const CreativeGenerator = () => {
  const [formData, setFormData] = useState({ title: '', description: '', audience: '' });
  const [generatedAd, setGeneratedAd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedAd('');

    try {
      const response = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate ad');
      }

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
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-100 to-blue-50">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        AI-Powered Ad Creative Generator
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl space-y-6"
      >
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Ad Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a catchy title..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Ad Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Write a compelling description..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="audience" className="block text-gray-700 font-semibold mb-2">
            Target Audience
          </label>
          <input
            type="text"
            id="audience"
            name="audience"
            placeholder="Define your target audience..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={formData.audience}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-lg text-white font-semibold ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Ad'}
        </button>
      </form>
      {generatedAd && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Generated Ad</h2>
          <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
            <pre className="text-gray-700 whitespace-pre-wrap">{generatedAd}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeGenerator;
