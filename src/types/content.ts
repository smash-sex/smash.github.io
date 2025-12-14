export interface Content {
  lang: 'ru' | 'en';
  header: {
    title: string;
    date: string;
    time: string;
  };
  intro: string;
  sections: {
    title: string;
    items: string[];
  }[];
  location: {
    title: string;
    description: string;
    coordinates: string;
  };
  buttons: {
    location: string;
    contact: string;
  };
}
