export const ButtonFill = () => {
  return (
    <div className="wrpper flex flex-col items-center gap-4 md:flex-row">
      {/* Fill Height */}
      <button
        className="
      text-teal-500
      leading-tight
    px-4 py-2 
    rounded-lg 
    border border-current 
    bg-transparent 
    block 
    relative 
    cursor-pointer 
    overflow-hidden 
    text-2xl 
    transform active:scale-95

    /* ::after styles */
    after:content-[''] 
    after:absolute 
    after:inset-0 
    after:h-0 
    after:bg-[lightblue] 
    after:z-[-1] 
    after:transition-[height] 
    after:duration-[250ms]

    /* On hover and focus-visible, animate after’s height */
    hover:after:h-full 
    focus-visible:after:h-full
  "
      >
        Button fill height
      </button>

      {/* Fill Width */}
      <button
        className="
      text-teal-500
      leading-tight
    px-4 py-2 
    rounded-lg 
    border border-current 
    bg-transparent 
    block 
    relative 
    cursor-pointer 
    overflow-hidden 
    text-2xl 
    transform active:scale-95

    /* ::after styles */
    after:content-[''] 
    after:absolute 
    after:inset-0 
    after:w-0
    after:bg-[lightblue] 
    after:z-[-1] 
    after:transition-[width] 
    after:duration-[250ms]

    /* On hover and focus-visible, animate after’s width */
    hover:after:w-full 
    focus-visible:after:w-full
  "
      >
        Button fill width
      </button>
    </div>
  );
};
