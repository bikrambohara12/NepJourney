
import GuideList from '../components/GuideList';

const Guides = () => {
  return (
    <div className="font-sans">
     
      <div className="relative h-150 w-full">
        <img
          src="/person1.jpg" 
          alt="Travel"
          className="absolute w-full h-full object-cover brightness-50 rounded-b-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold text-center px-2">
          Discover the Nepal with the best Traveller guide
        </div>
        

         <div className="px-4 py-6 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search Places, or Countries"
          className="w-full md:w-2/3 px-4 py-2 border rounded mb-4"
        />
        </div>
      </div>

      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search Places, or Countries"
          className="w-full md:w-2/3 px-4 py-2 border rounded mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {[
            'All',
            'Most experienced',
            'Most Popular',
            'Most Visited',
            'Top Review',
            'Recommended',
            'Boat tours',
            'Repeat Buyers',
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-200 text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Cards */}
      <GuideList />
    </div>
  );
};

export default Guides;
