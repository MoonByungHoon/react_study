import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

function Validation() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(watch("email"));

  const password = useRef();

  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This email field is required</p>}

      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "requeired" && (
        <p>This name field is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>Your input exceed maxLength</p>
      )}

      <label>Password</label>
      <input
        type="password"
        name="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.password && errors.password.minLength === "minLength" && (
        <p>This field is required</p>
      )}

      <label>Password confirm</label>
      <input
        type="password"
        name="password_confirm"
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <p>This field is required</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>This field is required!!##$$</p>
        )}

      <input type="submit" value="SUBMIT" />
    </form>
  );
}

export default Validation;
