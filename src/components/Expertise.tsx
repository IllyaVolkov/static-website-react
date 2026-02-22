const Expertise = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <img
        src="/expertise.png"
        alt="expertise"

        className="drop-shadow-2xl md:mb-5 mb-3 rounded-2xl w-full max-w-[800px] h-auto mx-auto"
      />
      <p className="mx-auto mb-5 max-w-[800px] text-center text-sm italic leading-relaxed text-[var(--text-color-secondary)] md:text-base">
        We sit at the intersection of psychology, intervention design, and implementation—offering talks and workshops grounded in evidence and practice.
      </p>
    </section>
  );
};

export default Expertise;