// src/app/App.jsx
import AppErrorBoundary from "./AppErrorBoundary.jsx";
import AppRoutes from "./AppRoutes.jsx";

export default function App() {
  return (
    <AppErrorBoundary>
      <AppRoutes />
    </AppErrorBoundary>
  );
}
