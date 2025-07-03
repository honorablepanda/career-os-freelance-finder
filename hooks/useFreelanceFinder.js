import { useState, useCallback } from "react";
import { mockGigs, mockSavedGigs } from "../mock/mockFreelanceData";

/**
 * Hook managing freelance gigs data, saved gigs, and dummy AI suggestions.
 */
export const useFreelanceFinder = () => {
  const [gigs, setGigs] = useState(mockGigs);
  const [savedGigs, setSavedGigs] = useState(mockSavedGigs);
  const [loading, setLoading] = useState(false);

  /**
   * Filters gigs by keyword in title, company, or skills.
   * @param {string} query
   * @returns {Array} filtered gigs
   */
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

  /**
   * Removes a gig from saved gigs list.
   * @param {string} id
   */
  const removeSavedGig = useCallback(
    (id) => {
      setSavedGigs((prev) => prev.filter((g) => g.id !== id));
    },
    []
  );

  /**
   * Dummy AI gig suggestions.
   */
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
