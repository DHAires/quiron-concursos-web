import { useState, useEffect } from 'react';

interface QuestionAttempt {
  questionId: string;
  area: string;
  subject: string;
  topic: string;
  isCorrect: boolean;
  timestamp: number;
}

interface SubjectProgress {
  total: number;
  completed: number;
  correct: number;
  accuracy: number;
}

interface AreaProgress {
  [subjectId: string]: SubjectProgress;
}

interface UserProgress {
  [areaId: string]: AreaProgress;
}

const STORAGE_KEY = 'quiron_question_progress';

export function useQuestionProgress() {
  const [progress, setProgress] = useState<UserProgress>({});
  const [attempts, setAttempts] = useState<QuestionAttempt[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      const savedAttempts = localStorage.getItem(`${STORAGE_KEY}_attempts`);
      
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
      
      if (savedAttempts) {
        setAttempts(JSON.parse(savedAttempts));
      }
    } catch (error) {
      console.error('Error loading question progress:', error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  const saveProgress = (newProgress: UserProgress, newAttempts: QuestionAttempt[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      localStorage.setItem(`${STORAGE_KEY}_attempts`, JSON.stringify(newAttempts));
    } catch (error) {
      console.error('Error saving question progress:', error);
    }
  };

  // Record a question attempt
  const recordAttempt = (
    questionId: string,
    area: string,
    subject: string,
    topic: string,
    isCorrect: boolean
  ) => {
    const newAttempt: QuestionAttempt = {
      questionId,
      area,
      subject,
      topic,
      isCorrect,
      timestamp: Date.now(),
    };

    console.log('📝 Recording attempt:', newAttempt);

    const newAttempts = [...attempts, newAttempt];
    setAttempts(newAttempts);

    // Update progress
    const newProgress = { ...progress };
    
    if (!newProgress[area]) {
      newProgress[area] = {};
    }
    
    if (!newProgress[area][subject]) {
      newProgress[area][subject] = {
        total: 0,
        completed: 0,
        correct: 0,
        accuracy: 0,
      };
    }

    const subjectProgress = newProgress[area][subject];
    
    // Check if this is a new question for this user
    const previousAttempts = attempts.filter(
      a => a.questionId === questionId && a.subject === subject
    );
    
    if (previousAttempts.length === 0) {
      // First attempt at this question
      subjectProgress.completed += 1;
    }
    
    if (isCorrect) {
      subjectProgress.correct += 1;
    }
    
    // Calculate accuracy
    const totalAttemptsForSubject = newAttempts.filter(
      a => a.area === area && a.subject === subject
    );
    const correctAttemptsForSubject = totalAttemptsForSubject.filter(a => a.isCorrect);
    
    subjectProgress.accuracy = totalAttemptsForSubject.length > 0
      ? Math.round((correctAttemptsForSubject.length / totalAttemptsForSubject.length) * 100)
      : 0;

    setProgress(newProgress);
    saveProgress(newProgress, newAttempts);
  };

  // Get progress for a specific area
  const getAreaProgress = (areaId: string) => {
    return progress[areaId] || {};
  };

  // Get progress for a specific subject
  const getSubjectProgress = (areaId: string, subjectId: string): SubjectProgress => {
    const areaProgress = progress[areaId];
    if (!areaProgress) {
      return { total: 0, completed: 0, correct: 0, accuracy: 0 };
    }
    return areaProgress[subjectId] || { total: 0, completed: 0, correct: 0, accuracy: 0 };
  };

  // Get total stats across all areas
  const getTotalStats = () => {
    let totalQuestions = 0;
    let completedQuestions = 0;
    let totalCorrect = 0;
    let totalAttempts = 0;

    Object.values(progress).forEach(areaProgress => {
      Object.values(areaProgress).forEach(subjectProgress => {
        completedQuestions += subjectProgress.completed;
      });
    });

    // Calculate from attempts
    totalAttempts = attempts.length;
    totalCorrect = attempts.filter(a => a.isCorrect).length;
    
    const avgAccuracy = totalAttempts > 0
      ? Math.round((totalCorrect / totalAttempts) * 100)
      : 0;

    return {
      totalQuestions,
      completedQuestions,
      totalCorrect,
      avgAccuracy,
    };
  };

  // Get stats for a specific area
  const getAreaStats = (areaId: string) => {
    const areaProgress = progress[areaId] || {};
    let completed = 0;
    let totalAttempts = 0;
    let correctAttempts = 0;

    Object.values(areaProgress).forEach(subjectProgress => {
      completed += subjectProgress.completed;
    });

    const areaAttempts = attempts.filter(a => a.area === areaId);
    totalAttempts = areaAttempts.length;
    correctAttempts = areaAttempts.filter(a => a.isCorrect).length;

    const avgAccuracy = totalAttempts > 0
      ? Math.round((correctAttempts / totalAttempts) * 100)
      : 0;

    return {
      completed,
      avgAccuracy,
    };
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({});
    setAttempts([]);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}_attempts`);
  };

  return {
    progress,
    attempts,
    recordAttempt,
    getAreaProgress,
    getSubjectProgress,
    getTotalStats,
    getAreaStats,
    resetProgress,
  };
}