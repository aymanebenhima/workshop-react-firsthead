import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: theme === "light" ? "#333" : "#fff",
                color: theme === "light" ? "#fff" : "#333",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Activer le mode {theme === "light" ? "sombre" : "clair"}
        </button>
    )
}

export default ThemeButton