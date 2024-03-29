import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { EmployeeListProps } from "./typings";

const EmployeeList: React.FC<EmployeeListProps> = ({
  employeeList,
  selectedEmployee,
  deleteEmployee,
}) => {
  const [selectedEmloyee, setSelectedEmployee] = useState<string>("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollBarWidth, setScrollBarWidth] = useState<number>(0);
  useLayoutEffect(() => {
    if (scrollRef) {
      requestAnimationFrame(() => {
        setScrollHeight(
          (scrollRef.current?.scrollHeight || 0) -
            (scrollRef.current?.offsetHeight || 0)
        );
      });
    }
  }, []);
  useEffect(() => {
    console.log("UseEffect ");
  }, []);
  useLayoutEffect(() => {
    console.log("UseLayoutEffect ");
  }, []);

  const handleScroll = () => {
    console.log(scrollRef);
    setScrollBarWidth(scrollRef.current?.scrollTop || 0);
  };
  return (
    <div>
      <p className="mb-5 text-2xl ">Employee LIST</p>
      <div className="relative">
        <div
          style={{ width: `${(scrollBarWidth * 100) / scrollHeight}%` }}
          className={` h-4  absolute left-0 top-0 bg-emerald-600 bg-opacity-50	`}
        />
        <div
          className="overflow-scroll h-64 w-64 "
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {employeeList.map((employeeData) => {
            return (
              <div
                className={`flex justify-between rounded-xl w-90	 m-5 hover:bg-teal-400 p-2	cursor-pointer ${
                  selectedEmloyee == employeeData.firstName
                    ? "bg-teal-400"
                    : "bg-teal-200"
                }`}
              >
                <p
                  onClick={() => {
                    selectedEmployee(employeeData);
                    setSelectedEmployee(employeeData.firstName);
                  }}
                  key={employeeData.firstName}
                >
                  {employeeData.firstName}
                </p>
                <div
                  onClick={() => {
                    deleteEmployee(employeeData.firstName);
                  }}
                  className="hover:text-amber-800"
                >
                  delete
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
