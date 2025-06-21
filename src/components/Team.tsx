import { useState, ReactNode } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type CardProps = {
  imgSrc: string;
  title: string;
  name: string;
  expanded: boolean;
  onClick: () => void;
  fullWidth: boolean;
  children?: ReactNode;
};

const TeamCard = ({
  imgSrc,
  name,
  title,
  expanded,
  onClick,
  fullWidth,
  children,
}: CardProps) => {
  return (
    <div
      className={`relative flex flex-col gap-1 rounded-xl md:py-10 team-card md:cursor-pointer transition-all duration-300 shadow ${
        expanded
          ? "bg-white shadow-2xl scale-105 z-10"
          : "bg-transparent"
      } ${expanded && fullWidth ? "col-span-full" : ""}`}
      onClick={onClick}
      style={{
        minHeight: expanded ? 320 : undefined,
        gridColumn: expanded && fullWidth ? "1 / -1" : undefined,
      }}
    >
      <img
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <a target="_blank">
          <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </a>
        <a target="_blank">
          <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </a>
      </div>
      {expanded && (
        <div className="mt-6 px-4 py-3 text-left text-gray-700 text-sm sm:text-base border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

const teamMembers = [
  {
    imgSrc: "/team/1.jpg",
    name: "Madalina Jäger (PhD)",
    title: "Health Psychologist",
    info: (
      <>
        <p>Madalina Jäger is a health professional with a PhD in Applied Health Psychology and over 13 years of experience in health promotion, behavior change, and digital health interventions. She has expertise in developing and evaluating psychosocial and self-management interventions, with strong competencies in project management, stakeholder collaboration, and mixed-method research. She is passionate about using evidence-based approaches to address real-world health challenges in dynamic, multidisciplinary environments.</p>
        <p>Madalina is a core member of <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Science at the University of Southern Denmark (SDU). Her research focuses on health promotion, behavior change theories and techniques, and the development and evaluation of complex interventions.</p>
        <p>Her commitment to international collaboration is evident through her work with UK academia and partnerships with global institutions. She is dedicated to bridging disciplinary boundaries to develop contextually relevant solutions with global applicability.</p>
      </>
    ),
  },
  {
    imgSrc: "/team/2.jpg",
    name: "Chiara Cimenti (MSc)",
    title: "PhD Fellow",
    info: (
      <>
        <p>Chiara Cimenti is a PhD fellow at the University of Southern Denmark (SDU) and a member of <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Science. She holds a Master's degree in Global Public Health from the University of Copenhagen (2023), specializing in behavioral science. Her research focuses on school-based interventions, physical activity promotion, children’s well-being, motivation theory, engagement strategies, and behavior change maintenance. She also teaches courses on behavior change interventions, strategies, and theories.</p>
        <p>Chiara has worked on projects within and beyond academia in Denmark and internationally. In early 2025, she is supporting the <strong>Human Behaviour Change Project</strong>, led by University College London, which aims to advance the field of behavioral science. Before entering academia, she worked with international organizations such as WHO Healthy Cities, the World Diabetes Foundation, and DanChurchAid. Additionally, as a certified health coach, she has worked independently to help individuals adopt healthier lifestyles.</p>
        <p>Fluent in Danish and English, with Italian as her mother tongue, Chiara is passionate about applying rigorous methodologies to develop practical, evidence-based strategies. She welcomes collaboration to create behaviorally informed solutions that drive change.</p>
      </>
    ),
  },
  {
    imgSrc: "/team/3.jpg",
    name: "Alexandre Mazéas (PhD)",
    title: "Researcher",
    info: (
      <>
        <p>Dr. Alexandre Mazéas is a researcher and consultant in behavioral science at the University of Southern Denmark (SDU), working within <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Science. An expert in digital health and behavior change, his research explores the psychological mechanisms underlying long-term behavior change and the development of digital therapies that promote physical activity. His work emphasizes <strong>gamification</strong>, integrating game elements into everyday life to encourage and sustain healthy behaviors.</p>
        <p>Dr. Mazéas holds a PhD in Sports Sciences and Behavioral Medicine from the University of Grenoble Alpes, France (2023). He has published pioneering studies on gamification for physical activity promotion in top-tier scientific journals and has received multiple awards for his presentations at international conferences.</p>
        <p>Renowned for fostering partnerships between academia and industry, Dr. Mazéas is committed to translating innovations into real-world solutions. He is also a lecturer at several international universities and speaks to corporate audiences on behavioral change, digital health, and scientific innovation. Additionally, he consults for companies on the development and evaluation of digital medical devices and innovations.</p>
      </>
    ),
  },
  {
    imgSrc: "/team/4.jpg",
    name: "Kristina Pfeffer",
    title: "PhD Fellow",
    info: (
      <>
        <p>Kristina Pfeffer is a PhD fellow at the University of Southern Denmark (SDU) and a member of <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Science. Her PhD research focuses on behavioral science, long-term behavior maintenance, physical activity promotion, behavior change techniques, and motivational theories.</p>
        <p>She completed her BSc and MSc in Psychology of Sport and Exercise at the University of Roehampton, London, UK. She holds a <strong>Prince2 certification in project management</strong> and has previously worked as a project manager. Additionally, she has experience as a <strong>sport psychology consultant</strong>, working with elite athletes on high-performance strategies. She has presented internationally on high performance both in sports and business settings.</p>
        <p>Before transitioning into academia, Kristina was a professional athlete and applied high-performance strategies in her own career. She has collaborated with <strong>WHO</strong>, assisting in organizing an international academic conference in Qatar.</p>
        <p>Bilingual in Danish and English, Kristina brings a strong international perspective to her research.</p>
      </>
    ),
  },
  {
    imgSrc: "/team/5.jpg",
    name: "Cecilie Thøgersen-Ntoumani (PhD)",
    title: "Professor of Physical Activity & Health Behaviour",
    info: (
      <>
        <p>Dr. Cecilie Thøgersen-Ntoumani is a Professor of Physical Activity and Health Behaviour at the University of Southern Denmark (SDU) and a co-Director of <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Change. She received her PhD in Exercise and Health Sciences from the University of Bristol (UK) in 2003 and has held academic positions in the UK, Australia, and Denmark.</p>
        <p>Her research spans <strong>physical activity, mental health, body image, motivation, workplace well-being, aging, and gender</strong>, focusing on the psychological and social factors influencing behavior change and well-being. Her work has had a <strong>significant impact beyond academia</strong>, shaping policy and professional practice across industries.</p>
        <p>Dr. Thøgersen-Ntoumani’s research projects and publications can be accessed <a href="https://portal.findresearcher.sdu.dk/en/persons/cecilie-th%C3%B8gersen-ntoumani" style={{color: "var(--text-color)", textDecoration: "underline"}} target="_blank">here</a>, and her work’s influence on policy can be found <a href="https://policyprofiles.sagepub.com/profile/15182/cecilie-thogersen-ntoumani" style={{color: "var(--text-color)", textDecoration: "underline"}} target="_blank">here</a>. She provides consultancy services and welcomes collaboration opportunities where her expertise aligns.</p>
      </>
    ),
  },
  {
    imgSrc: "/team/6.png",
    name: "Nikos Ntoumanis (PhD)",
    title: "Professor of Motivation Science",
    info: (
      <>
        <p>Dr. Nikos Ntoumanis is a Professor of Motivation Science at the University of Southern Denmark (SDU) and a Chair in Health Sciences at the Danish Institute of Advanced Study (DIAS). He is also a co-Director of <strong>DRIVEN</strong>, the Danish Centre for Motivation and Behaviour Change. He received his PhD in Medical Sciences from the University of Exeter (UK) in 1999 and is a Chartered Psychologist with the British Psychological Society. Since 1998, he has held academic positions in the UK, Australia, and Denmark.</p>
        <p>His research focuses on the <strong>personal and contextual factors that promote motivation for sustained behavior change and psychological well-being.</strong> His diverse portfolio includes work in <strong>health, climate, education, and workplace motivation.</strong></p>
        <p>Examples of his research projects and publications can be found <a href="https://portal.findresearcher.sdu.dk/en/persons/nntoumanis" style={{color: "var(--text-color)", textDecoration: "underline"}} target="_blank">here</a>, and citations of his work in policy documents are available <a href="https://policyprofiles.sagepub.com/profile/15162/prof.-nikos" style={{color: "var(--text-color)", textDecoration: "underline"}} target="_blank">here</a>.</p>
        <p>Dr. Ntoumanis has consulted for organizations such as <strong>Les Mills International, the Australian Heart Foundation, and Primary Health Care Trusts in the UK.</strong> He welcomes new consultancy and collaboration opportunities.</p>
      </>
    ),
  },
];

const Team = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div
        className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16"
        style={{ position: "relative" }}
      >
        {teamMembers.map((member, idx) => (
          <TeamCard
            key={member.name}
            imgSrc={member.imgSrc}
            name={member.name}
            title={member.title}
            expanded={expandedIndex === idx}
            onClick={() => handleCardClick(idx)}
            fullWidth={expandedIndex === idx}
          >
            {member.info}
          </TeamCard>
        ))}
      </div>
    </section>
  );
};

export default Team;