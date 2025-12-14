import { MapPin, Mail } from 'lucide-react';
import { Content } from '../types/content';

interface FixedButtonsProps {
  buttons: Content['buttons'];
  coordinates: string;
}

export function FixedButtons({ buttons, coordinates }: FixedButtonsProps) {
  const handleLocationClick = () => {
    const coords = coordinates.replace(/['"]/g, '').replace(/\s/g, '');
    const [lat, lon] = coords.split(/[NS]|[EW]/).filter(Boolean);
    window.open(`https://www.google.com/maps?q=${lat},${lon}`, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:organizer@example.com?subject=Birthday Event Inquiry';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleLocationClick}
          className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
        >
          <MapPin size={24} />
          <span>{buttons.location}</span>
        </button>
        <button
          onClick={handleContactClick}
          className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-rose-600 hover:to-orange-600"
        >
          <Mail size={24} />
          <span>{buttons.contact}</span>
        </button>
      </div>
    </div>
  );
}
