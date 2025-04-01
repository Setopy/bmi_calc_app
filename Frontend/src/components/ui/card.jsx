import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const Card = React.forwardRef(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
      {...props}
    />
  );
});

const CardImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={` ${className}`} />
);
const CardHeader = ({ children }) => (
  <div className="font-bold text-3xl tetxt-[#191614] mt-2">{children}</div>
);

const CardContent = ({ children }) => <div className="p-4 text-[#7F6F64]">{children}</div>;

export { Card, CardImage, CardHeader, CardContent };
