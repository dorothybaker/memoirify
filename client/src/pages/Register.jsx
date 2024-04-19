import { Button, Loader, TextInput } from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../utils/makeRequest";

function Register() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (inputs.password.length < 8) {
      setError("Password must be greater than 7 characters");
      return;
    }
    try {
      setLoading(true);
      const res = await API.post("/auth/register", { ...inputs });
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setInputs({
          fullName: "",
          username: "",
          email: "",
          password: "",
        });
        setError("");
        setLoading(false);
        navigate("/");
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="w-full h-full bg-black/40 flex items-center justify-center">
        <form
          className="bg-white sm:min-w-[500px] min-w-full px-3 py-5 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-medium">Register</h1>
            <span className="text-gray-600 text-sm">Create an account.</span>
          </div>
          {error && <span className="text-sm text-red-500">{error}</span>}
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            required
          />
          <TextInput
            label="Username"
            placeholder="Enter your username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            required
          />
          <TextInput
            label="Email address"
            placeholder="Enter your email"
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            required
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            required
          />
          <Button
            variant="filled"
            color="#22c55e"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader color="#22c55e" size={"sm"} /> : "Register"}
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <span className="text-primary ml-0.5">
              <Link to="/login">Log in!</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
