import React, { useState, useEffect } from "react";
import { useFreelanceFinder } from "../hooks/useFreelanceFinder";

export default function SavedGigs() {
  const { savedGigs, removeSavedGig } = useFreelanceFinder();
  const [localSaved, setLocalSaved] = useState([]);

  useEffect(() => {
    setLocalSaved(savedGigs);
  }, [savedGigs]);

  return (
    <div className="p-4 border rounded bg-yellow-50" role="region" aria-labelledby="saved-gigs-title">
      <h2 id="saved-gigs-title" className="font-semibold mb-2">Saved Gigs</h2>
      {localSaved.length === 0 ? (
        <div className="text-sm text-gray-600">You have no saved gigs.</div>
      ) : (
        <ul className="space-y-2 text-sm max-h-48 overflow-auto" tabIndex={0}>
          {localSaved.map((gig) => (
            <li key={gig.id} className="border-b pb-2 flex justify-between items-center">
              <div>
                <strong>{gig.title}</strong> — {gig.company}
              </div>
              <button
                onClick={() => removeSavedGig(gig.id)}
                className="text-red-600 hover:underline"
                aria-label={`Remove saved gig ${gig.title}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
