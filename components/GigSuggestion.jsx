import React, { useState } from "react";
import { useFreelanceFinder } from "../hooks/useFreelanceFinder";

export default function GigSuggestion() {
  const { suggestGigs, loading } = useFreelanceFinder();
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggest = async () => {
    const results = await suggestGigs();
    setSuggestions(results);
  };

  return (
    <div className="p-4 border rounded bg-blue-50" role="region" aria-labelledby="gig-suggestion-title">
      <h2 id="gig-suggestion-title" className="font-semibold mb-2">AI Gig Suggestions</h2>
      <button
        onClick={handleSuggest}
        disabled={loading}
        className="bg-blue-700 text-white px-3 py-1 rounded"
      >
        {loading ? "Loading..." : "Suggest Gigs"}
      </button>
      <ul className="mt-3 list-disc list-inside text-sm max-h-48 overflow-auto">
        {suggestions.map((gig, i) => (
          <li key={i}>{gig}</li>
        ))}
      </ul>
    </div>
  );
}