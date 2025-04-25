import React from "react";
export function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <input
        className="border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  );
}
