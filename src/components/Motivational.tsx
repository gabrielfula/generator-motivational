import { TypeText } from "../types/text";

export default function Motivational({ advice, id }: TypeText) {
  return (
    <>
      <div>
        <h2 className="text-emerald-400 py-8 uppercase tracking-widest font-bold">
          Advice #{id}
        </h2>
        <p className="text-zinc-50 text-2xl">{advice}</p>
      </div>
      ;
    </>
  );
}
