/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: "0.5rem",
		  md: "0.375rem",
		  sm: "0.25rem",
		},
		colors: {
		  // Light Mode Colors
		  background: "#FFFFFF" /* White */,
		  foreground: "#000000" /* Black */,
		  card: {
			DEFAULT: "#F0F0F0" /* Light Gray */,
			foreground: "#000000" /* Black */,
		  },
		  primary: {
			DEFAULT: "#1E3A8A" /* Dark Blue */,
			foreground: "#FFFFFF" /* White */,
		  },
		  secondary: {
			DEFAULT: "#3B82F6" /* Sky Blue */,
			foreground: "#FFFFFF" /* White */,
		  },
		  muted: {
			DEFAULT: "#A1A1A1" /* Gray */,
			foreground: "#000000" /* Black */,
		  },
		  accent: {
			DEFAULT: "#1D4ED8" /* Royal Blue */,
			foreground: "#FFFFFF" /* White */,
		  },
		  destructive: {
			DEFAULT: "#EF4444" /* Red */,
			foreground: "#FFFFFF" /* White */,
		  },
		  input: {
			text: "#000000", // Input text color in light mode
			placeholder: "#A1A1A1", // Placeholder color in light mode
		  },
		  button: {
			DEFAULT: "#1E3A8A",  // Dark Blue for button background
			text: "#FFFFFF",  // White for button text
			hover: "#3748B8",  // Lighter Blue for hover effect
		  },
		  border: "#E5E5E5" /* Light Gray */,
		  input: "#F0F0F0" /* Light Gray */,
		  ring: "#1E3A8A" /* Dark Blue */,
  
		  // Dark Mode Colors
		  "dark-background": "#000000" /* Black */,
		  "dark-foreground": "#FFFFFF" /* White */,
		  "dark-card": "#1F1F1F" /* Dark Gray */,
		  "dark-card-foreground": "#FFFFFF" /* White */,
		  "dark-primary": "#3B82F6" /* Sky Blue */,
		  "dark-primary-foreground": "#000000" /* Black */,
		  "dark-secondary": "#1E3A8A" /* Dark Blue */,
		  "dark-secondary-foreground": "#FFFFFF" /* White */,
		  "dark-muted": "#A1A1A1" /* Gray */,
		  "dark-muted-foreground": "#FFFFFF" /* White */,
		  "dark-accent": "#1D4ED8" /* Royal Blue */,
		  "dark-accent-foreground": "#FFFFFF" /* White */,
		  "dark-destructive": "#EF4444" /* Red */,
		  "dark-destructive-foreground": "#FFFFFF" /* White */,
		  "dark-border": "#3B3B3B" /* Medium Gray */,
		  "dark-input": "#1F1F1F" /* Dark Gray */,
		  "dark-ring": "#1E3A8A" /* Dark Blue */,
		  "dark-input": {
			text: "#FFFFFF", // Input text color in dark mode
			placeholder: "#737373", // Placeholder color in dark mode
		  },

		  "dark-button": {
			DEFAULT: "#3B82F6",  // Sky Blue for button background in dark mode
			text: "#000000",  // Black for button text in dark mode
			hover: "#4A90E2",  // Lighter Sky Blue for hover effect in dark mode
		  },
		 
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
  };
  