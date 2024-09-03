import Link from "next/link";
import NavBar from "../components/NavBar";
import Contacts from "@/components/Contacts";
import CursorFollow from "@/components/CursorFollow";
import ProjectsCard from "@/components/ProjectsCard";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <CursorFollow />
      <div className="lg:flex lg:justify-center bg-background antialiased">
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Link href={"/"}>
              <h1 className="lg:text-5xl text-4xl font-bold text-primary tracking-wide">
                Rohith Achar
              </h1>
            </Link>
            <h2 className="mt-4 text-lg font-medium text-primary">
              A full stack developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              I am a BCA graduate with a great passion for coding.
            </p>
            <button className="text-accent bg-accent/10 rounded-lg px-4 py-2 mt-6 hover:bg-accent/5 border border-accent/70">
              Download CV
            </button>
            <NavBar />
          </div>
          <Contacts />
        </div>

        <main className="bg-background lg:w-1/2 lg:py-24">
          <div className="h-1"></div>
          <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
            <h2 className="lg:hidden text-slate-300 text-2xl font-semibold mt-12 mb-4">
              About
            </h2>
            <div className="text-slate-400">
              <span className="font-semibold text-slate-300"></span>
              <p className="mb-4">
                Back in my childhood, I developed a passion for{" "}
                <span className="font-semibold text-slate-300">gaming</span>,
                often tweaking the graphics settings to fix lag and enhance the
                experience. This early interest in technology led me to pursue a{" "}
                <span className="font-semibold text-slate-300">BCA</span>{" "}
                degree, where I started learning the basics of programming.
                However, I faced challenges in solving coding problems during my
                second year. Determined to improve, I enrolled in the{" "}
                <span className="font-semibold text-slate-300">
                  Wipro TalentNext Program
                </span>
                , where I gained valuable insights into problem-solving
                approaches.
              </p>
              <p className="mb-4">
                Fast forward to today, I’m immersed in the world of{" "}
                <span className="font-semibold text-slate-300">
                  web development
                </span>
                , and I’m truly enjoying the process of building and refining my
                skills. My journey has taught me the importance of{" "}
                <span className="font-semibold text-slate-300">
                  perseverance and continuous learning
                </span>
                , and I’m excited about where this path will lead.
              </p>
              <p className="mb-4">
                When I'm not coding, you'll find me gaming, exploring new
                technologies, or diving into the latest web development trends.
              </p>
            </div>
          </section>
          <section id="education" className="">
            <div className="lg:h-20"></div>
            <h2 className="lg:hidden text-slate-300 text-2xl font-semibold mt-12">
              Education
            </h2>
            <div className="flex lg:gap-10 gap-4 hover:bg-secondary/5 lg:p-4 pt-4 rounded-lg mt-2 hover:border hover:border-accent/10 border border-accent/0">
              <p className="text-slate-500">2021 - 2024</p>
              <div>
                <p className="text-slate-300 font-medium text-lg mb-2">
                  Bachelor of Computer Application
                </p>
                <p className="text-slate-400 text-sm">
                  asdjlksad sdalksdjksal asdlkjsadlkasjd asdlkjasdkja
                </p>
              </div>
            </div>
            <div className="flex lg:gap-10 gap-4 hover:bg-secondary/5 lg:p-4 pt-4 rounded-lg mt-2">
              <p className="text-slate-500">2021 - 2024</p>
              <div>
                <p className="text-slate-300 font-medium text-lg mb-2">
                  Bachelor of Computer Application
                </p>
                <p className="text-slate-400 text-sm">
                  asdjlksad sdalksdjksal asdlkjsadlkasjd asdlkjasdkja
                </p>
              </div>
            </div>
            <div className="flex lg:gap-10 gap-4 hover:bg-secondary/5 lg:p-4 pt-4 rounded-lg mt-2 hover:border hover:border-accent/10 border border-accent/0">
              <p className="text-slate-500">2021 - 2024</p>
              <div>
                <p className="text-slate-300 font-medium text-lg mb-2">
                  Bachelor of Computer Application
                </p>
                <p className="text-slate-400 text-sm">
                  asdjlksad sdalksdjksal asdlkjsadlkasjd asdlkjasdkja
                </p>
              </div>
            </div>
          </section>
          <section id="projects" className="">
            <h2 className="lg:hidden text-slate-300 text-2xl font-semibold lg:mt-8 mt-12 lg:mb-4">
              Projects
            </h2>
            <div className="lg:h-20"></div>
            <ProjectsCard />
            <Form />
          </section>
        </main>
      </div>
    </div>
  );
}
