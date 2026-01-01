function Input({ label, placeholder }) {
  return (
    <div className="flex flex-col space-y-1 w-full max-w-md m-6">
      
      {label && (
        <label className="text-sm font-medium text-purple-400">
          {label}
        </label>
      )}

      <input
        placeholder={placeholder || "Type something..."}
        className="
          px-4 py-2.5 
          rounded-lg
          border border-gray-300  
          bg-white 
          text-gray-800 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 
          focus:border-transparent 
          shadow-sm 
          transition-all
          placeholder-gray-400
        "
      />
    </div>
  );
}

export default Input;
