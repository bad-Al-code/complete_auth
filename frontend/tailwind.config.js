import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ee75d2",
                secondary: "#75d8ee",
                tertiary: "#deee75",
                quaternary: "#9375ee",
                surface: "#000000",
            },
            backgroundImage: {
                bgGradient:
                    "linear-gradient(to bottom, var(--color-quaternary), var(--color-surface))",
            },
            animation: {
                ripple: "ripple 1s ease-in-out infinite",
            },
            keyframes: {
                ripple: {
                    "0%": { transform: "scale(1)", opacity: "1" },
                    "50%": { transform: "scale(1.5)", opacity: "0.4" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
