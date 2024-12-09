/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                beeYellow: "#FCD307",
                beeBlack: "#333333",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
