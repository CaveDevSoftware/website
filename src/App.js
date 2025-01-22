import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { Suspense } from "react";
import CustomFallback from "components/Custom/CustomFallBack";
import { LoadingProvider } from "contexts/LoadingContext";
import { ToastProvider } from "contexts/ToastContext";


export default function App() {

  return (
    <Suspense fallback={<CustomFallback />}>
        <LoadingProvider>
          <ToastProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/cavedevsofware/*" element={<AdminLayout />} />
                <Route path="*" element={<Navigate to="/cavedevsofware/" replace />} />
              </Routes>
            </BrowserRouter>
          </ToastProvider>
        </LoadingProvider>
    </Suspense>
  );
}
