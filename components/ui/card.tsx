import React, { ReactNode } from "react";

interface CardProps {
children: ReactNode;
className?: string;
}

export function Card({ children, className = "" }: CardProps) {
return <div className={rounded-2xl border p-4 ${className}}>{children}</div>;
}

interface CardContentProps {
children: ReactNode;
className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
return <div className={text-gray-800 ${className}}>{children}</div>;
}