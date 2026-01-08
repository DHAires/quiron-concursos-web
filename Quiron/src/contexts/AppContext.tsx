import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

// Types
export type ViewType = 'dashboard' | 'chat' | 'questions' | 'practice' | 'community' | 'forum' | 'game' | 'avatars' | 'questionbank' | 'verification' | 'ranking' | 'profile' | 'support' | 'analytics-ai' | 'store';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  energy?: number;
  isPremium?: boolean;
}

interface PracticeData {
  area: string;
  subject: string;
  topic: string;
  topicName: string;
}

interface AppContextType {
  // View State
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  navigateTo: (view: ViewType) => void;
  
  // Question/Practice State
  selectedQuestionArea: string;
  setSelectedQuestionArea: (area: string) => void;
  practiceData: PracticeData | null;
  setPracticeData: (data: PracticeData | null) => void;
  
  // User State
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  isAuthenticated: boolean;
  
  // Modal State
  modals: {
    login: boolean;
    register: boolean;
    success: boolean;
  };
  openModal: (modal: keyof AppContextType['modals']) => void;
  closeModal: (modal: keyof AppContextType['modals']) => void;
  closeAllModals: () => void;
  
  // Sidebar State
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  // View State
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedQuestionArea, setSelectedQuestionArea] = useState<string>('juridica');
  const [practiceData, setPracticeData] = useState<PracticeData | null>(null);
  
  // User State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Modal State
  const [modals, setModals] = useState({
    login: false,
    register: false,
    success: false,
  });
  
  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Memoized Values
  const isAuthenticated = useMemo(() => !!currentUser, [currentUser]);
  
  // Callbacks
  const navigateTo = useCallback((view: ViewType) => {
    setActiveView(view);
    setIsSidebarOpen(false);
  }, []);
  
  const openModal = useCallback((modal: keyof typeof modals) => {
    setModals(prev => ({ ...prev, [modal]: true }));
  }, []);
  
  const closeModal = useCallback((modal: keyof typeof modals) => {
    setModals(prev => ({ ...prev, [modal]: false }));
  }, []);
  
  const closeAllModals = useCallback(() => {
    setModals({ login: false, register: false, success: false });
  }, []);
  
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);
  
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);
  
  // Context Value
  const value = useMemo<AppContextType>(() => ({
    activeView,
    setActiveView,
    navigateTo,
    selectedQuestionArea,
    setSelectedQuestionArea,
    practiceData,
    setPracticeData,
    currentUser,
    setCurrentUser,
    isAuthenticated,
    modals,
    openModal,
    closeModal,
    closeAllModals,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  }), [
    activeView,
    navigateTo,
    selectedQuestionArea,
    practiceData,
    currentUser,
    isAuthenticated,
    modals,
    openModal,
    closeModal,
    closeAllModals,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  ]);
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Hook
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}