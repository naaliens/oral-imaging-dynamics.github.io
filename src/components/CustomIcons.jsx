import React from 'react';

export const BoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3a5 5 0 0 0-5 5v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a5 5 0 0 0-2-4zm8 0a5 5 0 0 1 5 5v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8a5 5 0 0 1 2-4zm-8 18a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a5 5 0 0 1-2 4zm8 0a5 5 0 0 0 5-5v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2a5 5 0 0 0 2 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TeethBracketsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8h16M4 16h16M8 4v16M16 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="6" width="4" height="4" rx="1" fill="currentColor"/>
    <rect x="14" y="6" width="4" height="4" rx="1" fill="currentColor"/>
    <rect x="6" y="14" width="4" height="4" rx="1" fill="currentColor"/>
    <rect x="14" y="14" width="4" height="4" rx="1" fill="currentColor"/>
  </svg>
);

export const TeethImplantsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M7 6h10M7 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
);

export const TeethEndodonticsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M7 6h10M7 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);