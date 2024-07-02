import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import State from "@/components/State";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">software developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent-DEFAAULT">luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crefting elegant digital experience and I am proficient
              in various programming language and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-DEFAAULT rounded-full flex justify-center items-center text-accent-DEFAAULT text-base hover:bg-accent-DEFAAULT hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <State />
    </section>
  );
}
