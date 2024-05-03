import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="max-w-sm mx-auto">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="John Doe"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />

      <Button type="submit" classname="bg-blue-600 w-full">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
