import React from "react";

import ThemeClientProvider from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeClientProvider>{children}</ThemeClientProvider>;
};

export default Providers;
