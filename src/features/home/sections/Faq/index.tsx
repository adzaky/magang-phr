import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/datas";

const FaqSection = () => {
  return (
    <section id="faq" className="bg-[#deeaf4]">
      <div className="mx-auto max-w-screen-xl px-6 py-4 md:py-10">
        <div className="mx-auto mb-8 w-fit">
          <h2 className="text-center text-lg font-medium text-blue-600 md:text-2xl">Frequently Asked Questions</h2>
          <div className="ml-auto h-1 w-4/5 place-self-end rounded-full bg-yellow-200"></div>
        </div>
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map(({ id, title, desc }) => (
              <AccordionItem key={id} value={`faq-${id}`} className="rounded-lg bg-white p-4">
                <AccordionTrigger className="py-2 text-start text-gray-700">{title}</AccordionTrigger>
                <AccordionContent className="pb-0 pt-1 text-gray-500">{desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
