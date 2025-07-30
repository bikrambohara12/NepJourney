import bannerimage from './bannerimage.png'
import verified_icon from './verified_icon.svg'
import logo from './logo.png'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import nep_logo from './nep_logo.svg'
import cultureguide from './cultureguide.png';
import localguide from './localguide.png';
import familyguide from './familyguide.png';
import natureguide from './natureguides.png'; 
import luxoryguide from './luaxoryguide.png'; 
import advantureguide from './advantureguide.png';

import guide1 from './guide1.jpg'
import guide2 from './guide2.jpg'
import guide3 from './guide3.jpg'
import guide4 from './guide4.jpg'
import guide5 from './guide5.jpg'
import guide6 from './guide6.jpg'
import guide7 from './guide7.jpg'
import guide8 from './guide8.jpg'
import guide9 from './guide9.jpg'
import guide10 from './guide10.png'
import guide11 from './guide11.png'
import guide12 from './guide12.jpg'
import guide13 from './guide13.jpg'
import guide14 from './guide14.jpg'
import Contact from '../pages/Contact'
import guideimg from './guideimg.png'


export const assets ={
   bannerimage,
   verified_icon,
   logo,
   profile_pic,
   dropdown_icon,
    menu_icon,
    nep_logo,
    guideimg,
}


export const specialityData = [
    {
        speciality: 'cultureguide',
        image: cultureguide
    },
    {
        speciality: 'localguide',
        image: localguide
    },
    {
        speciality: 'familyguide',
        image: familyguide
    },
    {
        speciality: 'natureguide',
        image: natureguide
    },
    {
        speciality: 'luxoryguide',
        image: luxoryguide
    },
    {
        speciality: 'advantureguide',
        image: advantureguide
    },
]




   

