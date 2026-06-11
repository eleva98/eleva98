import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5194373376';
    // Validate URL before opening
    try {
      const url = new URL(whatsappUrl);
      if (url.protocol === 'https:' && url.hostname === 'wa.me') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Invalid WhatsApp URL:', error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group animate-pulse hover:animate-none cursor-pointer active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Falar no WhatsApp"
        type="button"
        tabIndex={0}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          Falar no WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppFloat;