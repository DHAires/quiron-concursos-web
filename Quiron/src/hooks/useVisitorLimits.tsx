import { useState, useEffect, useCallback, useMemo } from 'react';

interface VisitorLimits {
  aiInteractions: number;
  gameRounds: number;
  communityMessages: number;
  forumPosts: number;
}

const MAX_LIMITS: VisitorLimits = {
  aiInteractions: 5,
  gameRounds: 5,
  communityMessages: 5,
  forumPosts: 5,
};

const STORAGE_KEY = 'quiron_visitor_limits';
const REGISTERED_KEY = 'quiron_user_registered';

// Helper functions
const loadLimits = (): VisitorLimits => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { ...MAX_LIMITS };
  } catch {
    return { ...MAX_LIMITS };
  }
};

const saveLimits = (limits: VisitorLimits) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limits));
  } catch (error) {
    console.error('Error saving limits:', error);
  }
};

export function useVisitorLimits() {
  const [limits, setLimits] = useState<VisitorLimits>(loadLimits);
  const [isRegistered, setIsRegistered] = useState(() => 
    localStorage.getItem(REGISTERED_KEY) === 'true'
  );

  // Save to localStorage whenever limits change
  useEffect(() => {
    saveLimits(limits);
  }, [limits]);

  // Memoized computed values
  const hasAnyLimitReached = useMemo(() => {
    if (isRegistered) return false;
    return Object.values(limits).some(value => value <= 0);
  }, [limits, isRegistered]);

  // Optimized limit usage functions
  const useAiInteraction = useCallback(() => {
    if (isRegistered) return true;
    if (limits.aiInteractions <= 0) return false;
    
    setLimits(prev => ({
      ...prev,
      aiInteractions: prev.aiInteractions - 1
    }));
    return true;
  }, [isRegistered, limits.aiInteractions]);

  const useGameRound = useCallback(() => {
    if (isRegistered) return true;
    if (limits.gameRounds <= 0) return false;
    
    setLimits(prev => ({
      ...prev,
      gameRounds: prev.gameRounds - 1
    }));
    return true;
  }, [isRegistered, limits.gameRounds]);

  const useCommunityMessage = useCallback(() => {
    if (isRegistered) return true;
    if (limits.communityMessages <= 0) return false;
    
    setLimits(prev => ({
      ...prev,
      communityMessages: prev.communityMessages - 1
    }));
    return true;
  }, [isRegistered, limits.communityMessages]);

  const useForumPost = useCallback(() => {
    if (isRegistered) return true;
    if (limits.forumPosts <= 0) return false;
    
    setLimits(prev => ({
      ...prev,
      forumPosts: prev.forumPosts - 1
    }));
    return true;
  }, [isRegistered, limits.forumPosts]);

  const getRemainingLimits = useCallback(() => limits, [limits]);

  const markAsRegistered = useCallback(() => {
    localStorage.setItem(REGISTERED_KEY, 'true');
    setIsRegistered(true);
    setLimits({
      aiInteractions: 999,
      gameRounds: 999,
      communityMessages: 999,
      forumPosts: 999,
    });
  }, []);

  return {
    isRegistered,
    limits,
    useAiInteraction,
    useGameRound,
    useCommunityMessage,
    useForumPost,
    getRemainingLimits,
    hasAnyLimitReached,
    markAsRegistered,
    maxLimits: MAX_LIMITS,
  };
}