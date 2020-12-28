import React, { ReactElement } from "react";
import Table from "react-tailwind-table";

interface Props {}

export default function UserTable({}: Props): ReactElement {
  const columns = [{}];

  return (
    <div>
      <Table
        columns={[
          {
            field: "Username",
            use: "Student ID",
          },
          {
            field: "Fullame",
            use: "Name",
          },
          {
            field: "Section",
            use: "Section",
          },
          {
            field: "Status",
            use: "Status",
          },
          {
            field: "Switch",
            use: "Switch",
          },
          {
            field: "Edit",
            use: "Edit",
          },
        ]}
        rows={[]}
      />
    </div>
  );
}
