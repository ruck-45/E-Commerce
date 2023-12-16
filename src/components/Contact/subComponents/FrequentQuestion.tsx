// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Local Files
import "./FrequentQuestion.css";
import questions from "../assets/frequetQuestions.json";
import QuestionAccordion from "../../../globalSubComponents/QuestionAccordion";

const FrequentQuestion = () => {
  return (
    <div className="flex flex-col md:flex-row fqBg p-[5rem] gap-[2rem] md:gap-[0rem]">
      <div className="md:w-[50%] flex flex-col gap-[1rem]">
        <h1 className="font-['lilita_one'] text-[2rem]">Frequently Asked Questions</h1>
        <p>
          Explore our FAQ section foar quick answers to common queries about our services. If you have specific
          questions or need further assistance, our support team is ready to help. We’re here to ensure you have the
          information you need for a smooth experience with us.
        </p>

        <ul className="list-disc list-inside text-justify">
          <li>What are your fees for different trading platforms?</li>
          <li>What investment strategies do you recommend for beginners?</li>
          <li>How do I open a brokerage account?</li>
        </ul>

        <Link to="../FAQ">
          <Button
            variant="shadow"
            color="danger"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.1rem]" />}
            className="max-w-[8rem] mt-[1rem]"
          >
            Learn More
          </Button>
        </Link>
      </div>

      <div className="md:w-[50%] md:ps-[2rem]">
        <QuestionAccordion className="dark" questions={questions} varient="splitted"/>
      </div>
    </div>
  );
};

export default FrequentQuestion;
