

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[300px] rounded-[10px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/QDvfHbT/Relativity-The-Special-And-The-General-Theory.jpg" alt="Relativity-The-Special-And-The-General-Theory" border="0"
      className="max-w-sm rounded-lg shadow-2xl" width="250px" height="250px" />
    <div>
      <h1 className="text-5xl font-bold mb-7 w-2/3">Books to freshen up your bookshelf</h1>
     
      <button className="btn font-bold text-white bg-green-400 border-green-400 hover:bg-white hover:text-green-400 hover:border-green-400">View The Lists</button>
    </div>
  </div>
</div>
    );
};

export default Hero;

