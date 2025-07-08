const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>You need change, </p>
          <p>we know how!</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          We empower people to make the changes they want!
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-secondary hover:border-secondary hover:bg-transparent hover:text-secondary rounded-full">
          <a target="_blank">
            Explore
          </a>
        </button>
      </div>
      <div className="w-full relative">
          <img
            src={"/hero.jpg"}
            width={1100}
            height={500}
            alt="hero img"
            className="object-contain mx-auto"
          />
      </div>
    </section>
  );
};

export default HeroSection;
