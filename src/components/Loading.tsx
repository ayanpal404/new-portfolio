import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImSpinner2, ImSpinner8 } from "react-icons/im";

// Type definitions
interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface LoadingPulseProps {
  className?: string;
}

interface LoadingSpinnersProps {
  variant?: "default" | "alt" | "fast" | "slow";
  size?: number;
  className?: string;
}

interface LoadingComponentProps {
  type?: "dots" | "spinner" | "pulse" | "spinners";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "alt" | "fast" | "slow";
  className?: string;
  text?: string | null;
}

// Option 1: Simple spinning loader
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 24, className = "" }) => {
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
const LoadingDots: React.FC<LoadingDotsProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl", 
    lg: "text-3xl"
  };

  return (
    <div className={`flex items-center justify-center space-x-1 ${sizeClasses[size]} font-bold ${className}`}>
      <span className="animate-bounce text-blue-600" style={{ animationDelay: '0s' }}>•</span>
      <span className="animate-bounce text-blue-500" style={{ animationDelay: '0.2s' }}>•</span>
      <span className="animate-bounce text-blue-400" style={{ animationDelay: '0.4s' }}>•</span>
    </div>
  );
};

// Option 3: Pulsing dots with icons
const LoadingPulse: React.FC<LoadingPulseProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

// Option 4: Multiple spinner options
const LoadingSpinners: React.FC<LoadingSpinnersProps> = ({ variant = "default", size = 24, className = "" }) => {
  const spinners = {
    default: <AiOutlineLoading3Quarters size={size} className="animate-spin" />,
    alt: <BiLoaderAlt size={size} className="animate-spin" />,
    fast: <ImSpinner2 size={size} className="animate-spin" />,
    slow: <ImSpinner8 size={size} className="animate-spin" style={{ animationDuration: '2s' }} />
  };

  return (
    <div className={`flex items-center justify-center text-blue-600 ${className}`}>
      {spinners[variant]}
    </div>
  );
};

// Main component with different loading options
const LoadingComponent: React.FC<LoadingComponentProps> = ({ 
  type = "dots", 
  size = "md", 
  variant = "default",
  className = "",
  text = null 
}) => {
  const getSizeInPixels = (size: "sm" | "md" | "lg"): number => {
    switch (size) {
      case "sm": return 20;
      case "lg": return 32;
      default: return 24;
    }
  };

  const pixelSize = getSizeInPixels(size);

  const loadingComponents = {
    dots: <LoadingDots size={size} className={className} />,
    spinner: <LoadingSpinner size={pixelSize} className={className} />,
    pulse: <LoadingPulse className={className} />,
    spinners: <LoadingSpinners variant={variant} size={pixelSize} className={className} />
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {loadingComponents[type]}
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">{text}</p>
      )}
    </div>
  );
};

// Export individual components and main component
export { LoadingSpinner, LoadingDots, LoadingPulse, LoadingSpinners };
export default LoadingComponent;