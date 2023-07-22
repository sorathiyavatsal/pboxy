/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                sans: [
                    'Inter',
                    'Montserrat',
                    'Questrial',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji'
                ],
                'body': [
                    'Inter',
                    'Montserrat',
                    'Questrial',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji'
                ],
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                indigo: colors.indigo,
                blue: colors.blue,
                red: colors.red,
                orange: colors.orange,
                yellow: colors.yellow,
                green: colors.green,
                teal: colors.teal,
                purple: colors.purple,
                pink: colors.pink,
                slate: colors.slate,
                gray: colors.gray,
                neutral: colors.neutral,
                stone: colors.stone,
                amber: colors.amber,
                lime: colors.lime,
                emerald: colors.emerald,
                cyan: colors.cyan,
                sky: colors.sky,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                rose: colors.rose,
                theme: {
                    50: colors.violet[50],
                    100: colors.violet[100],
                    200: colors.violet[200],
                    300: colors.violet[300],
                    400: colors.violet[400],
                    500: colors.violet[500],
                    600: colors.violet[600],
                    700: colors.violet[700],
                    800: colors.violet[800],
                    900: colors.violet[900],
                },
                accent: {
                    50: colors.gray[50],
                    100: colors.gray[100],
                    200: colors.gray[200],
                    300: colors.gray[300],
                    400: colors.gray[400],
                    500: colors.gray[500],
                    600: colors.gray[600],
                    700: colors.gray[700],
                    800: colors.gray[800],
                    900: colors.gray[900],
                },
                primary: {
                    50: "#000000",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                primary: { "50": "#000000", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: "100%",
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.gray.400"),
                        "h2, h3, h4, thead th": {
                            color: theme("colors.gray.200"),
                        },
                        "h2 small, h3 small, h4 small": {
                            color: theme("colors.gray.400"),
                        },
                        code: {
                            color: theme("colors.gray.200"),
                        },
                        hr: {
                            borderColor: theme("colors.gray.200"),
                            opacity: "0.05",
                        },
                        pre: {
                            boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
                        },
                        a: {
                            color: theme("colors.white"),
                            borderBottomColor: theme("colors.sky.400"),
                        },
                        strong: {
                            color: theme("colors.gray.200"),
                        },
                        thead: {
                            color: theme("colors.gray.300"),
                            borderBottomColor: "rgb(148 163 184 / 0.2)",
                        },
                        "tbody tr": {
                            borderBottomColor: "rgb(148 163 184 / 0.1)",
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("tailwindcss-animate"), require('daisyui')],
    daisyui: {
        themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
}
