"use strict";
/** @type {import('tailwindcss').Config} */
// tsc tailwind.config.ts --watch
// ONLY EDIT THIS FILE, THIS FILE GETS COMPILED INTO tailwind.config.js
exports.__esModule = true;
var plugin = require("twrnc").plugin;
var satisfiez = function () {
    return function (u) {
        return u;
    };
};
module.exports = {
    theme: {
        extend: {
            colors: {
                white: "#FFFFFF",
                black: "#101010",
                grey: { dark: "#1E1515", regular: "#C1C1C1" },
                orange: "#FDAF01",
                success: "#167B2D",
                warning: "#8A1114"
            },
            fontSize: {
                lg: "46px",
                md: "26px",
                sm: "16px",
                "1xs": "13px",
                "2xs": "11px",
                "3xs": "6px"
            },
            fontFamily: satisfiez()({
                primary: "DMSans-Regular",
                "primary-bold": "DMSans-Bold",
                "primary-bold-italic": "DMSans-BoldItalic",
                "primary-italic": "DMSans-Italic",
                "primary-medium": "DMSans-Medium",
                "primary-medium-italic": "DMSans-MediumItalic"
            }),
            width: {
                card: "260px",
                // This should reference main-btn as well :/
                pill: "103px",
                "main-btn": "103px",
                "svg-icon": "10px"
            },
            height: {
                card: "193px",
                "card-img": "134px",
                "main-btn": "50px",
                pill: "32px",
                "svg-icon": "10px"
            },
            padding: {
                card: "0.5rem",
                "search-bar": "12px"
            },
            margin: {
                "search-bar": "24px"
            },
            inset: {
                // Make this reference padding.card idk
                // using theme() doesn't seem t work
                pill: "0.5rem"
            }
        }
    },
    plugins: [
        plugin(function (_a) {
            var addUtilities = _a.addUtilities;
            addUtilities({
                btn: {
                    padding: 3,
                    borderRadius: 10,
                    textTransform: "uppercase",
                    backgroundColor: "#333"
                },
                "resize-repeat": {
                    resizeMode: "repeat"
                },
                "overflow-x-hidden": {
                    overflowX: "hidden"
                },
                "overflow-x-visible": {
                    overflowX: "visible"
                },
                "overflow-y-visible": {
                    overflowY: "visible"
                },
                "overflow-y-hidden": {
                    overflowY: "hidden"
                }
            });
        }),
    ]
};
