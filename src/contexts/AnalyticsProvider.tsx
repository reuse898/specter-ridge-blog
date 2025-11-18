import React, { createContext, useContext, useEffect } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isInitialized: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-RL35D1S6N6');
    setIsInitialized(true);
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (isInitialized) {
      ReactGA.event(eventName, parameters);
    } else {
      // Optionally handle the case when GA is not initialized
      console.warn('Analytics not initialized');
    }
  };

  const trackPageView = (page: string) => {
    if (isInitialized) {
      ReactGA.send({ hitType: "pageview", page });
    } else {
      // Optionally handle the case when GA is not initialized
      console.warn('Analytics not initialized');
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    isInitialized
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Custom hook to use analytics
export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};