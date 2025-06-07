import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
// import ProjectList from "./ui/ProjectList";
// import projects from "@/data/projects";
import { Timeline } from "@/components/common/timeline";
import ProjectItem from "./ui/ProjectItem";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Recent Works</SectionTitle>

        <Timeline
          data={projects.map((exp, i) => ({
            title: exp.title,
            content: <ProjectItem key={`experience-${i}`} data={exp} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
