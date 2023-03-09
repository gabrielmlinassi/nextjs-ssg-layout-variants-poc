import React from "react";

type Variant = "a" | "b";

type VariantsContextProps = {
  variant: Variant;
};

const VariantsContext = React.createContext<VariantsContextProps>({
  variant: "a",
});

type VariantsProviderProps = {
  children: React.ReactNode;
  initialVariant: Variant;
};

export const VariantsProvider = ({
  children,
  initialVariant,
}: VariantsProviderProps) => {
  return (
    <VariantsContext.Provider value={{ variant: initialVariant }}>
      {children}
    </VariantsContext.Provider>
  );
};

export const useVariantsContext = () => {
  return React.useContext(VariantsContext);
};
