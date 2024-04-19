import { Button, Loader, TextInput } from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../utils/makeRequest";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);

    try {
      setLoading(true);
      const res = await API.post("/auth/login", { email, password });
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setEmail("");
        setPassword("");
        setError("");
        setLoading(false);
        navigate("/");
        window.location.reload();
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
    <div className="bg-[url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=700')] bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div
        className="w-full h-full bg-black/10 flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <form className="bg-white sm:min-w-[500px] min-w-full px-3 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-medium">Login</h1>
            <span className="text-gray-600 text-sm">
              Log into access your account.
            </span>
          </div>
          {error && <span className="text-sm text-red-500">{error}</span>}
          <TextInput
            label="Email address"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="filled"
            color="#22c55e"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader color="#22c55e" size={"sm"} /> : "Log in"}
          </Button>
          <p className="text-sm">
            First time using Memoirify?{" "}
            <span className="text-primary ml-0.5">
              <Link to="/register">Create an account!</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
