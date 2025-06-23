import { NextPage } from "next";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import ImageModal from "./image-modal";
import { Project } from "@/lib/interface";

const ProjectCardItem: NextPage<Project> = (props: Project) => {
  const responsive = {
    desktop: {
      breakpoint: { max: Infinity, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImage = () => setModalIndex((prev) => (prev === 0 ? props.imgSrc.length - 1 : prev - 1));
  const nextImage = () => setModalIndex((prev) => (prev === props.imgSrc.length - 1 ? 0 : prev + 1));

  return (
    <div className="mx-5">
      <figure className="md:flex md:justify-center md:items-center bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
          <Carousel
            centerMode={true}
            // partialVisible={true}
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
          >
            {props.imgSrc.map((img, index) => (
              <div key={index} onClick={() => openModal(index)} className="cursor-pointer">
                <Image
                  src={img}
                  width={200}
                  height={200}
                  alt="Screenshots of Bocchi Anaba"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="md:w-1/2 pt-6 md:p-8 text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{props.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {props.role}
            </div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{props.purpose}</p>
          </blockquote>
          <div>
            <h1>Tâches principales :</h1>
            <ol>
              {props.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ol>
          </div>
          <div>
            <h1>Technologies utilisées : {props.tech.join(", ")}</h1>
            <h1>Résultat : {props.category.join(", ")}</h1>
            <h1>Partenaires ou tiers : {props.thirdParty.join(", ")}</h1>
          </div>
        </div>
      </figure>
      {modalOpen && (
        <ImageModal
          images={props.imgSrc}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default ProjectCardItem;
