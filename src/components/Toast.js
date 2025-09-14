import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;

const Toast = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.type === 'success' 
      ? 'linear-gradient(90deg, #10b981, #059669)' 
      : 'linear-gradient(90deg, #ef4444, #dc2626)'};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.type === 'success' 
    ? 'linear-gradient(135deg, #10b981, #059669)' 
    : 'linear-gradient(135deg, #ef4444, #dc2626)'};
  color: white;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const ToastContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ToastTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.2;
`;

const ToastMessage = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.4;
`;

const ToastCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #6b7280;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', title = null) => {
    const id = Date.now() + Math.random();
    const toast = {
      id,
      message,
      type,
      title: title || (type === 'success' ? 'Success!' : 'Error!')
    };

    setToasts(prev => [...prev, toast]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer>
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              type={toast.type}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.3 
              }}
            >
              <ToastIcon type={toast.type}>
                {toast.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
              </ToastIcon>
              <ToastContent>
                <ToastTitle>{toast.title}</ToastTitle>
                <ToastMessage>{toast.message}</ToastMessage>
              </ToastContent>
              <ToastCloseButton onClick={() => removeToast(toast.id)}>
                <FaTimes size={12} />
              </ToastCloseButton>
            </Toast>
          ))}
        </AnimatePresence>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

// Create Toast Context
const ToastContext = React.createContext();

// Custom hook to use toast
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;
