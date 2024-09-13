import TimelineProgram from "./components/timeline-program";

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-gray-50">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-center px-6 py-8">
        <div className="mx-auto mb-8 w-fit">
          <h2 className="text-center text-lg font-medium text-blue-600 md:text-2xl">Timeline Program</h2>
          <div className="ml-auto h-1 w-2/3 place-self-end rounded-full bg-yellow-200"></div>
        </div>
        <TimelineProgram />
      </div>
    </section>
  );
};

export default TimelineSection;
