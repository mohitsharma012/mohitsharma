import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4 text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-14 mb-4 text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-7 mb-2 text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[16px] leading-normal text-[#444] dark:text-[#aaa] my-5">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[#1a1a1a] dark:text-[#e5e5e5] underline underline-offset-4 decoration-[#ccc] dark:decoration-[#444] hover:decoration-[#1a1a1a] dark:hover:decoration-[#e5e5e5] transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-5 space-y-2 text-[16px] leading-normal text-[#444] dark:text-[#aaa] marker:text-[#bbb] dark:marker:text-[#555]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-5 space-y-2 text-[16px] leading-normal text-[#444] dark:text-[#aaa] marker:text-[#bbb] dark:marker:text-[#555]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#ddd] dark:border-[#333] pl-4 my-6 italic text-[#555] dark:text-[#888]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="text-[0.85em] font-mono px-1.5 py-0.5 rounded-md bg-[#f0f0f0] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-[#eaeaea] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] p-4 text-[13px] leading-relaxed font-mono text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-t border-[#eaeaea] dark:border-[#1e1e1e]" />,
  img: (props) => {
    const { alt = "", ...rest } = props as ImageProps;
    return (
      <Image
        sizes="100vw"
        className="my-6 rounded-lg w-full h-auto"
        width={1200}
        height={800}
        alt={alt}
        {...rest}
      />
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-[#1a1a1a] dark:text-[#e5e5e5]">
      {children}
    </strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
