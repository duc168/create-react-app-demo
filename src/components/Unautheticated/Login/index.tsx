import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";

interface ILoginForm {
  email: string;
  password: string;
}
type FieldType = "email" | "password";
const Login: React.FC<any> = () => {
  const [form, setForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("email ", form.email);
    console.log("password ", form.password);
    dispatch(login(true))
  };
  const onInputChange = (fieldName: FieldType, changed: string) => {
    setForm({
      ...form,
      [fieldName]: changed,
    });
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action="your-action"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            onChange={(e) => onInputChange("email", e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => onInputChange("password", e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
