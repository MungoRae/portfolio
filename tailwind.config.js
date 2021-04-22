const { colors } = require("@material-ui/core");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'textPrimary': colors.coolGray,
            },
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            'primary': colors.coolGray,
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
