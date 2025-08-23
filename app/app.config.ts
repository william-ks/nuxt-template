export default defineAppConfig({
  theme: {
    radius: 0.25,
    blackAsPrimary: false,
  },
  ui: {
    colors: {
      primary: "teal",
      neutral: "neutral",

      amber: "amber",
      blue: "blue",
      cyan: "cyan",
      emerald: "emerald",
      fuchsia: "fuchsia",
      green: "green",
      indigo: "indigo",
      lime: "lime",
      orange: "orange",
      pink: "pink",
      purple: "purple",
      red: "red",
      rose: "rose",
      sky: "sky",
      slate: "slate",
      teal: "teal",
      violet: "violet",
      yellow: "yellow",
    },

    button: {
      slots: {
        base: ["cursor-pointer"],
      },
      defaultVariants: {
        variant: "soft",
        color: "neutral",
      },
    },
    input: {
      slots: {
        root: "w-full",
      },
      variants: {
        variant: {
          outline: "text-highlighted bg-default ring ring-inset ring-accented",
          soft: "text-highlighted bg-accented/50 hover:bg-accented focus:bg-accented disabled:bg-accented/50",
          subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
          ghost:
            "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
          none: "text-highlighted bg-transparent",
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    inputNumber: {
      slots: {
        root: "w-full",
      },
      variants: {
        variant: {
          soft: "text-highlighted bg-accented/50 hover:bg-accented focus:bg-accented disabled:bg-accented/50",
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    inputMenu: {
      slots: {
        root: "w-full",
      },
      variants: {
        variant: {
          soft: "text-highlighted bg-accented/50 hover:bg-accented focus:bg-accented disabled:bg-accented/50",
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    select: {
      slots: {
        base: ["w-full"],
      },
      variants: {
        variant: {
          soft: "text-highlighted bg-accented/50 hover:bg-accented focus:bg-accented disabled:bg-accented/50",
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    textarea: {
      slots: {
        root: "w-full",
      },
      variants: {
        variant: {
          soft: "text-highlighted bg-accented/50 hover:bg-accented focus:bg-accented disabled:bg-accented/50",
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
  },
});
