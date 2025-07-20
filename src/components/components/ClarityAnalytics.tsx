// src/components/ClarityAnalytics.tsx
"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

 export default function ClarityAnalytics() {
  useEffect(() => {
    // Make sure to use your actual project ID
    const projectId = "sfjj61ccih";

    if (!projectId) {
      Clarity.init(projectId);
    }
  }, []);

  return null; // This component renders nothing.
}


