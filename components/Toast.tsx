"use client";

import { useEffect } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onDismiss: () => void;
};

export function Toast({ message, type, onDismiss }: ToastProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onDismiss, 5000);
    return () => window.clearTimeout(timeout);
  }, [message, onDismiss]);

  const isSuccess = type === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed right-4 top-4 z-[100] flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 shadow-xl ${
        isSuccess ? "border-teal-200 bg-teal-50 text-teal-900" : "border-red-200 bg-red-50 text-red-900"
      }`}
    >
      {isSuccess ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" /> : <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />}
      <p className="text-sm font-medium">{message}</p>
      <button type="button" onClick={onDismiss} aria-label="Dismiss notification" className="ml-2 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}