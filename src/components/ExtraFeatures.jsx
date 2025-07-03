const features = [
  {
    title: 'Cultural Heritage',
    description: 'Discover Nepal’s UNESCO World Heritage Sites, temples, monasteries, and ancient cities rich in history.',
    color: 'bg-rose-100',
    icon: '⛪'
  },
  {
    title: 'Mountain Trekking',
    description: 'Trek through iconic trails like Everest Base Camp and Annapurna Circuit with breathtaking mountain views.',
    color: 'bg-indigo-100',
    icon: '👣'
  },
  {
    title: 'Wildlife & Nature',
    description: 'Explore national parks such as Chitwan and Bardia, home to rhinos, tigers, elephants, and rare birds.',
    color: 'bg-green-100',
    icon: '🏞️'
  },
  {
    title: 'Spiritual Journeys',
    description: 'Visit sacred places like Lumbini (birthplace of Buddha), Muktinath, and Pashupatinath for spiritual peace.',
    color: 'bg-green-100',
    icon: '🕉️'
  },
  {
    title: 'Mountain Flights',
    description: 'Enjoy panoramic flights over the Himalayas including Mount Everest and other majestic peaks.',
    color: 'bg-pink-100',
    icon: '✈️'
  },
  {
    title: 'Adventure Sports',
    description: 'Try paragliding, white water rafting, bungee jumping, and zip lining for an adrenaline rush.',
    color: 'bg-orange-100',
    icon: '🎾'
  },
  {
    title: 'Village Tours',
    description: 'Experience rural Nepali lifestyle, homestays, traditional farming, and local cuisine.',
    color: 'bg-purple-100',
    icon: '🏡'
  },
  {
    title: 'Festivals & Culture',
    description: 'Participate in vibrant festivals like Dashain, Tihar, Holi, and Indra Jatra to experience Nepali culture.',
    color: 'bg-blue-100',
    icon: '🎉'
  }
];

export default function NepalFeatures() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Discover Nepal's Unique Travel Features</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className={`rounded-xl shadow p-6 ${item.color} transition-transform transform hover:scale-105`}>
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
