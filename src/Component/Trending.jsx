/* eslint-disable react/prop-types */
const Trending = ({toggle}) => {
  const trendingShows = [
    { id: 1, rank: "1", title: "Fullmetal Alchemist: Brotherhood", image: "https://i.ebayimg.com/00/s/MTUwMFgxMDAw/z/2BAAAOSwOMRgdEcE/$_57.JPG?set_id=8800005007", status: "END", plays: "1048B", episodes: 60 },
    { id: 2, rank: "2", title: "Gintama (2017)", image: "https://m.media-amazon.com/images/I/718n56hyUQL._AC_UF1000,1000_QL80_.jpg", status: "On Going", plays: "80B", episodes: 120 },
    { id: 3, rank: "3", title: "Attack on Titan", image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg", status: "On Going", plays: "900B", episodes: 75 },
    { id: 4, rank: "4", title: "One Piece", image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg", status: "On Going", plays: "1000B", episodes: 1000 },
    { id: 5, rank: "5", title: "Demon Slayer", image: "https://m.media-amazon.com/images/I/61h+Pf4kNOL._AC_UF1000,1000_QL80_.jpg", status: "On Going", plays: "800B", episodes: 50 },
    { id: 6, rank: "6", title: "Naruto Shippuden", image: "https://cdn.myanimelist.net/images/anime/5/17407l.jpg", status: "END", plays: "850B", episodes: 500 },
    { id: 7, rank: "7", title: "Steins;Gate", image: "https://cdn.myanimelist.net/images/anime/5/73199l.jpg", status: "END", plays: "600B", episodes: 24 },
     { id: 9, rank: "8", title: "Death Note", image: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg", status: "END", plays: "700B", episodes: 37 },
    { id: 10, rank: "9", title: "My Hero Academia", image: "https://cdn.myanimelist.net/images/anime/10/78745l.jpg", status: "On Going", plays: "650B", episodes: 88 },
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
      <h2 className="text-white text-2xl mb-4 ">Trending</h2>
      <div className="flex overflow-x-scroll">
        {trendingShows.map(show => (
          <div  onClick={()=>toggle()} key={show.id} className="relative   hover:bg-opacity-10 hover:bg-gray-500 rounded-lg p-2 w-60 min-w-60 h-96">
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
              <img src={show.image} alt={show.title} className="w-full h-72 object-cover overflow-clip rounded-lg  relative " />
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
