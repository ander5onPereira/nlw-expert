export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        architecto ut consequuntur eius, cumque minus odio repellendus corporis
        unde inventore aut in ab nulla vitae atque distinctio odit debitis
        sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        architecto ut consequuntur eius, cumque minus odio repellendus corporis
        unde inventore aut in ab nulla vitae atque distinctio odit debitis
        sequi.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
