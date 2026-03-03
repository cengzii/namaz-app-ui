import { cn } from "@/app/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const Typography = ({
  children,
  className,
  as: Component = "p",
  ...props
}: TextProps) => {
  const baseStyles = "text-slate-50 leading-relaxed font-sans tracking-tight antialiased transition-colors";
  
  const variants = {
    h1: "text-4xl font-bold tracking-tight mb-2",
    h2: "text-3xl font-semibold mb-2",
    h3: "text-2xl font-medium mb-1",
    h4: "text-xl font-medium mb-1",
    p: "text-lg text-slate-300",
    span: "text-base text-slate-400",
    div: "text-lg",
  };

  return (
    <Component className={cn(baseStyles, variants[Component as keyof typeof variants], className)} {...props}>
      {children}
    </Component>
  );
};
