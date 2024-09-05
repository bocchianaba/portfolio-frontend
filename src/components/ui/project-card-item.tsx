import { NextPage } from "next";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          >
            {props.imgSrc.map((img, index) => (
              <div key={index}>
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
            <h1>Principal Task:</h1>
            <ol>
              {props.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ol>
          </div>
          <div>
            <h1>Technologies used: {props.tech.join(", ")}</h1>
            <h1>Result: {props.category.join(", ")}</h1>
            <h1>Partner or third party: {props.thirdParty.join(", ")}</h1>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCardItem;
