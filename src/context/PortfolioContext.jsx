import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const PortfolioContext = createContext(null);

export const COLOR_PALETTES = [
  { id: 'indigo',   name: 'Indigo Nights',   primary: '#6366F1', secondary: '#818CF8', accent: '#4F46E5',  bg: '#0B0F1A',  bgLight: '#FAFBFD' },
  { id: 'emerald',  name: 'Emerald Forest',  primary: '#10B981', secondary: '#34D399', accent: '#059669',  bg: '#0A1A15',  bgLight: '#F0FDF9' },
  { id: 'rose',     name: 'Rose Garden',     primary: '#F43F5E', secondary: '#FB7185', accent: '#E11D48',  bg: '#1A0A10',  bgLight: '#FFF1F2' },
  { id: 'amber',    name: 'Golden Hour',     primary: '#F59E0B', secondary: '#FBBF24', accent: '#D97706',  bg: '#1A1508',  bgLight: '#FFFBEB' },
  { id: 'cyan',     name: 'Ocean Breeze',    primary: '#06B6D4', secondary: '#22D3EE', accent: '#0891B2',  bg: '#081A1E',  bgLight: '#ECFEFF' },
  { id: 'violet',   name: 'Royal Purple',    primary: '#8B5CF6', secondary: '#A78BFA', accent: '#7C3AED',  bg: '#120B1A',  bgLight: '#F5F3FF' },
  { id: 'teal',     name: 'Teal Mist',       primary: '#14B8A6', secondary: '#2DD4BF', accent: '#0D9488',  bg: '#0A1A18',  bgLight: '#F0FDFA' },
  { id: 'pink',     name: 'Sunset Blush',    primary: '#EC4899', secondary: '#F472B6', accent: '#DB2777',  bg: '#1A0A14',  bgLight: '#FDF2F8' },
];

export const LAYOUT_TEMPLATES = [
  { id: 'modern',    name: 'Modern',    description: 'Clean single-page layout with smooth sections' },
  { id: 'split',     name: 'Split',     description: 'Sidebar profile with scrollable content' },
  { id: 'minimal',   name: 'Minimal',   description: 'Whitespace-focused, typography-first design' },
  { id: 'creative',  name: 'Creative',  description: 'Bold asymmetric layout with visual flair' },
];

const getDefaultState = () => ({
  currentStep: 0,
  theme: 'dark',
  selectedPalette: COLOR_PALETTES[0],
  selectedLayout: LAYOUT_TEMPLATES[0],
  personalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    avatarUrl: '',
  },
  socialLinks: {
    github: '',
    linkedin: '',
    twitter: '',
    website: '',
    dribbble: '',
    instagram: '',
  },
  skills: [],
  experience: [],
  education: [],
  projects: [],
});

function portfolioReducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 5) };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_PALETTE':
      return { ...state, selectedPalette: action.payload };
    case 'SET_LAYOUT':
      return { ...state, selectedLayout: action.payload };
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case 'UPDATE_SOCIAL_LINKS':
      return { ...state, socialLinks: { ...state.socialLinks, ...action.payload } };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'ADD_SKILL':
      return { ...state, skills: [...state.skills, action.payload] };
    case 'REMOVE_SKILL':
      return { ...state, skills: state.skills.filter((_, i) => i !== action.payload) };
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, action.payload] };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp, i) =>
          i === action.payload.index ? { ...exp, ...action.payload.data } : exp
        ),
      };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter((_, i) => i !== action.payload) };
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, action.payload] };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((edu, i) =>
          i === action.payload.index ? { ...edu, ...action.payload.data } : edu
        ),
      };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter((_, i) => i !== action.payload) };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((proj, i) =>
          i === action.payload.index ? { ...proj, ...action.payload.data } : proj
        ),
      };
    case 'REMOVE_PROJECT':
      return { ...state, projects: state.projects.filter((_, i) => i !== action.payload) };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    case 'RESET':
      return getDefaultState();
    default:
      return state;
  }
}

export function PortfolioProvider({ children }) {
  const [state, dispatch] = useReducer(portfolioReducer, getDefaultState(), (initial) => {
    try {
      const saved = localStorage.getItem('portfolio-generator-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...initial, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load saved state:', e);
    }
    return initial;
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-generator-state', JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }, [state]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  const actions = {
    setStep: useCallback((step) => dispatch({ type: 'SET_STEP', payload: step }), []),
    nextStep: useCallback(() => dispatch({ type: 'NEXT_STEP' }), []),
    prevStep: useCallback(() => dispatch({ type: 'PREV_STEP' }), []),
    setTheme: useCallback((theme) => dispatch({ type: 'SET_THEME', payload: theme }), []),
    toggleTheme: useCallback(() => dispatch({ type: 'TOGGLE_THEME' }), []),
    setPalette: useCallback((palette) => dispatch({ type: 'SET_PALETTE', payload: palette }), []),
    setLayout: useCallback((layout) => dispatch({ type: 'SET_LAYOUT', payload: layout }), []),
    updatePersonalInfo: useCallback((info) => dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: info }), []),
    updateSocialLinks: useCallback((links) => dispatch({ type: 'UPDATE_SOCIAL_LINKS', payload: links }), []),
    setSkills: useCallback((skills) => dispatch({ type: 'SET_SKILLS', payload: skills }), []),
    addSkill: useCallback((skill) => dispatch({ type: 'ADD_SKILL', payload: skill }), []),
    removeSkill: useCallback((index) => dispatch({ type: 'REMOVE_SKILL', payload: index }), []),
    addExperience: useCallback((exp) => dispatch({ type: 'ADD_EXPERIENCE', payload: exp }), []),
    updateExperience: useCallback((index, data) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { index, data } }), []),
    removeExperience: useCallback((index) => dispatch({ type: 'REMOVE_EXPERIENCE', payload: index }), []),
    addEducation: useCallback((edu) => dispatch({ type: 'ADD_EDUCATION', payload: edu }), []),
    updateEducation: useCallback((index, data) => dispatch({ type: 'UPDATE_EDUCATION', payload: { index, data } }), []),
    removeEducation: useCallback((index) => dispatch({ type: 'REMOVE_EDUCATION', payload: index }), []),
    addProject: useCallback((proj) => dispatch({ type: 'ADD_PROJECT', payload: proj }), []),
    updateProject: useCallback((index, data) => dispatch({ type: 'UPDATE_PROJECT', payload: { index, data } }), []),
    removeProject: useCallback((index) => dispatch({ type: 'REMOVE_PROJECT', payload: index }), []),
    loadState: useCallback((newState) => dispatch({ type: 'LOAD_STATE', payload: newState }), []),
    reset: useCallback(() => dispatch({ type: 'RESET' }), []),
  };

  return (
    <PortfolioContext.Provider value={{ state, ...actions }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
}
