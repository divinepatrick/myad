import React from 'react';

// Component to format AI response for display
const FormatAIResponse = ({ text }) => {
  if (!text) return null;

  const paragraphs = text.split('\n\n');
  return paragraphs.map((paragraph, index) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
    return (
      <div key={index} className="mb-4 last:mb-0">
        {parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={partIndex} className="font-semibold text-gray-800">
                {part.slice(2, -2)}
              </strong>
            );
          } else if (part.trim()) {
            const lines = part.split('\n');
            return lines.map((line, lineIndex) => {
              if (line.startsWith('- ')) {
                return (
                  <div key={`${partIndex}-${lineIndex}`} className="ml-4 mb-1 text-gray-700">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 align-middle"></span>
                    {line.slice(2)}
                  </div>
                );
              }
              return line.trim() ? (
                <div key={`${partIndex}-${lineIndex}`} className="text-gray-700 leading-relaxed">
                  {line}
                </div>
              ) : null;
            });
          }
          return null;
        })}
      </div>
    );
  });
};

export default FormatAIResponse;