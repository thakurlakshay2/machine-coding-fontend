import { useDebounce } from "use-debounce";
import { DebounceProps } from "./typings";
import { useEffect, useState } from "react";
import { FRUITS } from "../../Constants/Debounce";
import { Checkbox } from "@material-tailwind/react";

//usage of debounce is basic ,, to delay function execution .. whatevery that function may be
///best case scenario would be
// 1. Ui delay in changes, specially if change is too big and too sudden
// 2. api called would be reduced  , depending on the conditions, eg. call api, for search list whenever someting is written in input
//      in that case debounce not only improves frontend , but also reduced network load.

const Debounce: React.FC<DebounceProps> = () => {
  const [searchFruit, setSearchFruit] = useState<string>("");
  const [debounceSearch] = useDebounce(searchFruit, 700);
  const [fruitList, setFruitList] = useState<Array<string>>(FRUITS);
  const [isDebounce, setIsDebounce] = useState<boolean>(false);

  useEffect(() => {
    if (!isDebounce) {
      return;
    }
    if (debounceSearch == "") {
      setFruitList(FRUITS);
      return;
    }
    setFruitList(
      FRUITS.filter((data) => {
        return data.match(debounceSearch);
      })
    );
  }, [debounceSearch, isDebounce]);
  useEffect(() => {
    if (isDebounce) {
      return;
    }
    if (searchFruit == "") {
      setFruitList(FRUITS);
      return;
    }
    setFruitList(
      FRUITS.filter((data) => {
        return data.match(searchFruit);
      })
    );
  }, [isDebounce, searchFruit]);
  return (
    <div>
      <Checkbox
        value={isDebounce}
        ripple={true}
        onChange={(e) => {
          setIsDebounce(e.target.checked);
        }}
        label="Use Debounce"
      />
      <h1>Fruit Salad</h1>
      <input
        className={` bg-emerald-600 bg-opacity-50	`}
        value={searchFruit}
        onChange={(e) => {
          setSearchFruit(e.target.value);
        }}
      />
      <div className={"mt-2 h-80 overflow-auto"}>
        {fruitList.map((list) => {
          return <p>{list}</p>;
        })}
      </div>
    </div>
  );
};

export default Debounce;
