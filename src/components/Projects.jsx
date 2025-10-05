const images = [
  "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
  "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
];

export default function Projects() {
  return (
    <div className="relative py-16 bg-red-200 overflow-hidden bg-gradient-to-r from-cyan-950 to-black">
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-white-800 mb-2">
          Projects
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 max-w-4xl mx-auto px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                <span className="text-white text-lg font-semibold">
                  Project {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
