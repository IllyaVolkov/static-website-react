import { ReactNode } from "react";

type CardProps = {
  num: string;
  title: string;
  children?: ReactNode;
};

const FeaturesCard = ({ num, title, children }: CardProps) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full bg-secondary text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center" id="features">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-25">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            <b className="text-secondary-2">IGNITE</b> Consulting Workflow
          </h2>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center">
            A comprehensive guide on how we achieve effective behavior change and health innovation
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          <div className="relative">
            <FeaturesCard num="STEP 1" title="Identify key stakeholders">
              <p className="leading-loose">We engage with relevant parties to understand their needs and expectations, ensuring a collaborative approach from the start.</p>
            </FeaturesCard>
            <img
              src={"/work/arrow.svg"}
              width={240}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[8.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <FeaturesCard
              num="STEP 2"
              title="Conduct thorough assessments"
            >
              <p className="leading-loose">We evaluate current processes and health metrics to identify gaps and opportunities for improvement.</p>
            </FeaturesCard>
            <img
              src={"/work/arrow.svg"}
              width={240}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[8.5rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <FeaturesCard num="STEP 3" title="Develop tailored strategies">
              <p className="leading-loose">We develop specific action plans based on assessments that align with stakeholder needs and desired outcomes for health promotion.</p>
            </FeaturesCard>
            <img
              src={"/work/arrow.svg"}
              width={240}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[8.5rem] xl:block"
            />
          </div>
          <div className="relative">
            <FeaturesCard num="STEP 4" title="Implement solutions collaboratively">
              <p className="leading-loose">We work alongside stakeholders to put strategies into action, ensuring adaptability throughout the process.</p>
            </FeaturesCard>
            <img
              src={"/work/arrow.svg"}
              width={240}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[8.5rem] xl:block"
            />
          </div>
          <FeaturesCard num="STEP 5" title="Monitor and evaluate outcomes">
            <p className="leading-loose">We continuously assess the effectiveness of implemented strategies to refine and adjust as necessary for sustained success.</p>
          </FeaturesCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
