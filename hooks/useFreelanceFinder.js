import { useState, useCallback } from "react";
import { mockGigs, mockSavedGigs } from "../mock/mockFreelanceData";

export const useFreelanceFinder = () => {
  const [gigs, setGigs] = useState(mockGigs);
  const [savedGigs, setSavedGigs] = useState(mockSavedGigs);
  const [loading, setLoading] = useState(false);

  const searchGigs = useCallback(
    (query) => {
      if (!query.trim()) return gigs;
      const lowerQuery = query.toLowerCase();
      return gigs.filter(
        (g) =>
          g.title.toLowerCase().includes(lowerQuery) ||
          g.company.toLowerCase().includes(lowerQuery) ||
          g.skills.some((s) => s.toLowerCase().includes(lowerQuery))
      );
    },
    [gigs]
  );

  const removeSavedGig = useCallback(
    (id) => {
      setSavedGigs((prev) => prev.filter((g) => g.id !== id));
    },
    []
  );

  const suggestGigs = useCallback(async () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve([
          "Build responsive React websites for startups",
          "Create engaging social media content for small businesses",
          "Develop automation scripts using Python",
          "Design logos and branding materials for local shops",
        ]);
      }, 1500);
    });
  }, []);

  return { gigs, savedGigs, searchGigs, removeSavedGig, suggestGigs, loading };
};