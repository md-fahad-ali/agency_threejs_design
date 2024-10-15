import React from "react";

export default function Test() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-[90rem] w-full mx-auto p-4 h-[100dvh] rounded-md grid-flow-dense">
        <div className="rounded-md relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-3 bg-zinc-800">
          1
        </div>
        <div className="rounded-md flex justify-center items-center relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-1 bg-zinc-800">
          <h1 className="text-7xl">Our Works</h1>
        </div>
        <div className="rounded-md relative min-h-36 grid-flow-dense col-span-1 md:col-span-2 row-span-1 md:row-span-3 bg-zinc-800">
          3
        </div>
        <div className="rounded-md relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-zinc-800">
          4
        </div>
        <div className="rounded-md relative min-h-36 grid-flow-dense col-span-1 md:col-span-4 row-span-1 md:row-span-3 bg-zinc-800">
          5
        </div>
        <div className="rounded-md relative min-h-36 grid-flow-dense col-span-1 md:col-span-4 row-span-1 md:row-span-3 bg-zinc-800">
          6
        </div>
      </div>
    </div>
  );
}
