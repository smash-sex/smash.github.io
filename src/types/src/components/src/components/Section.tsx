import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  title: string;
  items: string[];
  index: number;
}

export function Section({ title, items, index }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gradients = [
    'from-rose-50 to-amber-50',
    'from-blue-50 to-cyan-50',
    'from-green-50 to-emerald-50',
    'from-orange-50 to-rose-50',
    'from-amber-50 to-yellow-50'
  ];

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">{['🏡', '🛡️', '👥', '✨', '🎉'][index % 5]}</span>
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-gray-700 leading-relaxed animate-slide-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <CheckCircle2 className="flex-shrink-0 text-green-500 mt-1" size={20} />
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
