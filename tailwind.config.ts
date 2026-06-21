/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <-- هذا السطر هو السحر الذي يفعل الـ Dark Mode بناءً على الكلاس!
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                matemasie: ["var(--font-matemasie)", "sans-serif"],
                marhey: ["var(--font-marhey)", "sans-serif"],
            },
        },
    },
    plugins: [],
}