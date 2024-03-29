import { ToggleProps } from "./typings";

const Toggle: React.FC<ToggleProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full mb-12">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{title}</div>
      </label>
    </div>
  );
};

export default Toggle;
