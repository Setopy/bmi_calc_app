import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

const AccordionDemo = () => (
    <div className="w-[80%] mx-auto space-y-4">
      {/* First Accordion - starts closed */}
      <Accordion.Root 
        type="single" 
        collapsible
        className="w-[80%] rounded-lg overflow-hidden shadow-md"
      >
        <Accordion.Item 
          value="item-1" 
          className="border-b border-gray-200 last:border-b-0"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between py-4 px-6 text-left font-medium text-gray-900 bg-[#ffffff] hover:bg-gray-100 transition-colors">
              <span>How can I check my height?</span>
              <div className="ml-2 h-5 w-5 flex items-center justify-center">
                <PlusIcon className="h-4 w-4 text-gray-600 group-data-[state=open]:hidden" />
                <MinusIcon className="h-4 w-4 text-gray-600 group-data-[state=closed]:hidden" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-white px-6 py-4 text-gray-700">
            Body Mass Index (BMI) is a numerical value calculated from your weight and height. 
            It provides a simple way to classify weight status that may indicate health risks.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
  
      {/* Second Accordion - starts closed */}
      <Accordion.Root 
        type="single" 
        collapsible
        className="w-[80%] rounded-lg overflow-hidden shadow-md"
      >
        <Accordion.Item 
          value="item-1" 
          className="border-b border-gray-200 last:border-b-0"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between py-4 px-6 text-left font-medium text-gray-900 bg-[#fffff] hover:bg-gray-100 transition-colors">
              <span>How is BMI calculated?</span>
              <div className="ml-2 h-5 w-5 flex items-center justify-center">
                <PlusIcon className="h-4 w-4 text-gray-600 group-data-[state=open]:hidden" />
                <MinusIcon className="h-4 w-4 text-gray-600 group-data-[state=closed]:hidden" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-white px-6 py-4 text-gray-700">
            BMI is calculated by dividing your weight in kilograms by the square of your height in meters. 
            The formula is: BMI = weight (kg) / (height (m))²
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );

// CSS animations (add to your global styles)
const styles = `
  @keyframes slideDown {
    from { height: 0 }
    to { height: var(--radix-accordion-content-height) }
  }
  @keyframes slideUp {
    from { height: var(--radix-accordion-content-height) }
    to { height: 0 }
  }
`;

export default AccordionDemo;