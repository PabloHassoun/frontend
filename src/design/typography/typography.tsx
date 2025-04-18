import clsx from "clsx";

export type TypographyProps = {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  className?: string;
  children: React.ReactNode;
};

export const Typography = ({
  variant,
  children,
  className,
  component: Component = "div",
}: TypographyProps) => {
  let variantStyle = "";

  switch (variant) {
    case "display":
      variantStyle = "font-accent-family text-display";
      break;
    case "h1":
      variantStyle = "font-main-family text-h1";
      break;
    case "h2":
      variantStyle = "font-main-family text-h2";
      break;
    case "h3":
      variantStyle = "font-main-family text-h3";
      break;
    case "h4":
      variantStyle = "font-main-family text-h4";
      break;
    case "h5":
      variantStyle = "font-main-family text-h5";
      break;
    case "lead":
      variantStyle = "font-main-family text-lead";
      break;
    case "body-lg":
      variantStyle = "font-main-family text-body-lg";
      break;
    case "body-base":
      variantStyle = "font-main-family text-body-base";
      break;
    case "body-sm":
      variantStyle = "font-main-family text-body-sm";
      break;
    case "caption1":
      variantStyle = "font-main-family text-caption1";
      break;
    case "caption2":
      variantStyle = "font-main-family text-caption2";
      break;
    case "caption3":
      variantStyle = "font-main-family text-caption3";
      break;
    case "caption4":
      variantStyle = "font-main-family text-caption4";
      break;
  }
  return (
    <Component className={clsx(className, variantStyle)}>{children}</Component>
  );
};
