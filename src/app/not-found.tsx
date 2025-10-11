import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <ol className="list-inside list-decimal text-center text-lg sm:text-left">
          <li className="mb-2">
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              404 - Page Not Found
            </code>
          </li>
          <li>Sorry, the page you are looking for does not exist.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-lg text-background transition-colors hover:bg-[#383838] hover:text-white dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="/"
          >
            Return Home
          </Link>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-lg transition-colors hover:border-transparent hover:bg-[#f2f2f2] hover:text-black dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href={`mailto:${RESUME_DATA.contact.email}`}
            aria-label={`Send email to ${RESUME_DATA.name}`}
            title={`Email: ${RESUME_DATA.contact.email}`}
          >
            Get in Touch 🤙
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={
            RESUME_DATA.contact.social.find((s) => s.name === "GitHub")?.url
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${RESUME_DATA.name} profile`}
          title={RESUME_DATA.name}
        >
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={RESUME_DATA.personalWebsiteUrl}
          aria-label="Visit personal website"
          title="Personal Website"
        >
          Go to homepage →
        </a>
      </footer>
    </div>
  );
}
