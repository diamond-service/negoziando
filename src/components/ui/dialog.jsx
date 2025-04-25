import { useState } from "react";
import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => onOpenChange(false)}
        >
          ✖️
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className }) {
  return <div className={`space-y-6 ${className}`}>{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

export function DialogFooter({ children }) {
  return <div className="pt-4">{children}</div>;
}
