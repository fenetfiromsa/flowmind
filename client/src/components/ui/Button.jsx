function Button({ children, disabled}) {
  return (
    <button
     disabled={disabled}
     className={`
      px-6 py-3 ml-8
      font-semibold 
      rounded-lg  
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-400
       ${disabled 
          ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none" 
          : "bg-gradient-to-r from-teal-300 to-purple-400 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
        }
    `}>
      {children}
    </button>
  );
}

export default Button;
