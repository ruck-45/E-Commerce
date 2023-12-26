// Local Files
import questions from "../assets/queries.json";
import QuestionAccordion from "../../../globalSubComponents/QuestionAccordion";

const FAQAccordion = () => {
  return (
    <div className="bg-white px-[2rem] md:px-[5rem] py-[5rem] flex flex-col justify-center items-center gap-[2rem]">
      <div className="text-center">
        <h1 className="font-['lilita_one'] text-[3rem]">FAQ</h1>
        <p className="text-default-500">We encourage your questions.</p>
      </div>
      <QuestionAccordion className="max-w-[60rem]" questions={questions} varient="light" />
    </div>
  );
};

export default FAQAccordion;
