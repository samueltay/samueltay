import React, { createContext, useState, useEffect } from "react";

interface MobileContextProps {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps>({ isMobile: false });

interface MobileProviderProps {
  children: React.ReactNode;
}

const MobileProvider: React.FC<MobileProviderProps> = ({
  children,
}: MobileProviderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export { MobileContext, MobileProvider };
