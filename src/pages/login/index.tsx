import { useFormik } from "formik";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { InitialLogin, InitialLoginTypes } from "./core/_models";
import { useAuth } from "../../store/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik<InitialLoginTypes>({
    initialValues: InitialLogin,
    onSubmit: async (values) => {
      if (values.username === "reza" && values.password === "best") {
        setUser(values.username);
        navigate("/");
      }
    },
  });
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[100vw] h-[100vh] -z-10 flex items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <Card className="flex flex-col items-center gap-4 z-10">
          <div className="text-center">
            <p className="text-gray-800 text-xl">Welcome to</p>
            <p className="text-violet-500 font-bold text-3xl">Kanban</p>
          </div>
          <Input
            label="Username"
            background="gray"
            {...formik.getFieldProps("username")}
          />
          <Input
            type="password"
            label="Password"
            background="gray"
            {...formik.getFieldProps("password")}
          />
          <Button title="Log In" size="full" type="submit" />
        </Card>
      </form>
    </div>
  );
};

export default Login;
