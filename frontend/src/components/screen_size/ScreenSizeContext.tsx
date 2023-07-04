import React, { createContext, useState, useEffect } from "react";

interface ScreenSizeContextProps {
  windowWidth: number;
}

const ScreenSizeContext = createContext<ScreenSizeContextProps>({
  windowWidth: 0,
});

interface ScreenSizeProviderProps {
  children: React.ReactNode;
}

const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}: ScreenSizeProviderProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ windowWidth }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export { ScreenSizeContext, ScreenSizeProvider };
