const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <div className="h-10 w-10 animate-spin border-[5px] border-b-neutral-400 rounded-full border-t-transparent" />
      <p className="text-base text-black">Loading</p>
    </div>
  );
};

export default Loading;
