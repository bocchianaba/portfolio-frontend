"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function FormationClientPage() {
    return (
        <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
        {/* Fond décoratif */}
        <svg className="absolute top-0 left-0 opacity-20 z-0" width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="150" cy="90" rx="140" ry="70" fill="currentColor" className="text-primary" />
        </svg>
        <div className="relative z-10 w-full flex flex-col items-center mt-10 pt-10">
          <h1 className="page_title mt-32">Mes Formations</h1>
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
              <h3 className="vertical-timeline-element-title">Diplôme d'Ingénieur</h3>
              <h4 className="vertical-timeline-element-subtitle">
                École Nationale Supérieure de Yaoundé, Melen
              </h4>
              <p>
                Étudiant en MSP pendant les 2 premières années, étudiant en informatique
                pendant les 4 années suivantes
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
              <h3 className="vertical-timeline-element-title">Niveau 1</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Université de Yaoundé 1, Ngoa Et Kelle
              </h4>
              <p>Étudiant en informatique</p>
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
                Baccalauréat, Probatoire, BEPC
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Institut Privé Zang Mebanga, Mimboman, Yaoundé
              </h4>
              <p>Études de la 5ème à la Terminale</p>
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
                Niveau 1 du Lycée
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Collège Catholique Père Monti, Mfou, Yaoundé
              </h4>
              <p>Étudiant en classe de 6ème</p>
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
                École Bilingue les Samaritains, Mimboman, Yaoundé
              </h4>
              <p>École Primaire</p>
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
              <h3 className="vertical-timeline-element-title">Élève</h3>
              <h4 className="vertical-timeline-element-subtitle">
                École Bilingue les Grillons, Mimboman, Yaoundé
              </h4>
              <p>Début de scolarité</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<BackpackIcon />}
              visible
            />
          </VerticalTimeline>
        </div>
      </div>
    );
} 