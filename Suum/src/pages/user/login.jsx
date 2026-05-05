import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast] = useState(null);

    const navigate = useNavigate();
    const { login } = useAuth();

    const showToast = (message, type = "success") => {
        setToast({ message, type });

        setTimeout(() => {
            setToast(null);
        }, 2500);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://localhost:7159/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo,
                    password
                })
            });

            const data = await res.json();

            if (res.ok) {

                login({
                    correo: correo,
                    rol: data.rol
                });

                showToast("Inicio de sesión exitoso.", "success");

                setTimeout(() => {
                    if (data.rol === "admin") {
                        navigate("/admin/dashboard");
                    } else {
                        navigate("/");
                    }
                }, 1000);

            } else {
                showToast("El correo o la contraseña no son correctos.", "error");
            }

        } catch (error) {
            console.error(error);
            showToast("No se pudo conectar con el servidor.", "error");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#ffe2e7]">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
            >

                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Iniciar sesión
                </h2>

                <input
                    type="email"
                    placeholder="Correo"
                    className="w-full border p-2 mb-4"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border p-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded"
                >
                    Iniciar sesión
                </button>

                {/* 🔥 MENSAJE CON COLOR */}
                {toast && (
                    <div className="mt-4 flex justify-center">
                        <div
                            className={`text-sm px-4 py-2 rounded shadow-md border transition-all duration-300
                            ${toast.type === "success"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-red-50 text-red-700 border-red-200"}`}
                        >
                            {toast.message}
                        </div>
                    </div>
                )}

                {/* 🌸 REGISTRO */}
                <p className="text-sm text-center mt-4">
                    ¿No tienes cuenta?{" "}
                    <span
                        onClick={() => navigate("/registro")}
                        className="underline cursor-pointer hover:text-pink-500 transition"
                    >
                        Regístrate
                    </span>
                </p>

            </form>

        </div>
    );
}

export default Login;