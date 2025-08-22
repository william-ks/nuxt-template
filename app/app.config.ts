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
    button: {
      slots: {
        base: [
          "rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
          "transition-colors",
          "cursor-pointer",
        ],
      },
      defaultVariants: {
        variant: "ghost",
      },
    },
    card: {
      slots: {
        root: "rounded-md",
        header: "p-2 sm:p-4",
        body: "p-2 sm:p-4",
        footer: "p-2 sm:p-4",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-inverted text-inverted",
          },
          outline: {
            root: "bg-muted ring ring-muted divide-y divide-muted",
          },
          soft: {
            root: "backdrop-blur-[3px] bg-elevated/10 dark:bg-elevated/50 divide-y divide-default",
          },
          subtle: {
            root: "backdrop-blur-xs bg-elevated/50 dark:bg-elevated/60 ring ring-muted divide-y divide-default",
          },
        },
      },
    },
    modal: {
      slots: {
        overlay:
          "fixed inset-0 bg-default/10 dark:bg-default/50 backdrop-blur-sm",
        content:
          "fixed bg-default divide-y divide-default flex flex-col focus:outline-none",
        header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
        wrapper: "",
        body: "flex-1 overflow-y-auto p-4 sm:p-6",
        footer: "flex items-center gap-1.5 p-4 sm:px-6",
        title: "text-highlighted font-semibold",
        description: "mt-1 text-muted text-sm",
        close: "absolute top-4 end-4",
      },
      variants: {
        transition: {
          true: {
            overlay:
              "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
            content:
              "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]",
          },
        },
        fullscreen: {
          true: {
            content: "inset-0",
          },
          false: {
            content:
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden",
          },
        },
      },
    },
  },
});
