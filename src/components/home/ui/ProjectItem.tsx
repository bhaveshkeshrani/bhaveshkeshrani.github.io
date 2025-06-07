import type { IProjectItem } from "@/types";
import Column from "@/components/core/Column";
import BulletedText from "@/components/common/bulleted-text";

const ProjectItem = ({ data }: { data: IProjectItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        {/* <p className="text-lg/6 font-semibold">{data.designation}</p> */}

        {data.githubUrl ? (
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--textColorLight)] text-base/6 font-medium hover:text-primary transition"
          >
            @{data.title}
          </a>
        ) : (
          <p className="text-[var(--textColorLight)] text-base/6 font-medium">
            @{data.title}
          </p>
        )}
      </Column>

      <div className="w-full flex flex-col gap-2 relative mt-0 md:mt-8">
        {data.description.map((desc, i) => {
          return (
            <BulletedText key={`exp-desc-${i}`}>
              <p className="text-base/6 font-normal">{desc}</p>
            </BulletedText>
          );
        })}
      </div>
    </Column>
  );
};

export default ProjectItem;
