import { useCallback } from 'react';
import { useApp } from '../contexts/AppContext';

export function useNavigate() {
  const { navigateTo, setSelectedQuestionArea, setPracticeData } = useApp();
  
  const navigateToQuestions = useCallback((areaId: string) => {
    console.log('Navigating to questions with area:', areaId);
    setSelectedQuestionArea(areaId);
    navigateTo('questions');
  }, [navigateTo, setSelectedQuestionArea]);
  
  const navigateToPractice = useCallback((
    area: string,
    subject: string,
    topic: string,
    topicName: string
  ) => {
    console.log('Navigating to practice:', { area, subject, topic, topicName });
    setPracticeData({ area, subject, topic, topicName });
    navigateTo('practice');
  }, [navigateTo, setPracticeData]);
  
  const navigateToGame = useCallback((areaId: string) => {
    console.log('Navigating to game with area:', areaId);
    setSelectedQuestionArea(areaId);
    navigateTo('game');
  }, [navigateTo, setSelectedQuestionArea]);
  
  const navigateToRanking = useCallback(() => {
    navigateTo('ranking');
  }, [navigateTo]);
  
  const navigateToForum = useCallback(() => {
    navigateTo('forum');
  }, [navigateTo]);
  
  const navigateToDashboard = useCallback(() => {
    navigateTo('dashboard');
  }, [navigateTo]);
  
  return {
    navigateToQuestions,
    navigateToPractice,
    navigateToGame,
    navigateToRanking,
    navigateToForum,
    navigateToDashboard,
  };
}
