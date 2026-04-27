declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  import type { JSX } from "react";

  export const metadata: {
    title: string;
    description: string;
    date: string;
    readingTime?: string;
  };

  const MDXContent: (props: MDXProps) => JSX.Element;
  export default MDXContent;
}
