/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                beeYellow: "#C69B00",
                beeBlack: "#0D192D",
                beeBlue: "#1889EF",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
