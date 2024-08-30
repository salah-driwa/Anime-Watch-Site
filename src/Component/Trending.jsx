const Trending = () => {
  const trendingShows = [
    { id: 1, rank: "1", title: "Fullmetal Alchemist: Brotherhood", image: "https://i.ebayimg.com/00/s/MTUwMFgxMDAw/z/2BAAAOSwOMRgdEcE/$_57.JPG?set_id=8800005007", status: "END", plays: "1048B", episodes: 60 },
    { id: 2, rank: "2", title: "Gintama (2017)", image: "https://m.media-amazon.com/images/I/718n56hyUQL._AC_UF1000,1000_QL80_.jpg", status: "On Going", plays: "80B", episodes: 120 },
    { id: 3, rank: "3", title: "Attack on Titan", image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg", status: "On Going", plays: "900B", episodes: 75 },
    { id: 4, rank: "4", title: "One Piece", image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg", status: "On Going", plays: "1000B", episodes: 1000 },
    // Add more shows as needed...
  ];

  const getRankBackgroundColor = (rank) => {
    switch (rank) {
      case "1":
        return "#C09E29"; // Gold
      case "2":
        return "#686D72"; // Silver
      case "3":
        return "#CD7F32"; // Bronze
      default:
        return "#61605B"; // Gray
    }
  };
  

  return (
    <div className="p-4">
      <h2 className="text-white text-2xl mb-4">Trending</h2>
      <div className="flex overflow-x-scroll">
        {trendingShows.map(show => (
          <div key={show.id} className="relative rounded-lg p-2 w-60 min-w-60 h-96">
            {/* Rank Badge */}
            <div
    className="absolute w-10 h-10 z-50 top-7   flex items-center  rounded-r-full"
    style={{
      background: `linear-gradient(to right, #DFDFDD, ${getRankBackgroundColor(show.rank)})`
    }}
  >     <span className=" pl-4 "> {show.rank}</span>  
            </div>
          

            {/* Show Image */}
            <div className="relative">
              <img src={show.image} alt={show.title} className="w-full h-56 object-cover rounded-lg" />
              {/* Status with Gradient Background */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2 rounded-b-lg">
                <span className={`text-xs px-2 py-1 rounded-full ${show.status === "END" ? "bg-blue-500" : "bg-green-500"} text-white`}>
                  {show.status}
                </span>
              </div>
            </div>

            {/* Show Title and Plays/Episodes Info */}
            <h3 className="text-white mt-2">{show.title}</h3>
            <p className="text-gray-400 text-sm">{show.plays} Playing ・ {show.episodes} EPS</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;