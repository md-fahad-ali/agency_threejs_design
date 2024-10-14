import React from "react";

export default function Test() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-6 max-w-7xl w-full mx-auto p-4 h-[100dvh] rounded-md grid-flow-dense">
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-3"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-1"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-2 row-span-1 md:row-span-3"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-1 md:row-span-2"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-4 row-span-1 md:row-span-3"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
        <div
          className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 md:col-span-4 row-span-1 md:row-span-3"
          style={{ backgroundColor: "#f5f5f5" }}
        ></div>
      </div>
    </div>
  );
}
