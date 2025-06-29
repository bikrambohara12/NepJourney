import React from 'react';
import GuideCard from './GuideCard';

const guides = [
  {
    name: 'Bessie Cooper',
    country: 'Central African Republic',
    languages: 'English, Dutch, France +3',
    price: 79,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    name: 'Brooklyn Simmons',
    country: 'Russia',
    languages: 'English, Dutch, France +3',
    price: 26,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Theresa Webb',
    country: 'Sao Tome and Principe',
    languages: 'English, Dutch, France +3',
    price: 38,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Guy Hawkins',
    country: 'New Zealand',
    languages: 'English, Maori',
    price: 43,
    rating: 4.7,
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Jacob Jones',
    country: 'Germany',
    languages: 'German, English',
    price: 54,
    rating: 4.8,
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Wade Warren',
    country: 'France',
    languages: 'French, English',
    price: 63,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
];

const GuideList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto pb-10">
      {guides.map((guide, index) => (
        <GuideCard key={index} {...guide} />
      ))}
    </div>
  );
};

export default GuideList;
