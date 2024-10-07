import React, { useRef } from "react";

export default function Part() {
  const container = useRef(null);
  return (
    <div ref={container}>
      <div className="h-screen top-0 flex flex-col justify-center items-center containerBox">
        <div
          className="flex flex-col semi:flex-row-reverse bg-zinc-700 w-[90%] h-[auto] sm:h-[80%] rounded-[30px] ss:rounded-[50px] items-center justify-between pl-[10px] semi:pr-[30px] pr-[10px] relative"
          style={{ top: `calc(-5vh + ${i * 25}px)` }}
        >
          <div className="flex justify-center items-center w-full semi:w-[50%] h-[45%] semi:h-full ss:mt-[10px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-[100%] h-[100%] flex justify-center items-center mt-[20px] ss:mt-0 "
            >
              <Image
                src={`${image}`}
                alt={title}
                className="w-[100%] h-[100%] object-cover md:h-[90%] rounded-3xl pb-[10px] sm:pb-0"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
          <div className="p-5 w-full semi:w-[50%] transition-all">
            <h5
              className={`${roboto.className} mb-2 flex-row sm:flex-col tracking-tight text-gray-900 dark:text-white`}
              style={{ fontSize: "clamp(2.5rem,6.1vw,6.5rem)" }}
            >
              {title}
            </h5>
            <p>{description}</p>

            <div className="flex gap-[10px] flex-wrap mt-7">
              {tags?.map((e, i) => (
                <p
                  key={i}
                  className="rounded-full p-[5px] px-[7px] border border-zinc-500"
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
