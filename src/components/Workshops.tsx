const TOPICS = [
  "Empowering leadership styles: what they are, how to foster them, and their benefits",
  "How to build new good habits and how to break bad habits",
  "Psychological safety and high-performing teams",
  "Burnout prevention and sustainable performance",
  "Using gamification to drive health and wellness",
  "The science of staying motivated: optimizing behavioral interventions",
  "Wellbeing and movement at work",
];

const Workshops = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="workshops">
      <h2
        className="title text-center md:w-1/2 mx-auto"
        style={{ color: "var(--text-color)" }}
      >
        Workshop &amp; Talk Topics
      </h2>
      <p className="service-name mb-6">
        Below are example topics we can deliver as talks or workshops
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
        {TOPICS.map((topic) => (
          <li key={topic} className="flex items-start gap-3 text-sm sm:text-base">
            <span
              className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
              style={{ background: "var(--text-color)" }}
            />
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Workshops;
