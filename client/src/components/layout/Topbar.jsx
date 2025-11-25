function Topbar(){
    return(
      <div className=" h-16 shadow-sm bg-white flex items-center justify-between px-6  w-full">
       <input placeholder="🔎 Search..." className=" px-4 py-2.5 
          rounded-lg w-96
          border border-gray-300 
          bg-white
          text-gray-800 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 
          focus:border-transparent 
          shadow-sm 
          transition-all
          placeholder-gray-400 " />
        <div className="w-8 h-8 rounded-full bg-indigo-200"></div>
      </div>

    );
}
export default Topbar;