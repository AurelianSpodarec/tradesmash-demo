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
                        "200": withOpacity('--color-brand-200'),
                        "500": withOpacity('--color-brand-500'),
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