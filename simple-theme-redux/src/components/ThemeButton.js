import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeButton = () => {
    // const { theme, toggleTheme } = useContext(ThemeContext);
    const theme = useSelector((state) => state.theme.value); // Lecture de state du theme
    const dispatch = useDispatch(); // Accés au dispatch Redux

    return (
        <button
            onClick={() => dispatch(toggleTheme())} // Envoie de l'action toggleTheme
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