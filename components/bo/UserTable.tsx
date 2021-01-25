import React, { ReactElement } from "react";
import Table from "react-tailwind-table";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import LoadingSkeleton from "../Skeleton/Loading.skeleton";

interface Props {}

export default function UserTable({}: Props): ReactElement {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.student());
  }, []);

  const studentReducer = useSelector((state) => state.studentReducer);
  const switchReducer = useSelector((state) => state.switchReducer);

  return (
    <div>
      {switchReducer.isFetching && <LoadingSkeleton />}
      {studentReducer.isFetching && <LoadingSkeleton />}
      {studentReducer.data && (
        <Table
          columns={[
            {
              field: "Status",
              use: "Status",
              use_in_search: false,
            },
            {
              field: "Username",
              use: "Student ID",
            },
            {
              field: "Fullname",
              use: "Name",
            },
            {
              field: "Section",
              use: "Section",
              use_in_search: false,
            },
            {
              field: "Switch",
              use: "Switch",
              use_in_search: false,
            },
            // {
            //   field: "Edit",
            //   use: "Edit",
            //   use_in_search: false,
            // },
          ]}
          rows={studentReducer.data.map((r) => ({
            Username: r.Username,
            Fullname: r.Fullname,
            Section: r.Section,
            Status:
              r.Status === "active" ? (
                <span className="bg-green-700 text-white px-2 py-0.5 rounded-sm">
                  active
                </span>
              ) : (
                <span className="bg-red-700 text-white px-2 py-0.5 rounded-sm">
                  inactive
                </span>
              ),
            Switch: (
              <button
                className="bg-primary text-white px-2 py-0.5 rounded-sm"
                onClick={() => {
                  dispatch(actions.switchStudent(r.Username));
                }}
              >
                Switch
              </button>
            ),
            // Edit: (
            //   <button
            //     className="bg-yellow-400 text-white px-2 py-0.5 rounded-sm"
            //     onClick={() => {}}
            //   >
            //     Edit
            //   </button>
            // ),
          }))}
        />
      )}
    </div>
  );
}
