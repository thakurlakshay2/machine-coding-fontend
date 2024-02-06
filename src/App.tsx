import { useEffect, useState } from "react";
import "./App.css";
import EmployeeList from "../Components/EmployeeList";
import AddNewEmployee from "../Components/AddNewEmployee";
import { NewEmployeeData } from "../Components/AddNewEmployee/typings";
import { database } from "../Constants/database";
import EmployeeDetails from "../Components/EmployeeDetails";
function App() {
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);
  const [employeeData, setEmployeeData] = useState<Array<NewEmployeeData>>([]);
  const [employeeDetail, setEmployeeDetail] = useState<
    NewEmployeeData | undefined
  >();

  useEffect(() => {}, [employeeData]);
  useEffect(() => {
    setEmployeeData(database);
  }, []);
  const handleToggleAddEmployee = () => {
    setToggleAdd((prev) => !prev);
  };
  return (
    <>
      <div className="flex w-full">
        <h1 className="text-3xl font-bold underline">
          Employee Database Management
        </h1>
        <button className="" onClick={handleToggleAddEmployee}>
          Add Employee
        </button>
      </div>

      <div className=" inline-flex w-full justify-between m-5 p-10	">
        <EmployeeList
          employeeList={employeeData}
          selectedEmployee={setEmployeeDetail}
          deleteEmployee={(deleteName) => {
            if (deleteName == employeeDetail?.firstName) {
              setEmployeeDetail(undefined);
            }
            setEmployeeData((prev) => {
              const newData = prev.filter((pre) => pre.firstName != deleteName);

              return newData;
            });
          }}
        />
        <div>
          <h2 className="mb-5 text-2xl">Employee Detail</h2>
          <div>
            {employeeDetail && (
              <EmployeeDetails employeeData={employeeDetail} />
            )}
          </div>
        </div>
      </div>
      {toggleAdd ? (
        <div>
          <div className="bg-gray-200	 bg-opacity-95 absolute w-4/6 top-3 z-10 w-3/6 mt-40 p-5  border-2 border-slate-300 rounded-lg shadow-xl">
            <AddNewEmployee
              closeModal={handleToggleAddEmployee}
              addNewEmployee={(newEmployee) => {
                setEmployeeData((prev) => [...prev, newEmployee]);
              }}
            />
          </div>
          <div
            onClick={handleToggleAddEmployee}
            className="bg-gray-500	 bg-opacity-5 fixed  w-screen h-screen  left-0 top-0 z-3 	"
          ></div>
        </div>
      ) : null}
    </>
  );
}

export default App;
