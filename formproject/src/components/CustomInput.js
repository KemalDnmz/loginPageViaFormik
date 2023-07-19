import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>Kullanıcı Adı</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="error"> {meta.error}</div>}
    </>
  );
}

export default CustomInput;
