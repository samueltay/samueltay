import React from "react";
import { Helmet } from "react-helmet";
import CodeBlock from "../../../components/code_block/CodeBlock";
import {
  GridContainer,
  PaperComponent,
} from "../../../components/grid/GridItem";

function ProjectsList() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Personal Website Project</title>
      </Helmet>
      <GridContainer maxWidth={"100%"}>
        <PaperComponent md={12}>
          <div>
            <h1>Personal Website</h1>
            <img
              src="/project_images/personal_site/homepage_screenshot.png"
              alt="homepage screenshot"
              width={"80%"}
              style={{
                display: "block",
                margin: "30px auto",
                boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p>
              I started this website to learn frontend software development as
              well as to create a place to document my projects and past
              experiences. Most of my previous experiences involved building
              backend software services and algorithms, so I was excited to
              build a simple, modern website from the ground up. I'm not
              expecting to write the best code or have the best architecture for
              this project, but I want to dive in and hack things together to
              implement all the different ideas I have in my head. Hopefully, my
              core software engineering intuitions will keep me from making such
              bad decisions early on that I am unable to continually build this
              into a more complex website.
            </p>

            <h2>Phase 1: Create a Public Website</h2>
            <p>
              The first decision to make was what language/framework to create
              my website in. I considered starting with a purely HTML/CSS static
              website, but I eventually wanted to build this site to host more
              complex applications, so I decided to choose one of the popular
              web frameworks that have large community support. For someone
              without any frontend experience, choosing a web framework felt
              like taking a shot in the dark, but after browsing a few articles,
              React seemed like a safe choice to start out with. It was one of
              the most popular frameworks and contained powerful features that
              were good enough for large companies like Facebook and Airbnb. The
              documentation for React is great, and there is a large library of
              components available from the community.
            </p>
            <p>
              Following the React official tutorials, I was able to get a basic
              React app up and running extremely quickly. The first step was to
              clear out all the boilerplate content and start laying out the
              foundation for my vision for a clean personal website. I wanted to
              have a navbar header with links to different pages, where I could
              organize my projects, experiences, and other pages. This was a
              good first feature to get familiar with React's components and how
              component heirarchies works. To begin with, I used the popular
              `react-router` library to manage multiple routes/pages. I created
              a page for my homepage and a catch-all page to display a "Page Not
              Found" message.
            </p>
            <CodeBlock
              code={`
  function App() {
    return (
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />{" "}
          </Routes>
        </div>
      </Router>
    );
  }
              `}
              language="javascript"
            />
          </div>

          <h2>Phase 2: Content and New Features</h2>

          <h2>Phase 3: Adding a Backend</h2>

          <p>
            <b>IN PROGRESS...</b>
          </p>
        </PaperComponent>
      </GridContainer>
    </div>
  );
}

export default ProjectsList;
