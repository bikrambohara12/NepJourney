


import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const originalBlogs = [
  {
    title: "Skip the Queue: Off-Beat Himachal",
    date: "30 March, 2025",
    description: "Manali, Kufri, Shimla, etc., have now become too mainstream...",
    image: "./nepal.png",
  },
  {
    title: "Trekking in Sikkim",
    date: "30 March, 2025",
    description: "Sikkim, a place less explored, and a natural bliss...",
    image: "./homeimage.jpg",
  },
  {
    title: "Top Foods of Himachal",
    date: "23 March, 2025",
    description: "Himachal shares a rich Pahadi cuisine that's unique...",
    image: "./home.jpg",
  },
  {
    title: "Ganga Aarti in Varanasi",
    date: "23 March, 2025",
    description: "Ganga Aarti is one of the most famous spiritual rituals...",
    image: "./nepal.png",
  },
  {
    title: "Kathmandu Adventure",
    date: "29 March, 2025",
    description: "Explore cultural richness and temples of Kathmandu...",
    image: "./home.jpg",
  },
];

// Clones for infinite loop
const blogs = [
  originalBlogs[originalBlogs.length - 1],
  ...originalBlogs,
  originalBlogs[0],
];

export default function Latest() {
  const scrollRef = useRef(null);
  const cardWidth = 320 + 16; // card width + gap
  let scrollTimeout = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      // Start on the first real card (index 1)
      scrollRef.current.scrollLeft = cardWidth;
    }
  }, );

  // Scroll one card smoothly
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Called when scrolling - debounce to detect scroll end
  const handleScroll = () => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;

      const maxScroll = cardWidth * (blogs.length - 2); // total scroll excluding clones
      const currentScroll = container.scrollLeft;

      // If scrolled to or before first clone (fake first card)
      if (currentScroll <= 0) {
        // Jump instantly to last real card
        container.style.scrollBehavior = "auto"; // disable smooth for jump
        container.scrollLeft = maxScroll;
        container.style.scrollBehavior = "smooth"; // restore smooth
      }
      // If scrolled to or past last clone (fake last card)
      else if (currentScroll >= maxScroll + cardWidth) {
        // Jump instantly to first real card
        container.style.scrollBehavior = "auto";
        container.scrollLeft = cardWidth;
        container.style.scrollBehavior = "smooth";
      }
    }, 100); // debounce time: 100ms after scroll stops
  };

  return (
    <div className="py-10 px-4 bg-gray-300">
      <h2 className="text-2xl font-bold text-center mb-2">
        Latest from{" "}
        <span className="underline decoration-yellow-500">NepJourney</span>
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Stay updated with our latest blogs. Dive into interesting stories,
        tips, and insights!
      </p>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-hidden scroll-smooth px-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {blog.description}
                </p>
                <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium flex items-center gap-1 hover:bg-yellow-300">
                  Read more <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
