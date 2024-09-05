import { NextPage } from "next";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectCardItem: NextPage<Project> = (props: Project) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.imgSrc.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                width={400}
                height={400}
                className="rounded-full hidden md:block"
                alt="Screenshots of Bocchi Anaba"
              />
            </div>
          ))}
        </Carousel>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
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
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCardItem;
