import { useCallback } from 'react';
import { useApp } from '../contexts/AppContext';

export function useAuth() {
  const { currentUser, setCurrentUser, isAuthenticated, openModal, closeModal, closeAllModals } = useApp();
  
  const login = useCallback((user: any) => {
    setCurrentUser(user);
    closeAllModals();
    console.log('User logged in:', user);
  }, [setCurrentUser, closeAllModals]);
  
  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem('quiron_user_id');
    localStorage.removeItem('quiron_user_registered');
    console.log('User logged out');
  }, [setCurrentUser]);
  
  const register = useCallback(() => {
    closeModal('register');
    openModal('success');
  }, [closeModal, openModal]);
  
  const openLoginModal = useCallback(() => {
    openModal('login');
  }, [openModal]);
  
  const openRegisterModal = useCallback(() => {
    openModal('register');
  }, [openModal]);
  
  const switchToRegister = useCallback(() => {
    closeModal('login');
    openModal('register');
  }, [closeModal, openModal]);
  
  const switchToLogin = useCallback(() => {
    closeModal('register');
    openModal('login');
  }, [closeModal, openModal]);
  
  return {
    currentUser,
    isAuthenticated,
    login,
    logout,
    register,
    openLoginModal,
    openRegisterModal,
    switchToRegister,
    switchToLogin,
  };
}
