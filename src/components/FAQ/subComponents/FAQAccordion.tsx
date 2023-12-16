// Dependencies
import { Accordion, AccordionItem } from "@nextui-org/react";

// Local Files
import questions from "../assets/queries.json";

const FAQAccordion = () => {
  return (
    <div className="bg-white p-[5rem] flex flex-col justify-center items-center gap-[2rem]">
      <div className="text-center">
        <h1 className="font-['lilita_one'] text-[3rem]">FAQ</h1>
        <p className="text-default-500">We encourage your questions.</p>
      </div>
      <Accordion className="max-w-[60rem] font-['poppins']">
        {questions.map((queries, index) => (
          <AccordionItem
            key={index}
            aria-label={`Question ${index + 1}`}
            title={queries.question}
            className="py-[1rem] text-default-500 text-sm"
          >
            <div className="flex flex-col gap-[2rem]">
              {queries.answer.map((ans, index) => {
                if (ans.bullet) {
                  return (
                    <div className="flex flex-col gap-[1rem]">
                      <p>{ans.data.main}</p>
                      <ul className="px-[1rem] flex flex-col gap-[0.5rem]">
                        {ans.data.points.map((point, index) => (
                          <li key={index} className="list-disc list-inside text-justify">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return <p>{ans.data.main}</p>;
                }
              })}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
