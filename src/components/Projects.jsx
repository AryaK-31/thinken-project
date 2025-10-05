const images = [
  "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
  "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
];

export default function Projects() {
  return (
    <div className="relative py-16 bg-red-200 overflow-hidden">
      
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-b from-red-800 to-transparent opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-b from-red-800 to-transparent opacity-40 pointer-events-none" />

      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-2">
          Projects
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mb-6"></div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 max-w-4xl mx-auto px-4">
          {images.map((src, index) => (
            <div key={index} className="w-full transform hover:scale-[1.02] transition duration-300 ease-in-out">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
