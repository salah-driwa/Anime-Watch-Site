const ContinueWatching = () => {
  const shows = [
    { id: 1, title: "Mushoku Tensei: Jobless Reincarnation", image: "https://resizing.flixster.com/wQwq3e6kGta1ZRHld82YOpNK_fA=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19354923_i_h10_aa.jpg", episode: "EP 23", time: "16:32", updated: true, progress: 70 },
    { id: 2, title: "Bleach: Thousand Year Blood War", image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24090589/BLS01_135_t6_1200x630.jpg?quality=90&strip=all&crop=0,0.13712291199202,100,99.725754176016", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
    { id: 3, title: "Viland Sega S2", image: "  https://m.economictimes.com/thumb/msid-101140242,width-1600,height-900,resizemode-4,imgsize-48556/will-there-be-vinland-saga-season-3-release-date-cast-plot-and-all-we-know-of-the-manga-series.jpg", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
    { id: 4, title: "Jujutsu Kaisen S2", image: " https://sm.ign.com/t/ign_in/screenshot/default/f8tef4ubsaapco9_cmm4.600.jpg", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
   
  ];
  return (
    <div className="p-4">
      <h2 className="text-white text-2xl mb-4">Continue Watching</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {shows.map(show => (
          <div key={show.id} className="relative rounded-lg p-2 min-w-60 w-60">
            <div className="relative w-full">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
              
              <img src={show.image} alt={show.title} className="w-full h-32 object-cover rounded-lg" />
              
              {/* Centered progress bar */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 h-0.5 bg-gray-700 rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: `${show.progress}%` }}></div>
              </div>
              
              {show.updated && (
                <span className="absolute top-2 right-1 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  Updated
                </span>
              )}
            </div>
            <h3 className="text-white mt-2">{show.title}</h3>
            <p className="text-gray-400 text-sm">Watch until {show.episode}, {show.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
