type ServiceItemProps = {
  imgSrc: string;
  title: string;
  desc: string;
  reverse?: boolean;
};

const ServiceItem = ({ imgSrc, title, desc, reverse = false }: ServiceItemProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-10 mb-12`}>
      <div className="flex-1">
        <img
          src={imgSrc}
          alt={title}
          className="w-full max-w-[400px] max-h-[250px] h-auto rounded-lg object-contain mx-auto"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-left">{title}</h3>
        <p className="leading-loose text-center lg:text-left">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Behaviour Change Talks - Inspire and Motivate Your Team!",
      desc: "We deliver engaging, evidence-based talks on behaviour change tailored to your company or institution. Whether for a work retreat, staff training day, conference, or simply over a lunch meeting, our talks translate scientific insights into practical strategies your team can use immediately.",
      imgSrc: "/services/1.jpg",
      reverse: false
    },
    {
      title: "Tailored Workshops - Hands-On Learning for Real Results!",
      desc: "Our interactive workshops are designed around your organization's specific challenges and goals. We use proven methodologies to build skills, foster team collaboration, and address behaviour change topics relevant to your context.",
      imgSrc: "/services/2.jpg",
      reverse: true
    },
    {
      title: "Rapid Evidence Reviews - Fast, Actionable Insights!",
      desc: "Need to make informed decisions, fast? We conduct rapid reviews of the latest scientific evidence on your chosen topic, providing you with concise, actionable summaries to guide your next steps.",
      imgSrc: "/services/4.jpg",
      reverse: false
    },
    {
      title: "Project Consultancy - Expert guidance for your initiatives!",
      desc: "From research projects to organizational change efforts, we offer consultancy at every stage: from idea generation and project design to evaluation and implementation. Our support is flexible and tailored to your needs.",
      imgSrc: "/services/5.jpg",
      reverse: true
    },
    {
      title: "Implementation of Behaviour Change Strategies - From insight to action!",
      desc: "We don't just give you recommendations—we help you put them into practice. Our experts co-create and implement bespoke behaviour change strategies that fit your organization, ensuring sustainable impact.",
      imgSrc: "/services/6.jpg",
      reverse: false
    }
  ];

  return (
    <section className="relative container px-5 md:px-16 mx-auto py-16" id="services">
      <div className="text-center mb-16">
        <span className="service-name">SERVICES</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Our Services</h2>
        <p className="text-lg leading-loose max-w-4xl mx-auto">
          At IGNITE, we empower companies and organizations to achieve meaningful, sustainable behaviour change. 
          Drawing on evidence-based approaches from psychology and behavioural science, we offer bespoke services 
          designed to meet the unique needs of your business or institution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            imgSrc={service.imgSrc}
            title={`${index + 1}. ${service.title}`}
            desc={service.desc}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;