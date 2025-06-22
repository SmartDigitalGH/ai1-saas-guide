import React, { ReactNode } from "react";

type CardProps = {
children: ReactNode;
className?: string;
};

export function Card({ children, className = "" }: CardProps): JSX.Element {
return (
<div className={rounded-2xl border p-4 ${className}}>
{children}
</div>
);
}

type CardContentProps = {
children: ReactNode;
className?: string;
};

export function CardContent({ children, className = "" }: CardContentProps): JSX.Element {
return (
<div className={text-gray-800 ${className}}>
{children}
</div>
);
}