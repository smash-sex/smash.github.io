import { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { LocationSection } from './components/LocationSection';
import { FixedButtons } from './components/FixedButtons';
import { russianContent, englishContent } from './data/content';
import { Content } from './types/content';

function App() {
  const [content, setContent] = useState<Content>(russianContent);

  const toggleLanguage = () => {
    setContent(content.lang === 'ru' ? englishContent : russianContent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header content={content} onLanguageToggle={toggleLanguage} />

      <main className="max-w-4xl mx-auto px-4 py-12 pb-32">
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {content.intro}
          </p>
        </div>

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              items={section.items}
              index={index}
            />
          ))}

          <LocationSection location={content.location} />
        </div>
      </main>

      <FixedButtons
        buttons={content.buttons}
        coordinates={content.location.coordinates}
      />
    </div>
  );
}

export default App;
