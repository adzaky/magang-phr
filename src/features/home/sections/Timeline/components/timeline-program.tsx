import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { timelineProgramData } from "@/datas";

const TimelineProgram = () => {
  return (
    <Timeline positions="responsive">
      {timelineProgramData.map(({ id, title, desc }) => (
        <TimelineItem key={id} status="done">
          <TimelineHeading
            side={`${id % 2 === 0 ? "right" : "responsive"}`}
            className={`${id % 2 === 0 ? "pl-2 text-blue-500" : "pr-2 text-yellow-500"} mt-4 rounded-t-3xl bg-white p-4 text-lg font-semibold md:mt-0`}
          >
            {title}
          </TimelineHeading>
          <TimelineDot status="done" className="border-4 border-yellow-400 bg-gray-400" />
          <TimelineLine done className="bg-gray-400" />
          <TimelineContent
            side={`${id % 2 === 0 ? "right" : "responsive"}`}
            className="h-full rounded-b-3xl bg-white px-4 pb-4 shadow-md"
          >
            {desc}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineProgram;
