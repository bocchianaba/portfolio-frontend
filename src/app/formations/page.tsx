"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {}

const FormationPage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title">My formation detailed</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2015 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Master degree</h3>
          <h4 className="vertical-timeline-element-subtitle">
            National Advanced School of Yaounde, Melen
          </h4>
          <p>
            student in MSP for the first 2 years, student in computer science
            for the 4 years later
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2014 - 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Level 1</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Yaounde 1, Ngoa Et Kelle
          </h4>
          <p>Student in computer science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2009 - 2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            Baccalaureat, Probatoire, BEPC
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Zang Mebanga Private Institute, Mimboman, Yaounde
          </h4>
          <p>Study from 5è to Terminal</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2008 - 2009"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">
            Level 1 of high School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Catholic College Père Monti, Mfou, Yaounde
          </h4>
          <p>Student in class of 6è</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2005-2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">CEP</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bilingual School les Samaritains, Mimboman, Yaounde
          </h4>
          <p>Primary School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2002-2005"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bilingual School les Grillons, Mimboman, Yaounde
          </h4>
          <p>Begining School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<BackpackIcon />}
          visible
        />
      </VerticalTimeline>
    </div>
  );
};

export default FormationPage;
