import Generator from "./Generator";

export default function Content() {
  return (
    <div className="flex h-full justify-center items-center p-20">
      <div className="bg-slate-600 text-center justify-center flex-col gap-5 flex h-1/2 rounded-md w-10/12 md:w-9/12">
        <h2 className="text-emerald-400">Advice #117</h2>
        <p className="text-zinc-50 font-bold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          corrupti, facere enim possimus, illo, suscipit nihil voluptates
          debitis aliquam veniam placeat eos quibusdam maxime consequatur cumque
          reiciendis odio autem perferendis.
        </p>
        <Generator />
      </div>
    </div>
  );
}
