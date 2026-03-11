import React from "react";
import FloatingSupport from "./component/chatsupport";
import Footer from "./component/footer";
import ContextProvider from "./userContext/contextProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ContextProvider>
        {children}
        <FloatingSupport />
        <Footer />
      </ContextProvider>
    </div>
  );
}
