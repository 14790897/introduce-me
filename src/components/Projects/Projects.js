import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cookiesClerk from "../../Assets/Projects/cookiesclerk.jpg";
import paperAI from "../../Assets/Projects/paperAI.png";
import handwritingWeb from "../../Assets/Projects/handwritingWeb.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paperAI}
              isBlog={false}
              title="PaperAI"
              description="AI Writing: Interact with the AI to generate paper content, offering writing suggestions or answering questions.
Literature Search: Search for relevant papers on Semantic Scholar, arxiv, and PubMed based on keywords and integrate the findings into your paper.
Editing & Customization: Directly edit AI-generated content in the editor and adjust text style and layout with available tools."
              ghLink="https://github.com/14790897/paper-ai"
              demoLink="https://paperai.life"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwritingWeb}
              isBlog={false}
              title="handwritingWeb"
              description="Custom Fonts: Upload your own fonts or handwritten styles to generate unique handwriting.
Background Image: Upload or automatically generate background images to add a personalized touch to your handwritten text.
Adjustable Parameters: Control margins, character randomness, ink variations, and stroke rotations to fine-tune the handwriting appearance.
File Import & Preview: Extract text from files like PDFs or DOCs, preview the handwriting in real-time, and generate a full set of images or export as a PDF."
              ghLink="https://github.com/14790897/handwriting-web"
              demoLink="https://handwrite.14790897.xyz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookiesClerk}
              isBlog={false}
              title="CookiesClerk"
              description="Multi-Account Cookies Management: Manage cookies for multiple accounts on the same website, allowing simultaneous login to different accounts in the same browser.
Easy Operation: Save, load, and delete cookies for different accounts with ease, enabling efficient multi-account management.
Cleanup Functionality: One-click to clear cookies of closed accounts, keeping your browser organized and efficient.
Installation & Tutorial: Easily install the extension from the Chrome Web Store, with available online tutorials and support."
              ghLink="https://github.com/14790897/cookiesclerk"
              demoLink="https://chromewebstore.google.com/detail/cookiesclerk/njmcgckgojpcificfmkicgnlbocgdhke"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
