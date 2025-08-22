export default defineAppConfig({
  theme: {
    radius: 0.25,
    blackAsPrimary: false,
  },
  ui: {
    colors: {
      primary: "teal",
      neutral: "neutral",
    },
    input: {
      slots: {
        root: "w-full",
      },
    },
    inputNumber: {
      slots: {
        root: "w-full",
      },
    },
    inputMenu: {
      slots: {
        root: "w-full",
      },
    },
    select: {
      slots: {
        base: [
          "w-full",
          
        ],
      },
    },
    textarea: {
      slots: {
        root: "w-full",
      },
    }
  },
});
