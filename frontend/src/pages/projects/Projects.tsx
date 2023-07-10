import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsList from "./project_pages/ProjectsList";
import PersonalSiteProject from "./project_pages/PersonalSiteProject";
import NotFound from "../not_found/NotFound";

function Projects() {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/personal-site" element={<PersonalSiteProject />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Projects;
