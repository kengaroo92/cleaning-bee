/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                beeYellow: "#FCD307",
                beeBlack: "#0D192D",
                beeBlue: "#1889EF",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
