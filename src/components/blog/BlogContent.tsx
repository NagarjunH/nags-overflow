import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type BlogContentProps = {
  content: string;
};

const BlogContent = ({
  content,
}: BlogContentProps) => {
  return (
    <div className="prose-content mt-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => {
            const id = String(children)
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <h1
                id={id}
                className="mb-6 mt-12 text-5xl font-bold text-white"
              >
                {children}
              </h1>
            );
          },

          h2: ({ children }) => {
            const id = String(children)
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <h2
                id={id}
                className="mb-5 mt-10 text-4xl font-bold text-white"
              >
                {children}
              </h2>
            );
          },

          h3: ({ children }) => (
            <h3 className="mb-4 mt-8 text-3xl font-bold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              {children}
            </p>
          ),

          li: ({ children }) => (
            <li className="ml-6 list-disc text-slate-300">
              {children}
            </li>
          ),

          code(props: any) {
            const {
              children,
              className,
            } = props;

            const match =
              /language-(\w+)/.exec(
                className || ""
              );

            return match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-2xl !bg-slate-950 !p-6"
              >
                {String(children).replace(
                  /\n$/,
                  ""
                )}
              </SyntaxHighlighter>
            ) : (
              <code className="rounded bg-slate-800 px-2 py-1 text-sky-400">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogContent;