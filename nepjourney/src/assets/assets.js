import bannerimage from './bannerimage.png'
import verified_icon from './verified_icon.svg'
import logo from './logo.png'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
// import header_img from './header_img.png'
// import group_profiles from './group_profiles.png'
// import profile_pic from './profile_pic.png'
// import contact_image from './contact_image.png'
// import about_image from './about_image.png'
// import logo from './logo.svg'
// import dropdown_icon from './dropdown_icon.svg'
// import cross_icon from './cross_icon.png'
// import chats_icon from './chats_icon.svg'
// import arrow_icon from './arrow_icon.svg'
// import info_icon from './info_icon.svg'
// import upload_icon from './upload_icon.png'
// import stripe_logo from './stripe_logo.png'
// import razorpay_logo from './razorpay_logo.png'

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


export const assets ={
   bannerimage,
   verified_icon,
   logo,
   profile_pic,
   dropdown_icon,
    menu_icon,
}

// export const assets = {
//     appointment_img,
//     header_img,
//     group_profiles,
//     logo,
//     chats_icon,
//     verified_icon,
//     info_icon,
//     profile_pic,
//     arrow_icon,
//     contact_image,
//     about_image,
//     cross_icon,
//     dropdown_icon,
//     upload_icon,
//     stripe_logo,
//     razorpay_logo
// }

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
        about: 'Aarav specializes in showcasing the rich cultural heritage of Nepal and city landscapes. He is known for his in-depth knowledge of historical landmarks and local traditions.',
        fees: 2500,
          location:['mustang, manag,pokhara,kathmandu,chitwan,Nepal'],
        language: ['Nepali,English,hindi'],
        address: {
            line1: 'Thamel',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'guide2',
        name: 'Sita Gurung',
        image: guide2,
        tag: 'familyguide',
        speciality: 'Family & Solo Female Travel',
        degree: 'BA in English, Certified Tourist Guide',
        experience: '4 years',
        about: 'Sita is passionate about safe and memorable tours for solo female travelers and families. Fluent in English with excellent storytelling skills.',
        fees: 2000,
          location:['mustang, manag,pokhara,kathmandu,chitwan,nepal'],
        language: ['Nepali,English'],
        address: {
            line1: 'Lakeside',
            line2: 'Pokhara, Nepal'
        }
    },
    {
        _id: 'guide3',
        name: 'Ramesh KC',
        image: guide3,
        tag: 'localguide',
        speciality: 'Historical Sites, Museum Guide',
        degree: 'MA in History',
        experience: '5 years',
        Contact:'9868886773',
        about: 'Ramesh brings history to life with his engaging tours of ancient palaces, temples, and museums. Ideal for heritage lovers.',
        fees: 2200,
        location:['mustang, manag,pokhara,kathmandu,chitwan,bhaktapur'],
        language: ['Nepali,English,hindi'],
        address: {
            line1: 'Bhaktapur Durbar Square',
            line2: 'Bhaktapur, Nepal'
        }
    },
    {
        _id: 'guide4',
        name: 'Karma Sherpa',
        image: guide4,
        tag: 'advantureguide',
        speciality: 'Everest Base Camp Trek',
        degree: 'High Altitude Certified Guide',
        experience: '12 years',
        about: 'Karma has guided over 100 expeditions to the Everest region. He is a local expert in high-altitude survival and trekking logistics.',
        fees: 3500,
          location:['mustang, manag,pokhara,kathmandu,chitwan,dhorpatan'],
        language: ['Nepali,English,french'],
        address: {
            line1: 'Lukla',
            line2: 'Solukhumbu, Nepal'
        }
    },
    {
        _id: 'guide5',
        name: 'Maya Lama',
        image: guide5,
        tag: 'natureguide',
        speciality: 'Annapurna Circuit',
        degree: 'Diploma in Adventure Tourism',
        experience: '7 years',
        about: 'Maya is known for her warm and friendly nature. She ensures safe, inclusive, and enjoyable trekking experiences in Annapurna.',
        fees: 3000,
          location:['mustang, manag,pokhara,kathmandu,chitwan'],
        language:['Nepali,English,french'],
        address: {
            line1: 'Lakeside',
            line2: 'Pokhara, Nepal'
        }
    },
    {
        _id: 'guide6',
        name: 'Binita Chaudhary',
        image: guide6,
        tag: 'natureguide',
        speciality: 'Jungle Safari, Bird Watching',
        degree: 'BSc in Environmental Science',
        experience: '6 years',
        about: 'Binita leads informative and adventurous jungle safaris in Chitwan. She is an expert in identifying wildlife and bird species.',
        fees: 2000,
          location:['mustang, manag,pokhara,kathmandu,chitwan'],
        language: ['Nepali,English'],
        address: {
            line1: 'Sauraha',
            line2: 'Chitwan, Nepal'
        }
    },
    {
        _id: 'guide7',
        name: 'Dipesh Rai',
        image: guide7,
        tag: 'localguide',
        speciality: 'Langtang, Helambu Trek',
        degree: 'Certified Mountain Guide (NMA)',
        experience: '5 years',
        about: 'Dipesh offers well-organized trekking tours with deep insights into local cultures of Langtang and Helambu regions.',
        fees: 2800,
          location:['mustang, manag,pokhara,kathmandu,chitwan,everest'],
        language: ['Nepali,English,hindi'],
        address: {
            line1: 'Dhunche',
            line2: 'Rasuwa, Nepal'
        }
    },
    {
        _id: 'guide8',
        name: 'Manoj Bhandari',
        image: guide8,
        tag: 'natureguide',
        speciality: 'Nature Trails, Botanical Tours',
        degree: 'MSc in Botany',
        experience: '9 years',
        about: 'Manoj conducts nature hikes that blend science and scenery. Ideal for eco-tourists and nature lovers.',
        fees: 2500,
          location:['mustang, manag,pokhara,kathmandu,chitwan,mountain'],
        language: ['Nepali,English,german'],
        address: {
            line1: 'Godawari',
            line2: 'Lalitpur, Nepal'
        }
    },
    {
        _id: 'guide9',
        name: 'Anita Shrestha',
        image: guide9,
        tag: 'cultureguide',
        speciality: 'Solo Travel, Cultural Tours',
        degree: 'BA in Sociology',
        experience: '4 years',
        about: 'Anita is known for empowering solo women travelers and promoting cultural exchange. Fluent in multiple languages.',
        fees: 2300,
        location:['mustang, manag,pokhara,kathmandu,chitwan,AbC'],
        language: ['Nepali,English'],
        address: {
            line1: 'Patan',
            line2: 'Lalitpur, Nepal'
        }
    },
    {
        _id: 'guide10',
        name: 'Rabin Tamang',
        image: guide10,
        tag : 'advantureguide',
        speciality: 'Adventure & Zipline Tours',
        degree: 'BTTM',
        experience: '6 years',
        about: 'Rabin organizes adrenaline-pumping tours including bungee jumping, ziplining, and canyoning across Nepal.',
        fees: 2700,
          location:['mustang, manag,pokhara,kathmandu,chitwan,rara'],
        language: ['Nepali,English,spanish'],
        address: {
            line1: 'Kushma',
            line2: 'Parbat, Nepal'
        }
    },
    {
        _id: 'guide11',
        name: 'Laxmi Acharya',
        image: guide11,
        tag: 'natureguide',
        speciality: 'Photography & Nature Walks',
        degree: 'Diploma in Photography',
        experience: '3 years',
        about: 'Laxmi guides photographers through scenic spots and offers basic tutorials on capturing perfect travel moments.',
        fees: 2200,
          location:['mustang, manag,pokhara,chitwan'],
        language: ['Nepali,English,French'],
        address: {
            line1: 'Bandipur',
            line2: 'Tanahun, Nepal'
        }
    },
    {
        _id: 'guide12',
        name: 'Ritesh Bista',
        image: guide12,
        tag : 'localguide',
        speciality: 'Village Tours, Homestay Experience',
        degree: 'BA in Rural Development',
        experience: '5 years',
        about: 'Ritesh promotes village tourism and gives guests a real taste of rural Nepali life through immersive experiences.',
        fees: 2400,
          location:['mustang,pokhara,kathmandu,chitwan'],
        language: ['Nepali,English ,german'],
        address: {
            line1: 'Ghale Gaun',
            line2: 'Lamjung, Nepal'
        }
    },
    {
        _id: 'guide13',
        name: 'Sharmila Thakuri',
        image: guide13,
        tag: 'cultureguide',
        speciality: 'Festival Tours, Local Life',
        degree: 'MA in Culture Studies',
        experience: '4 years',
        about: 'Sharmila is an expert in guiding tourists through Nepal’s vibrant festivals and understanding local customs.',
        fees: 2000,
         location:['mustang, manag,pokhara,kathmandu,chitwan'],
        language: ['Nepali,English'],
        address: {
            line1: 'Basantapur',
            line2: 'Kathmandu, Nepal,Hindi'
        }
    },
    {
        _id: 'guide14',
        name: 'Tek Bahadur Magar',
        image: guide14,
        tag: 'advantureguide',
        speciality: 'Rafting, Kayaking Guide',
        degree: 'Certified Whitewater Guide',
        experience: '8 years',
        about: 'Tek is an experienced rafting guide navigating Trishuli and Seti rivers with safety and thrill combined.',
        fees: 3200,
        location:['mustang, manag,pokhara,kathmandu'],
        language: ['Nepali,English'],
        address: {
            line1: 'Mugling',
            line2: 'Chitwan, Nepal'
        }
    }
];

   
