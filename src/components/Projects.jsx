const images = [
  "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
  "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
];

export default function Projects() {
  return (
    <div>
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-4 pt-4">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 ">
          Projects
        </h2>
        <div className="w-16 h-1 bg-yellow-500"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {images.map((src, index) => (
            <div key={index} className="w-full">
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
