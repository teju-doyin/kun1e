import projectsData from "@/data/projects.json";
import { Project } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateStaticParams() {
  return projectsData.map((project: Project) => ({
    slug: project.slug,
  }));
}
export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((item: Project) => item.slug === slug);

  if (!project) return <div className="mt-44">project doesnt exist</div>;
  return (
    <div className="">
      <h2 className="mt-44">pathname:{project.title}</h2>
    </div>
  );
}
