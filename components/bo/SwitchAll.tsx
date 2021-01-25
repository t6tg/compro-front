import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface Props {}

export default function SwitchAll({}: Props): ReactElement {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const data = [
    {
      Section: 1,
    },
    {
      Section: 2,
    },
    {
      Section: 3,
    },
  ];

  return (
    <div className="h-full p-4 bg-white rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {data.map((r) => (
          <div key={r.Section} className="grid gap-3">
            <label>Section {r.Section}</label>
            <select
              name={`section_${r.Section}`}
              className="p-2 bg-gray-100 rounded-md"
              ref={register}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        ))}
        <input
          type="submit"
          className="p-1 rounded-md text-white bg-primary cursor-pointer w-full mt-3"
        />
      </form>
    </div>
  );
}
