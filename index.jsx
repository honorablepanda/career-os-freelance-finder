import React from "react";
import GigSearch from "./components/GigSearch";
import SavedGigs from "./components/SavedGigs";
import GigSuggestion from "./components/GigSuggestion";

export default function FreelanceFinder() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">💼 Freelance & Side Gig Finder</h1>
      <GigSearch />
      <SavedGigs />
      <GigSuggestion />
    </div>
  );
}
