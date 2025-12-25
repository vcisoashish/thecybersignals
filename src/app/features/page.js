import { blogs } from "@/.velite/generated";

export const metadata = {
  title: "Features",
  description: "Discover the latest cybersecurity features, tools, and technologies that are shaping the digital security landscape.",
};

export default function Features() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Features
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Features & Tools
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Explore cutting-edge cybersecurity features, innovative tools, and emerging technologies that are revolutionizing digital security and protecting organizations worldwide.
            </p>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 mt-10 sm:mt-16 mx-5 sm:mx-10">
        <article className="col-span-1 row-span-2 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col items-start justify-end z-0 text-light">
            <div className="w-full flex justify-between items-center">
              <div className="inline-block py-1 sm:py-1.5 px-4 sm:px-6 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs sm:text-sm">
                Security Tools
              </div>
            </div>
            <h2 className="mt-4 font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Advanced Threat Detection
              </span>
            </h2>
            <p className="text-sm sm:text-base mt-2">
              AI-powered security solutions that identify and neutralize threats before they impact your systems.
            </p>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Encryption
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Zero-Trust Architecture
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Analytics
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Real-time Monitoring
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Automation
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Incident Response
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Cloud Security
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Multi-Cloud Protection
            </h2>
          </div>
        </article>
      </div>
    </main>
  );
}