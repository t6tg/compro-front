import React, { ReactElement } from "react";
import Table from "react-tailwind-table";

interface Props {}

export default function FileTable({}: Props): ReactElement {
  return (
    <div className="my-5">
      <Table
        columns={[
          {
            field: "id",
            use: "File ID",
          },
          {
            field: "name",
            use: "File Name",
          },
          {
            field: "Status",
            use: "Status",
          },
          {
            field: "Switch",
            use: "Switch",
          },
        ]}
        rows={[]}
      />
    </div>
  );
}
