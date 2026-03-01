"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ImageConfig } from "@/lib/image-config";

const ImageConfigContext = createContext<ImageConfig | null>(null);

export function ImageConfigProvider({
  config,
  children
}: {
  config: ImageConfig;
  children: ReactNode;
}) {
  return (
    <ImageConfigContext.Provider value={config}>
      {children}
    </ImageConfigContext.Provider>
  );
}

export function useImageConfig(): ImageConfig | null {
  return useContext(ImageConfigContext);
}
