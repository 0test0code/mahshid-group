import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useTranslations } from "next-intl";

const Projects = () => {const t = useTranslations("Projects");
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        {t("ourProjects")}
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title={t('ModernNextPortfolio')}
          description={t('Des4Modern')}
        />
        <ProjectCard
          src="/CardImage.png"
          title={t('InteractiveWebsiteCards')}
          description={t('Des4Interactive')}
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title={t('SpaceThemed')}
          description={t('Des4SpaceThemed')}
        />
      </div>
    </div>
  );
};

export default Projects;
