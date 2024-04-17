import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';       

export default function VideoPlay() {
  return (
    <>
    
      <div className=" md:w-[950px] md:mb-[40px] mx-4  md:mx-auto hidden md:block">
        <h1 className="text-center my-4 font-bold text-2xl">
          A word from our Director
        </h1>

        <div className=" border rounded-md flex justify-center items-center">
          <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/a2D10uSWLoE?si=ThC0qcreylQtn8K2"
            className="rouned-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
}
