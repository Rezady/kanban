import { useFormik } from "formik";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import {
  InitialLogin,
  InitialLoginTypes,
  LoginValidation,
} from "./core/_models";
import { useAuth } from "../../store/useAuth";
import { useNavigate } from "react-router-dom";
import { getError } from "../../modules/form/_helpers";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik<InitialLoginTypes>({
    initialValues: InitialLogin,
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      if (values.username === "developer" && values.password === "kanban") {
        setUser(values.username);
        navigate("/");
        toast.success("successfully login", {
          position: "bottom-center",
        });
      } else {
        formik.setFieldError("password", "please try login");
      }
    },
  });
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[100vw] h-[100vh] -z-10 flex items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <Card className="flex flex-col items-center gap-4 z-10 p-10 w-fit">
          <div className="text-center">
            <p className="text-gray-800 text-xl">Welcome to</p>
            <p className="text-violet-500 font-bold text-3xl">Kanban</p>
          </div>
          <Input
            label="Username"
            background="gray"
            error={getError<InitialLoginTypes>(formik, "username")}
            {...formik.getFieldProps("username")}
          />
          <Input
            type="password"
            label="Password"
            background="gray"
            error={getError<InitialLoginTypes>(formik, "password")}
            {...formik.getFieldProps("password")}
          />
          <Button title="Log In" size="full" type="submit" />
        </Card>
      </form>
    </div>
  );
};

export default Login;
