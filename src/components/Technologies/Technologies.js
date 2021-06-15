import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      - Front End: HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, React
      Hooks, Bootstrap, Styled Components, Responsive Web Design<br></br> - Back
      End: NodeJS, ExpressJS,NextJS <br></br>- Database: MongoDb, Basic SQL
      <br></br> - API: Rest - Testing: Unit Testing, Integration Testing{" "}
      <br></br>- Cloud: Heroku, Netlify, Vercel, Mongo Atlas <br></br>- Tooling:
      Git, GitLab, npm
      <br></br> - Methodologies: Agile, Scrum
      <br></br>- CI/CD: Github Action, Heroku
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
