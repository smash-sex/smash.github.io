import { MapPin } from 'lucide-react';
import { Content } from '../types/content';

interface LocationSectionProps {
  location: Content['location'];
}

export function LocationSection({ location }: LocationSectionProps) {
  return (
    <div className="bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 rounded-3xl p-8 shadow-xl">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full mb-4 shadow-lg">
          <MapPin className="text-white" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {location.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
          {location.description}
        </p>
        <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          <p className="text-gray-800 font-mono font-semibold">
            {location.coordinates}
          </p>
        </div>
      </div>
    </div>
  );
}
