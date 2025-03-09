
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-medium-gray py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-serif font-semibold text-white mb-2">Toine Louis Heijstek</h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-white/70">
              <a href="mailto:toineheijstek@gmail.com" className="hover:text-accent-red transition-colors">
                email@example.com
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:06 13633623" className="hover:text-accent-red transition-colors">
                +123 456 7890
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-light-gray/30 mt-6 pt-6 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Toine Louis Heijstek. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
