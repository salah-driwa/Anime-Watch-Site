// eslint-disable-next-line react/prop-types
const ContinueWatching = ({toggle}) => {
  const shows = [
    { id: 1, title: "Mushoku Tensei: Jobless Reincarnation", image: "https://resizing.flixster.com/wQwq3e6kGta1ZRHld82YOpNK_fA=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19354923_i_h10_aa.jpg", episode: "EP 23", time: "16:32", updated: true, progress: 70 },
    { id: 2, title: "Bleach: Thousand Year Blood War", image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24090589/BLS01_135_t6_1200x630.jpg?quality=90&strip=all&crop=0,0.13712291199202,100,99.725754176016", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
    { id: 3, title: "Vinland Saga S2", image: "https://m.economictimes.com/thumb/msid-101140242,width-1600,height-900,resizemode-4,imgsize-48556/will-there-be-vinland-saga-season-3-release-date-cast-plot-and-all-we-know-of-the-manga-series.jpg", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
    { id: 4, title: "Jujutsu Kaisen S2", image: "https://sm.ign.com/t/ign_in/screenshot/default/f8tef4ubsaapco9_cmm4.600.jpg", episode: "EP 16", time: "12:00", updated: false, progress: 45 },
    { id: 5, title: "Spy x Family", image: "https://a.storyblok.com/f/178900/960x539/376c88f164/spy-x-family-wiki.jpg", episode: "EP 12", time: "10:30", updated: true, progress: 60 },
    { id: 6, title: "Chainsaw Man", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlFV1j_Bv_vPBxO2nIJoM7ipWNKr_rQsP_g&s", episode: "EP 8", time: "08:15", updated: false, progress: 30 },
    { id: 7, title: "Oshi no Ko", image: "https://m.media-amazon.com/images/M/MV5BZWY1MzI0NGUtMWUwZS00YmMzLWFjMTMtNzdjNzE5OTA1MTI5XkEyXkFqcGdeQXVyMTcwMjUwNTk0._V1_.jpg", episode: "EP 7", time: "11:45", updated: true, progress: 65 },
    { id: 8, title: "Tokyo Revengers S2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fxYsqHLF4x5OiyUquqbQti2IBg0h4td0Pg&s", episode: "EP 15", time: "13:20", updated: false, progress: 50 },
    { id: 9, title: "To Your Eternity", image: "https://m.media-amazon.com/images/S/pv-target-images/51cb33cb9ffb37bc2e15d7c532a318a045bb63ea52ae10c64c0053102bd671b0._SX1080_FMjpg_.jpg", episode: "EP 20", time: "14:50", updated: true, progress: 75 },
    { id: 10, title: "Dr. Stone S3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1LezKDywgvQgswyXbGS3x7lctsfq1iqPCA&s", episode: "EP 11", time: "09:10", updated: false, progress: 40 },
];

  return (
    <div className="p-4    w-full">
      
      <h2 className="text-white text-2xl mb-4">Continue Watching</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {shows.map(show => (
          <div key={show.id} onClick={()=>toggle()}  className="relative hover:bg-opacity-10 hover:bg-gray-500 rounded-lg p-2 min-w-60 w-60">
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
