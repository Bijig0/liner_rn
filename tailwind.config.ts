/** @type {import('tailwindcss').Config} */
// tsc tailwind.config.ts --watch
// ONLY EDIT THIS FILE, THIS FILE GETS COMPILED INTO tailwind.config.js

import { TouchableHighlightComponent } from "react-native";

const { plugin } = require("twrnc");
const satisfiez =
  <T>() =>
  <U extends T>(u: U) =>
    u;

type Colors = {};

const mainBtnSize = "103px";

module.exports = {
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#101010",
        grey: { dark: "#1E1515", regular: "#C1C1C1" },
        orange: "#FDAF01",
        success: "#167B2D",
        warning: "#8A1114",
      },
      fontSize: {
        lg: "46px",
        md: "26px",
        sm: "16px",
        "1xs": "13px",
        "2xs": "11px",
        "3xs": "6px",
      },
      fontFamily: satisfiez<Record<string, Font>>()({
        primary: "DMSans-Regular",
        "primary-bold": "DMSans-Bold",
        "primary-bold-italic": "DMSans-BoldItalic",
        "primary-italic": "DMSans-Italic",
        "primary-medium": "DMSans-Medium",
        "primary-medium-italic": "DMSans-MediumItalic",
      }),
      width: ({ theme }) => ({
        card: "260px",
        pill: mainBtnSize,
        "main-btn": mainBtnSize,
        "svg-icon": "10px",
      }),
      height: {
        card: "193px",
        "card-img": "134px",
        "main-btn": "50px",
        pill: "32px",
        "svg-icon": "10px",
        footer: "5rem",
      },
      padding: {
        card: "0.5rem",
        "search-bar": "12px",
        "app-box": "2rem",
      },
      margin: {
        "search-bar": "24px",
      },
      inset: ({ theme }) => ({
        pill: theme("padding.card"),
        "app-box": theme("padding.app-box"),
        
      }),
      aspectRatio: {
        1: 1,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        "translate-x-1/4": {
          transform: [{ translateY: 25 }],
        },
        "resize-contain": {
          resizeMode: "contain",
        },
        "resize-cover": {
          resizeMode: "cover",
        },
        "resize-repeat": {
          resizeMode: `repeat`,
        },
        "overflow-x-hidden": {
          overflowX: "hidden",
        },
        "overflow-x-visible": {
          overflowX: "visible",
        },
        "overflow-y-visible": {
          overflowY: "visible",
        },
        "overflow-y-hidden": {
          overflowY: "hidden",
        },
      });
    }),
  ],
};
