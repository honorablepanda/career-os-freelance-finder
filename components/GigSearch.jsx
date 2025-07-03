import React, { useState, useEffect } from "react";
import { useFreelanceFinder } from "../hooks/useFreelanceFinder";

export default function GigSearch() {
  const { gigs, searchGigs } = useFreelanceFinder();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(gigs);

  useEffect(() => {
    setFiltered(searchGigs(query));
  }, [query, gigs, searchGigs]);

  return (
    <div className="p-4 border rounded bg-gray-50" role="region" aria-labelledby="gig-search-title">
      <h2 id="gig-search-title" className="font-semibold mb-2">Search Gigs</h2>
      <input
        type="search"
        placeholder="Search by skill, keyword, or company"
        className="border p-2 rounded w-full mb-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search gigs"
      />
      <ul className="max-h-60 overflow-auto text-sm space-y-2" tabIndex={0}>
        {filtered.length === 0 && <li>No gigs found.</li>}
        {filtered.map((gig) => (
          <li key={gig.id} className="border-b pb-2">
            <div>
              <strong>{gig.title}</strong> — {gig.company}
            </div>
            <div className="text-gray-600 text-xs">Skills: {gig.skills.join(", ")}</div>
            <div className="text-gray-600 text-xs">Pay: ${gig.pay}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}