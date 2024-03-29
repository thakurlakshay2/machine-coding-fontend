import { MachineCodingListProps } from "./typings";
import { MACHINE_CODING_DATA } from "../../Constants/CodingList";

const MachineCodingList: React.FC<MachineCodingListProps> = () => {
  return (
    <div>
      {MACHINE_CODING_DATA.map((data, i) => {
        if (i > 0)
          return (
            <button>
              <a href={data.path}>{data.title}</a>
            </button>
          );
      })}
    </div>
  );
};

export default MachineCodingList;
