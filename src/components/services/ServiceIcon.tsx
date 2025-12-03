import React from 'react';

interface ServiceIconProps {
    title: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ title }) => {
    switch (title) {
        case 'External Audit':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                    <g className="audit-glass">
                        <circle cx="11" cy="11" r="5" stroke="var(--color-brand-secondary)" strokeWidth="2"></circle>
                        <line x1="14.5" y1="14.5" x2="17" y2="17" stroke="var(--color-brand-secondary)" strokeWidth="2"></line>
                    </g>
                </svg>
            );
        case 'Real Time Accounting Software':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                    <g transform="translate(6, 8)">
                        <rect className="bar-1" x="0" y="4" width="2" height="5" fill="var(--color-brand-secondary)" stroke="none"></rect>
                        <rect className="bar-2" x="4" y="0" width="2" height="9" fill="var(--color-brand-secondary)" stroke="none"></rect>
                        <rect className="bar-3" x="8" y="2" width="2" height="7" fill="var(--color-brand-secondary)" stroke="none"></rect>
                    </g>
                </svg>
            );
        case 'Consulting':
            return (
                <svg className="icon-svg bulb-glow" viewBox="0 0 24 24">
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                    <path d="M12 2a7 7 0 0 0-7 7c0 2 2 3 2 4.5V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.5c0-1.5 2-2.5 2-4.5a7 7 0 0 0-7-7z"></path>
                </svg>
            );
        case 'Financial Statements':
            return (
                <svg className="icon-svg doc-float" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M9.5 13.5c.8-1.5 3.5-1.5 4.5 0"></path>
                    <path d="M9.5 16.5c.8 1.5 3.5 1.5 4.5 0"></path>
                </svg>
            );
        case 'Budgeting':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="8" y1="6" x2="16" y2="6"></line>
                    <line x1="16" y1="14" x2="16" y2="18"></line>
                    <path className="calc-btn" d="M16 10h.01"></path>
                    <path className="calc-btn" d="M12 10h.01"></path>
                    <path className="calc-btn" d="M8 10h.01"></path>
                    <path className="calc-btn" d="M12 14h.01"></path>
                    <path className="calc-btn" d="M8 14h.01"></path>
                    <path className="calc-btn" d="M12 18h.01"></path>
                    <path className="calc-btn" d="M8 18h.01"></path>
                </svg>
            );
        case 'Payroll Services':
            return (
                <svg className="icon-svg card-swipe" viewBox="0 0 24 24">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
            );
        case 'Investment Strategies':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    <polyline className="trend-line" points="16 16 12 12 8 12 4 8" stroke="var(--color-brand-secondary)" strokeWidth="2" fill="none"></polyline>
                </svg>
            );
        case 'Tax Return & Fillings':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path className="check-mark" d="M9 15l2 2 4-4" stroke="var(--color-brand-secondary)" strokeWidth="3"></path>
                    <line x1="8" y1="11" x2="16" y2="11" strokeWidth="1" opacity="0.3"></line>
                    <line x1="8" y1="7" x2="10" y2="7" strokeWidth="1" opacity="0.3"></line>
                </svg>
            );
        case 'Business Valuation':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <path d="M8 21h8"></path>
                    <g className="scale-beam">
                        <line x1="6" y1="8" x2="18" y2="8"></line>
                        <path d="M6 8v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V8"></path>
                        <path d="M12 8v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V8"></path>
                    </g>
                </svg>
            );
        case 'Feasibility Study':
            return (
                <svg className="icon-svg briefcase" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            );
        case 'Book Keeping':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    <path className="book-page" d="M6.5 2H19v15H6.5" fill="rgba(79, 172, 254, 0.1)" stroke="none"></path>
                </svg>
            );
        case 'Financial Management':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                    <circle cx="12" cy="15" r="2" className="bulb-glow"></circle>
                </svg>
            );
        case 'Start-Up Assistance':
            return (
                <svg className="icon-svg rocket" viewBox="0 0 24 24">
                    <path d="M6 9a6 6 0 0 1 12 0c0 7-6 13-6 13S6 16 6 9Z"></path>
                    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <line x1="12" y1="22" x2="12" y2="24"></line>
                    <line x1="8" y1="21" x2="7" y2="23"></line>
                    <line x1="16" y1="21" x2="17" y2="23"></line>
                </svg>
            );
        case 'ERP Consultancy & Implementation':
            return (
                <svg className="icon-svg" viewBox="0 0 24 24">
                    <circle className="node" cx="12" cy="5" r="3"></circle>
                    <circle className="node" cx="6" cy="12" r="3"></circle>
                    <circle className="node" cx="18" cy="12" r="3"></circle>
                    <line x1="12" y1="8" x2="6" y2="12"></line>
                    <line x1="12" y1="8" x2="18" y2="12"></line>
                    <rect x="9" y="17" width="6" height="5" rx="1"></rect>
                    <line x1="12" y1="15" x2="12" y2="17"></line>
                </svg>
            );
        case 'Risk Assessment & Internal Controls':
            return (
                <svg className="icon-svg shield-icon" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--color-brand-primary)"></path>
                    <path className="lock-shackle" d="M12 8v4" stroke="var(--color-brand-secondary)"></path>
                    <circle cx="12" cy="14" r="2" fill="var(--color-brand-primary)" stroke="none"></circle>
                </svg>
            );
        default:
            return null;
    }
};

export default ServiceIcon;
