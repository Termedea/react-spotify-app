module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            opacity: {
                def: '.80'
            },
            fontFamily: {
                heading: ['Baumans', 'ui-serif', 'serif'],
                sans: ['Nunito', 'ui-sans-serif'],
                serif: ["'Playfair Display'", 'ui-sans-serif', 'sans-serif']
            },
            colors: {
                primary: {
                    lighter: '#f2f7fe',
                    light: '#b2d0f9',
                    DEFAULT: '#7fb1f6',
                    dark: '#4c6a93',
                    darker: '#0c1118'
                },
                secondary: {
                    lighter: '#fdf3e5',
                    light: '#f9dbb2',
                    DEFAULT: '#f6c47f',
                    dark: '#93754c',
                    darker: '#493a26'
                },
                'acc-green': {
                    lighter: '#e5fde7',
                    light: '#cbfbcf',
                    DEFAULT: '#7ff688',
                    dark: '#3f7b44',
                    darker: '#19311b'
                },
                'acc-pink': {
                    lighter: '#fde5fb',
                    light: '#fabff6',
                    DEFAULT: '#f67fed',
                    dark: '#7b3f76',
                    darker: '#31192f'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
