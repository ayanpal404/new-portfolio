import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImSpinner2, ImSpinner8 } from "react-icons/im";

// Option 1: Simple spinning loader
const LoadingSpinner = ({ size = 24, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <AiOutlineLoading3Quarters 
        size={size} 
        className="animate-spin text-blue-600" 
      />
    </div>
  );
};

// Option 2: Bouncing dots (improved version)
const LoadingDots = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl", 
    lg: "text-3xl"
  };

  return (
    <div className={`flex items-center justify-center space-x-1 ${sizeClasses[size]} font-bold ${className}`}>
      <span className="animate-bounce [animation-delay:0s] text-blue-600">•</span>
      <span className="animate-bounce [animation-delay:0.2s] text-blue-500">•</span>
      <span className="animate-bounce [animation-delay:0.4s] text-blue-400">•</span>
    </div>
  );
};

// Option 3: Pulsing dots with icons
const LoadingPulse = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse [animation-delay:0s]"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
    </div>
  );
};

// Option 4: Multiple spinner options
const LoadingSpinners = ({ variant = "default", size = 24, className = "" }) => {
  const spinners = {
    default: <AiOutlineLoading3Quarters size={size} className="animate-spin" />,
    alt: <BiLoaderAlt size={size} className="animate-spin" />,
    fast: <ImSpinner2 size={size} className="animate-spin" />,
    slow: <ImSpinner8 size={size} className="animate-[spin_2s_linear_infinite]" />
  };

  return (
    <div className={`flex items-center justify-center text-blue-600 ${className}`}>
      {spinners[variant]}
    </div>
  );
};

// Main component with different loading options
const LoadingComponent = ({ 
  type = "dots", 
  size = "md", 
  variant = "default",
  className = "",
  text = null 
}) => {
  const loadingComponents = {
    dots: <LoadingDots size={size} className={className} />,
    spinner: <LoadingSpinner size={size === "sm" ? 20 : size === "lg" ? 32 : 24} className={className} />,
    pulse: <LoadingPulse className={className} />,
    spinners: <LoadingSpinners variant={variant} size={size === "sm" ? 20 : size === "lg" ? 32 : 24} className={className} />
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {loadingComponents[type]}
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
};

// Export individual components and main component
export { LoadingSpinner, LoadingDots, LoadingPulse, LoadingSpinners };
export default LoadingComponent;