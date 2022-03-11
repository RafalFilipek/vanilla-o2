import * as React from "react";

const Context = React.createContext("");

interface IconsProviderProps {
  src: string;
}

export const IconsProvider = React.memo<
  React.PropsWithChildren<IconsProviderProps>
>(({ src, children }) => {
  return <Context.Provider value={src}>{children}</Context.Provider>;
});

export const useIconsProvider = () => {
  const value = React.useContext(Context);

  return React.useMemo(() => {
    return {
      src: value,
    };
  }, [value]);
};
