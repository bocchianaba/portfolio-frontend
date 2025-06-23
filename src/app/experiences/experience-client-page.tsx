"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceClientPage() {
    return (
        <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
        <h1 className="page_title mt-32">Mes Expériences</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - présent"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BackpackIcon />}
            visible
          >
            <h3 className="vertical-timeline-element-title">
              Développeur Full Stack
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indépendant, Télétravail
            </h4>
            <p>Développement Full Stack, tests, déploiement</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - présent"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BackpackIcon />}
            visible
          >
            <h3 className="vertical-timeline-element-title">Ingénieur Logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Credix CAM, Elig Essono
            </h4>
            <p>
              Direction créative, Expérience utilisateur, Design visuel, Gestion
              de projet, conception, tests, Leadership d'équipe, Développement backend,
              résolution de problèmes
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
            <h3 className="vertical-timeline-element-title">Ingénieur Logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Megatecc, Yaoundé, Wada
            </h4>
            <p>Analyse, conception, développement frontend et déploiement</p>
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
              Développeur Full Stack
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Madia SARL, Biyem Assi
            </h4>
            <p>
              Web Design, Expérience utilisateur, Design visuel, SEO, Développement
              Frontend
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
            <h3 className="vertical-timeline-element-title">Ingénieur Logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kratos-Security - Yaoundé, Elig-Essono
            </h4>
            <p>
              Résolution de problèmes, expérience utilisateur, développement full stack, gestion
              de projet
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
            <h3 className="vertical-timeline-element-title">Ingénieur Logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indépendant - Yaoundé, Emana
            </h4>
            <p>
              Expérience utilisateur, web design, résolution de problèmes, planification, développement
              full stack
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
              Indépendant - Ngousso
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Développement Logiciel
            </h4>
            <p>Résolution de problèmes, développement Full Stack</p>
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
            <h3 className="vertical-timeline-element-title">Stage</h3>
            <h4 className="vertical-timeline-element-subtitle">
              AFRITECH - Yaoundé, Marché Centrale
            </h4>
            <p>Installation et configuration réseau, amélioration QoS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<BackpackIcon />}
            visible
          />
        </VerticalTimeline>
      </div>
    );
} 