import { useState } from "react";
import Division from "./Division";
import { TypeText } from "../types/text";
import Motivational from "./Motivational";

export default function Content() {
  const [data, setData] = useState<TypeText | null>(null);

  const generateText = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const response = await res.json();
    setData(response.slip);
  };

  return (
    <>
      <div className="flex h-full justify-center items-center p-20">
        <div className="bg-slate-600 text-center justify-center flex-col flex h-auto p-3 rounded-lg w-auto md:w-9/12">
          {!data && (
            <p className="text-emerald-400 py-8 uppercase tracking-widest font-bold">
              Generate a text
            </p>
          )}
          {data && <Motivational advice={data.advice} id={data.id} />}

          <Division />
          <div className="w-full flex justify-center top-8 pt-10">
            <button
              onClick={generateText}
              className="h-10 bg-emerald-500 rounded-full p-2 px-5"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
