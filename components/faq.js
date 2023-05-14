import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    "question": "What is SolidMeal and how does it work?",
    "answer": "SolidMeal is a mobile application that uses a K-nearest neighbours (KNN) algorithm to recommend recipes based on your health condition and dietary needs. When you sign up and input your health details, SolidMeal uses this information to suggest recipes that align with your specific dietary needs."
  },
  {
    "question": "Where does SolidMeal get its recipes?",
    "answer": "SolidMeal's recipe database is compiled from various sources, including online recipe databases, nutritionists, and dieticians. We ensure each ingredient's nutritional content is accurate to provide reliable recommendations."
  },
  {
    "question": "Can I update my health profile on SolidMeal?",
    "answer": "Yes, you can update your health profile at any time. This allows SolidMeal to adapt to your evolving health conditions and dietary needs."
  },
  {
    "question": "How does SolidMeal rank the recommended recipes?",
    "answer": "SolidMeal uses a ranking system that orders the recommended recipes based on their compatibility with your health profile. Factors considered in this ranking include the degree to which a recipe meets your dietary requirements, the simplicity of the recipe, and user feedback."
  },
  {
    "question": "Is SolidMeal free to use?",
    "answer": "Yes, SolidMeal is completely free to use. Our goal is to help individuals with dietary restrictions due to illness find suitable, healthy recipes."
  }
,  
  
  
  
  
];

export default Faq;