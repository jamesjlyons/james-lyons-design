import Link from "next/link";
import React from "react";

export function WorkLink({
  href,
  title,
  text,
  meta,
}: {
  href: string;
  title: string;
  text: string;
  meta?: string[];
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link href={href}>
      <a>
        <h3>
          {title}

          {isExternal ? (
            <>
              {" "}
              {/* <ExternalLinkIcon className="inline w-5 mb-0.5 align-middle opacity-50" /> */}
            </>
          ) : null}
        </h3>

        {meta && meta.length > 0 ? (
          <div>
            {meta.map((x, i) => {
              return (
                <React.Fragment key={i}>
                  {x}
                  {i + 1 < meta.length ? (
                    <>
                      {" "}
                      <span>&middot;</span>{" "}
                    </>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}

        <p>{text}</p>
      </a>
    </Link>
  );
}
