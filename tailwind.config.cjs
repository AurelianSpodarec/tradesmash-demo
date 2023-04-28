/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
    }
}

module.exports = {
    content: [
        "./index.html",
        './src/**/*.{html,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                skin: {
                    brand: {
                        "100": withOpacity('--color-brand-100'),
                        "200": withOpacity('--color-brand-200'),
                        "300": withOpacity('--color-brand-300'),
                        "400": withOpacity('--color-brand-400'),
                        "500": withOpacity('--color-brand-500'),
                        "600": withOpacity('--color-brand-600'),
                        "700": withOpacity('--color-brand-700'),
                        "800": withOpacity('--color-brand-800'),
                        "900": withOpacity('--color-brand-900'),
                        "950": withOpacity('--color-brand-950'),
                    }
                }
            },
            textColor: {
                skin: {
                    accent: withOpacity('--color-accent'),
                    base: withOpacity('--color-text-base'),
                    leading: withOpacity('--color-text-leading'),
                    muted: withOpacity('--color-text-muted'),
                    inverted: '',
                }
            },
            backgroundColor: {
                skin: {
                    accent: withOpacity('--color-accent'),
                    base: withOpacity('--color-bg-base'),
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}