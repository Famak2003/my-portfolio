import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero";
import SelectedWork from "./components/work/SelectedWork";
import NextJsIcon from "@/public/svg/NextJsIcon";
import NestJsIcon from "@/public/svg/NestJsIcon";
import SequeliseIcon from "@/public/svg/SequeliseIcon";

export default function Page() {
    



    const techStack = [
    {
        header: "React JS",
        writeup: "Architecting modular, high-performance web applications with a focus on state management and reusable UI components.",
        icon: () => <img className="cardIcon" src={'/icons8-react-100.png'} alt="React" />
    },
    {
        header: "Next JS",
        writeup: "Leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) to build SEO-friendly, blazing-fast web experiences.",
        icon: () => <NextJsIcon size={40}/>
    },
    {
        header: "TypeScript",
        writeup: "Enhancing code reliability and maintainability through strict typing, ensuring scalable and error-free development cycles.",
        icon: () => <img className={"cardIcon"} src={'/typescript-100.png'} alt="TypeScript" />
    },
    {
        header: "JavaScript",
        writeup: "Mastering core ES6+ concepts to create interactive, dynamic user experiences with efficient asynchronous logic.",
        icon: () => <img className={"cardIcon"} src={'/icons8-javascript-100.png'} alt="JavaScript" />
    },
    {
        header: "React Native",
        writeup: "Building cross-platform mobile applications that deliver native performance and seamless 60fps animations.",
        icon: () => <img className={"cardIcon"} src={'/icons8-react-native-100.png'} alt="React Native" />
    },
    {
        header: "Mobile Development",
        writeup: "Designing responsive, touch-optimized interfaces tailored for both iOS and Android platform standards.",
        icon: () => <FontAwesomeIcon className="text-white text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px]" icon={faMobileAlt} />
    },
    {
        header: "Node JS",
        writeup: "Developing scalable, event-driven server-side logic capable of handling high-concurrency requests efficiently.",
        icon: () => <img className={"cardIcon"} src={'/icons8-nodejs-100.png'} alt="Node" />
    },
    {
        header: "Express JS",
        writeup: "Crafting robust RESTful APIs and middleware architectures to facilitate secure and fast data communication.",
        icon: () => <img className={"cardIcon"} src={'/icons8-express-js-80.png'} alt="Express" />
    },
    {
        header: "Nest JS",
        writeup: "Implementing enterprise-grade backend systems using modular architecture and dependency injection for clean code.",
        icon: () => <NestJsIcon/>
    },
    {
        header: "MySQL",
        writeup: "Managing relational data with optimized indexing, complex queries, and ACID-compliant transaction handling.",
        icon: () => <FontAwesomeIcon className="text-white text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px]" icon={faDatabase} />
    },
    {
        header: "Sequelize",
        writeup: "Simplifying database interactions through Object-Relational Mapping (ORM) and automated schema migrations.",
        icon: () => <SequeliseIcon/>
    },
    {
        header: "UI/UX Design",
        writeup: "Translating complex user requirements into intuitive, aesthetically pleasing, and accessible interface designs.",
        icon: () => <img className={"cardIcon"} src={'/icons8-windows-10-personalization-100.png'} alt="UI/UX Design" />
    },
];

  return (
        <main className=" flex flex-col gap-10 items-center text-textGray min-h-[100dvh] h-fit w-full ">
            <Hero />
            <SelectedWork />
            <div id="tech-stack" className=" scroll-mt-[80px] flex flex-col justify-center items-center gap-5 py-14 section w-full bg-bgBlack ">
                <h2 className=" text-[34px] mobile:text-[48px] font-bold text-accent dark:text-brightRed "> Arsenal Wall </h2>
                <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-x-10 gap-y-10 gap-10 w-full max-w-5xl ">
                    {
                        techStack.map((obj) => (
                            <li key={obj.header} className=" w-full sm:w-auto ">
                                <Card obj={obj} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main> 
  );
}
