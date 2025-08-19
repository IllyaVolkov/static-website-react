const CoreFeatures = () => {
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1 items-center">
        <span className="text-secondary uppercase block font-semibold tracking-widest">
          CORE FEATURES
        </span>
        <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
          We are your partner in evidence-based solutions. 
        </h2>
        <p className="text-lg leading-loose">
          Whatever behaviour you are trying to change,  <b className="text-secondary">IGNITE</b> will help you get there.
        </p>
        <a href="#features" className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-secondary hover:border-secondary hover:bg-secondary hover:shadow-secondary hover:shadow-2xl rounded-full">
          Explore
        </a>
      </div>

      <div className="flex-1 relative w-full flex flex-col items-center">
          <img
            src={"/features/core-features.jpeg"}
            width={300}
            height={300}
            alt="core features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
      </div>
    </section>
  );
};

export default CoreFeatures;