export const guides = [
  {
    _id: 'guide1',
    name: 'Aarav Thapa',
    image: guide1,
    tag: 'cultureguide',
    speciality: 'City Tour, Cultural Heritage',
    degree: 'BTTM',
    experience: '6 years',
    about: 'Aarav specializes in showcasing the rich cultural heritage of Nepal and city landscapes.',
    fees: 2500,
    location: ['Kathmandu', 'Patan', 'Bhaktapur', 'Lalitpur', 'Pokhara'],
    language: ['Nepali', 'English', 'Hindi'],
    address: { line1: 'Thamel', line2: 'Kathmandu, Nepal' }
  },
  {
    _id: 'guide2',
    name: 'Samir Gurung',
    image: guide2,
    tag: 'familyguide',
    speciality: 'Family & Solo Female Travel',
    degree: 'BA in English, Certified Tourist Guide',
    experience: '4 years',
    about: 'Sita is passionate about safe and memorable tours for solo female travelers and families.',
    fees: 2000,
    location: ['Pokhara', 'Chitwan', 'Kathmandu', 'Lumbini'],
    language: ['Nepali', 'English'],
    address: { line1: 'Lakeside', line2: 'Pokhara, Nepal' }
  },
  {
    _id: 'guide3',
    name: 'Ramesh KC',
    image: guide3,
    tag: 'localguide',
    speciality: 'Historical Sites, Museum Guide',
    degree: 'MA in History',
    experience: '5 years',
    about: 'Ramesh brings history to life with his engaging tours.',
    fees: 2200,
    location: ['Bhaktapur', 'Kathmandu', 'Patan', 'Kirtipur'],
    language: ['Nepali', 'English', 'Hindi'],
    address: { line1: 'Bhaktapur Durbar Square', line2: 'Bhaktapur, Nepal' }
  },
  {
    _id: 'guide4',
    name: 'Karma Sherpa',
    image: guide4,
    tag: 'adventureguide',
    speciality: 'Everest Base Camp Trek',
    degree: 'High Altitude Certified Guide',
    experience: '6 years',
    about: 'Karma has guided over 100 expeditions to the Everest region.',
    fees: 2200,
    location: ['Lukla', 'Namche', 'Everest Base Camp', 'Solukhumbu'],
    language: ['Nepali', 'English', 'French'],
    address: { line1: 'Lukla', line2: 'Solukhumbu, Nepal' }
  },
  {
    _id: 'guide5',
    name: 'Maya Lama',
    image: guide5,
    tag: 'natureguide',
    speciality: 'Annapurna Circuit',
    degree: 'Diploma in Adventure Tourism',
    experience: '7 years',
    about: 'Maya ensures safe and inclusive trekking in Annapurna.',
    fees: 3000,
    location: ['Annapurna Circuit', 'Manang', 'Mustang', 'Pokhara', 'Jomsom'],
    language: ['Nepali', 'English', 'French'],
    address: { line1: 'Lakeside', line2: 'Pokhara, Nepal' }
  },
  {
    _id: 'guide6',
    name: 'Binita Chaudhary',
    image: guide6,
    tag: 'natureguide',
    speciality: 'Jungle Safari, Bird Watching',
    degree: 'BSc in Environmental Science',
    experience: '6 years',
    about: 'Binita leads safaris in Chitwan and Bardia.',
    fees: 2000,
    location: ['Chitwan', 'Sauraha', 'Bardia', 'Koshi Tappu'],
    language: ['Nepali', 'English'],
    address: { line1: 'Sauraha', line2: 'Chitwan, Nepal' }
  },
  {
  _id: 'guide7',
  name: 'Dipesh Rai',
  image: guide7,
  tag: 'localguide',
  speciality: 'Langtang, Helambu Trek',
  degree: 'Certified Mountain Guide (NMA)',
  experience: '5 years',
  about: 'Dipesh Rai is more than just a guide — he’s your cultural bridge to the hidden beauty of Langtang and Helambu. With his roots deeply connected to these Himalayan trails, he brings ancient stories to life as you trek. His passion for the mountains and the people who live there inspires travelers to see Nepal not just as a destination, but as a deeply spiritual journey.',
  fees: 2800,
  location: ['Langtang', 'Helambu', 'Gosaikunda', 'Rasuwa'],
  language: ['Nepali', 'English', 'Hindi'],
  address: { line1: 'Dhunche', line2: 'Rasuwa, Nepal' }
},
{
  _id: 'guide8',
  name: 'Manju Bhandari',
  image: guide8,
  tag: 'natureguide',
  speciality: 'Nature Trails, Botanical Tours',
  degree: 'MSc in Ecotourism',
  experience: '9 years',
  about: 'With a deep love for flora and the natural world, Manoj Bhandari guides you through some of Nepal’s most biodiverse landscapes. Every step with him is a lesson in the language of plants and ecosystems. His botanical knowledge and infectious enthusiasm will not only educate you but also awaken a lifelong love for the environment.',
  fees: 2500,
  location: ['Godawari', 'Shivapuri', 'Nagarjun', 'Phulchowki'],
  language: ['Nepali', 'English', 'German'],
  address: { line1: 'Godawari', line2: 'Lalitpur, Nepal' }
},
{
  _id: 'guide9',
  name: 'Anit Shrestha',
  image: guide9,
  tag: 'cultureguide',
  speciality: 'Solo Travel, Cultural Tours',
  degree: 'BA in Sociology',
  experience: '4 years',
  about: 'Anit Shrestha is a passionate advocate for solo female travelers and cultural discovery. Her tours are empowering, immersive, and full of authentic moments—from local festivals to quiet conversations with artisans. She inspires visitors to connect deeply with Nepali culture and to embrace the strength of traveling independently.',
  fees: 2300,
  location: ['Kathmandu', 'Patan', 'Bhaktapur', 'Lalitpur'],
  language: ['Nepali', 'English'],
  address: { line1: 'Patan', line2: 'Lalitpur, Nepal' }
},
{
  _id: 'guide10',
  name: 'Rabin Tamang',
  image: guide10,
  tag: 'adventureguide',
  speciality: 'Adventure & Zipline Tours',
  degree: 'BTTM',
  experience: '6 years',
  about: 'Thrill-seekers meet their perfect match with Rabin Tamang, a dynamic adventure guide known for his energy and expertise. Whether it’s soaring through ziplines or rafting down wild rivers, Rabin makes every experience both exhilarating and safe. His tours ignite courage and remind travelers that life begins at the edge of your comfort zone.',
  fees: 2700,
  location: ['Kushma', 'Pokhara', 'The Last Resort', 'Bhotekoshi'],
  language: ['Nepali', 'English', 'Spanish'],
  address: { line1: 'Kushma', line2: 'Parbat, Nepal' }
},
{
  _id: 'guide11',
  name: 'Laxmi Acharya',
  image: guide11,
  tag: 'natureguide',
  speciality: 'Photography & Nature Walks',
  degree: 'Diploma in Photography',
  experience: '3 years',
  about: 'Laxmi Acharya blends the beauty of nature with the art of photography, guiding guests through scenic trails while teaching them how to capture magical moments. Her gentle teaching style and keen eye make every walk feel like stepping into a living postcard. She inspires travelers to see beauty in the ordinary and preserve it forever.',
  fees: 2200,
  location: ['Bandipur', 'Pokhara', 'Nagarkot', 'Godawari'],
  language: ['Nepali', 'English', 'French'],
  address: { line1: 'Bandipur', line2: 'Tanahun, Nepal' }
},
{
  _id: 'guide12',
  name: 'Ritika Bista',
  image: guide12,
  tag: 'localguide',
  speciality: 'Village Tours, Homestay Experience',
  degree: 'BA in Rural Development',
  experience: '5 years',
  about: 'Ritesh Bista invites travelers into the heart of rural Nepal with warmth and authenticity. His tours are not just about seeing villages but becoming a part of them — cooking local meals, sharing stories with families, and learning traditional crafts. Ritesh is on a mission to preserve local heritage and inspire meaningful travel.',
  fees: 2400,
  location: ['Ghale Gaun', 'Pokhara', 'Gorkha', 'Lamjung', 'Tanahun'],
  language: ['Nepali', 'English', 'German'],
  address: { line1: 'Ghale Gaun', line2: 'Lamjung, Nepal' }
},
{
  _id: 'guide13',
  name: 'Sharmila Thakuri',
  image: guide13,
  tag: 'cultureguide',
  speciality: 'Festival Tours, Local Life',
  degree: 'MA in Culture Studies',
  experience: '4 years',
  about: 'Step into Nepal’s colorful traditions with Sharmila Thakuri, a cultural expert who brings festivals and local life alive with storytelling and context. Her tours are vibrant, heartfelt, and full of joy. Sharmila inspires visitors to appreciate the deeper meaning behind customs and to celebrate the spirit of togetherness.',
  fees: 2000,
  location: ['Kathmandu', 'Bhaktapur', 'Patan', 'Dolakha', 'Lalitpur'],
  language: ['Nepali', 'English'],
  address: { line1: 'Basantapur', line2: 'Kathmandu, Nepal' }
},
{
  _id: 'guide14',
  name: 'Tek Bahadur Magar',
  image: guide14,
  // tag: 'adventureguide',
  speciality: 'adventureguide',
  degree: 'Certified Whitewater Guide',
  experience: '8 years',
  about: 'Tek Bahadur Magar lives for the river. His whitewater tours aren’t just about adrenaline—they’re about connection, confidence, and pure joy. With years of experience, he expertly navigates you through Nepal’s wildest rapids while ensuring safety at every splash. Tek inspires travelers to face the current and go with the flow, both on the river and in life.',
  fees: 3200,
  location: ['Trishuli River', 'Seti River', 'Kalikot', 'Mugling', 'Pokhara'],
  language: ['Nepali', 'English'],
  address: { line1: 'Mugling', line2: 'Chitwan, Nepal' }
}
];