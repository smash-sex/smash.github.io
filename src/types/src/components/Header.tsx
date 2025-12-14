import { Globe } from 'lucide-react';
import { Content } from '../types/content';

interface HeaderProps {
  content: Content;
  onLanguageToggle: () => void;
}

export function Header({ content, onLanguageToggle }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-rose-400 via-amber-300 to-orange-400 text-white py-20 px-6">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <button
        onClick={onLanguageToggle}
        className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <Globe size={20} />
        <span className="font-medium">{content.lang === 'ru' ? 'EN' : 'RU'}</span>
      </button>

      <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {content.header.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="text-3xl">📅</span>
            <span className="font-semibold">{content.header.date}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="text-3xl">🕐</span>
            <span className="font-semibold">{content.header.time}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
