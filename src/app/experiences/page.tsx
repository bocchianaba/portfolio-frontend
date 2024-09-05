"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {}

const ExperiencePage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title">My Experiences</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            An Individual, Remote
          </h4>
          <p>Full Stack Development, testing, Deployment</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Credix CAM, Elig Essono
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, conception, testing, Team Leading, Back Development,
            problem solving
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Megatecc, Yaounde, Wada
          </h4>
          <p>Analysis, conception, frontend development and deployment</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Madia SARL, Biyem Assi
          </h4>
          <p>
            Web Design, User Experience, Visual Design, SEO, Frontend
            Development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021-2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kratos-Security - Yaounde, Elig-Essono
          </h4>
          <p>
            Problem solving, user experience, full stack development, project
            management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            An Individual - Yaoundé, Emana
          </h4>
          <p>
            User Experience, web design, problem solving, planning, full stack
            development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            An Individual - Ngousso
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Development
          </h4>
          <p>problem solving, Full Stack development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">
            AFRITECH - Yaoundé, Marché Centrale
          </h4>
          <p>Network installation and configuration, QoS improving</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2002 - 2006"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        />
      </VerticalTimeline>
    </div>
  );
};

export default ExperiencePage;
