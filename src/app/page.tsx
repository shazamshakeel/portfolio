import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

// Generate metadata for this page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${RESUME_DATA.name} - Portfolio & Resume`,
    description: RESUME_DATA.summary,
  };
}

export const dynamic = "force-static";

export default async function Page() {
  // Structured data for SEO (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.imageUrl,
    jobTitle: RESUME_DATA.about,
    description: RESUME_DATA.summary,
    email: RESUME_DATA.contact.email,
    telephone: RESUME_DATA.contact.tel,
    sameAs: RESUME_DATA.contact.social.map((social) => social.url),
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.university,
    })),
    worksFor: RESUME_DATA.work.map((work) => ({
      "@type": "Organization",
      name: work.company,
      url: work.link,
    })),
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-black p-6 sm:p-8 md:p-16 print:p-12">
        <div className="mx-auto w-full max-w-4xl space-y-16 rounded-2xl bg-black text-white print:bg-white print:text-black">
          {/* Hero Section */}
          <section className="flex flex-col-reverse items-center justify-between gap-8 rounded-xl border border-gray-800 p-6 md:flex-row">
            <div className="flex-1 space-y-3">
              <h1 className="text-center text-4xl font-bold tracking-tight md:text-start lg:text-5xl">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md whitespace-pre-line text-balance text-center text-base text-gray-300 md:text-start print:text-xs">
                {RESUME_DATA.about}
              </p>
              <nav
                className="pt-1text-sm flex justify-center gap-x-1 text-gray-300 md:justify-start print:hidden"
                aria-label="Social media and contact links"
              >
                {RESUME_DATA.personalWebsiteUrl ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={RESUME_DATA.personalWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit personal website"
                      title="Personal Website"
                    >
                      <GlobeIcon className="h-4 w-4 transition-colors duration-200 hover:text-blue-400" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`mailto:${RESUME_DATA.contact.email}`}
                      aria-label={`Send email to ${RESUME_DATA.name}`}
                      title={`Email: ${RESUME_DATA.contact.email}`}
                    >
                      <MailIcon className="h-4 w-4 transition-colors duration-200 hover:text-blue-400" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name} profile`}
                      title={social.name}
                    >
                      <social.icon className="h-4 w-4 transition-colors duration-200 hover:text-blue-400" />
                    </a>
                  </Button>
                ))}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`tel:${RESUME_DATA.contact.tel}`}
                      aria-label={`Call ${RESUME_DATA.name}`}
                      title={`Phone: ${RESUME_DATA.contact.tel}`}
                    >
                      <PhoneIcon className="h-4 w-4 transition-colors duration-200 hover:text-blue-400" />
                    </a>
                  </Button>
                ) : null}
              </nav>
            </div>

            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-xl border-2 border-gray-800 md:mx-0">
              <Image
                src="/Shazam-Shakeel.png"
                alt={`${RESUME_DATA.name}'s profile picture`}
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          </section>

          {/* About Section */}
          <FadeIn>
            <Section aria-labelledby="about-heading">
              <h2 id="about-heading" className="text-2xl font-bold">
                About
              </h2>
              <p className="whitespace-pre-line text-pretty text-sm text-gray-300 print:text-[12px]">
                {RESUME_DATA.summary}
              </p>
            </Section>
          </FadeIn>

          {/* Skills Section */}
          <FadeIn>
            <Section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-bold">
                Skills
              </h2>
              <div className="space-y-4">
                {RESUME_DATA.skills.map((skillCategory: any) => (
                  <div key={skillCategory.title}>
                    <h3 className="mb-3 text-base font-semibold text-gray-300">
                      {skillCategory.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2" role="list">
                      {skillCategory.list.map((skill: string) => (
                        <li key={skill}>
                          <Badge className="text-xs print:text-xs">
                            {skill}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </FadeIn>

          {/* Highlights Section */}
          <FadeIn>
            <Section
              className="print-force-new-page scroll-mb-16"
              aria-labelledby="highlights-heading"
            >
              <h2 id="highlights-heading" className="mb-2 text-2xl font-bold">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                {RESUME_DATA.keyHighlights.map((point) => (
                  <Card
                    key={point.title}
                    className="flex flex-col items-start gap-2 p-4"
                  >
                    <div className="text-2xl">{point.icon}</div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold">{point.title}</h3>
                      <p className="whitespace-pre-line text-sm text-gray-300">
                        {point.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          </FadeIn>

          {/* Experience Section */}
          <FadeIn>
            <Section
              className="print-force-new-page"
              aria-labelledby="experience-heading"
            >
              <h2 id="experience-heading" className="mb-2 text-2xl font-bold">
                Work Experience
              </h2>
              <div className="space-y-4">
                {RESUME_DATA.work.map((work) => (
                  <Card key={work.company}>
                    <CardHeader className="pt-2">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="flex flex-col items-start gap-x-2 gap-y-1 font-medium md:flex-row md:items-center">
                          <a
                            href={work.link}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-xl font-semibold transition-colors duration-200 hover:text-blue-400"
                          >
                            {work.company}
                          </a>

                          <span className="mt-1 inline-flex gap-x-1 md:mt-0">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs print:px-2 print:py-0.5 print:text-xs print:leading-tight"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                      {work.experiences.map(
                        (experience: any, expIndex: number) => (
                          <div
                            key={expIndex}
                            className={expIndex > 0 ? "mt-5" : ""}
                          >
                            <div className="flex flex-col items-start justify-between gap-x-2 gap-y-1 text-base md:flex-row md:items-center">
                              <h4 className="text-base font-semibold print:text-[12px]">
                                {experience.title}
                              </h4>
                              <span className="mx-2 hidden h-[1px] flex-grow bg-gray-800 md:block" />
                              <time
                                className="text-sm tabular-nums text-gray-400"
                                dateTime={experience.start}
                              >
                                {experience.start} -{" "}
                                {experience.end ?? "Present"}
                              </time>
                            </div>

                            {experience.description && (
                              <p className="mb-2 whitespace-pre-line text-sm print:text-[11px]">
                                {experience.description}
                              </p>
                            )}

                            {experience.bulletPoints &&
                              experience.bulletPoints.length > 0 && (
                                <ul className="mt-2 text-sm print:text-xs">
                                  {experience.bulletPoints.map(
                                    (point: any, index: number) => (
                                      <li
                                        key={index}
                                        className="mb-2 flex gap-x-2 print:mb-1"
                                      >
                                        <ArrowRightIcon
                                          className="mt-[0.25em] h-3 w-3 flex-shrink-0 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="flex items-center gap-x-1">
                                          {point.text}
                                          {point.link && (
                                            <a
                                              href={point.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center hover:text-blue-500"
                                              aria-label="View related link"
                                            >
                                              <ExternalLinkIcon className="ml-1 h-3 w-3" />
                                            </a>
                                          )}
                                          {point.links &&
                                            point.links.length > 0 && (
                                              <span className="ml-1 flex items-center space-x-1">
                                                {point.links.map(
                                                  (
                                                    link: {
                                                      name: string;
                                                      url: string;
                                                    },
                                                    linkIndex: number,
                                                  ) => (
                                                    <a
                                                      key={linkIndex}
                                                      href={link.url}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center hover:text-blue-500"
                                                      aria-label={`View ${link.name}`}
                                                      title={link.name}
                                                    >
                                                      <ExternalLinkIcon className="h-3 w-3" />
                                                    </a>
                                                  ),
                                                )}
                                              </span>
                                            )}
                                        </span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                          </div>
                        ),
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </FadeIn>

          {/* Open Source Contributions Section */}
          <FadeIn>
            <Section
              className="print-force-new-page"
              aria-labelledby="open-source-heading"
            >
              <h2 id="open-source-heading" className="mb-2 text-2xl font-bold">
                Open Source Contributions
              </h2>
              <ul className="space-y-4" role="list">
                {RESUME_DATA.openSourceContributions.map((oss) => (
                  <li key={oss.repository}>
                    <Card>
                      <CardHeader>
                        <h3 className="text-balance text-base font-semibold">
                          <a
                            href={oss.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex gap-2 transition-colors duration-200 hover:text-blue-400"
                          >
                            {oss.title} — {oss.repository}
                          </a>
                        </h3>
                      </CardHeader>
                      <CardContent className="mt-2">
                        {oss.description && (
                          <p className="mb-2 whitespace-pre-line text-sm print:text-[11px]">
                            {oss.description}
                          </p>
                        )}

                        {oss.bulletPoints && oss.bulletPoints.length > 0 && (
                          <ul className="mt-2 text-sm print:text-[10px]">
                            {oss.bulletPoints.map(
                              (point: any, index: number) => (
                                <li key={index} className="mb-1 flex gap-x-2">
                                  <ArrowRightIcon
                                    className="mt-[0.25em] h-3 w-3 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="flex items-center gap-x-1">
                                    {point.text}
                                    {point.link && (
                                      <a
                                        href={point.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center hover:text-blue-500"
                                        aria-label="View contribution"
                                      >
                                        <ExternalLinkIcon className="ml-1 h-3 w-3" />
                                      </a>
                                    )}
                                    {point.links && point.links.length > 0 && (
                                      <span className="ml-1 flex items-center space-x-1">
                                        {point.links.map(
                                          (
                                            link: { name: string; url: string },
                                            linkIndex: number,
                                          ) => (
                                            <a
                                              key={linkIndex}
                                              href={link.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center hover:text-blue-500"
                                              aria-label={`View ${link.name}`}
                                              title={link.name}
                                            >
                                              <ExternalLinkIcon className="h-3 w-3" />
                                            </a>
                                          ),
                                        )}
                                      </span>
                                    )}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeIn>

          {/* Education Section */}
          <FadeIn>
            <Section aria-labelledby="education-heading">
              <h2 id="education-heading" className="mb-2 text-2xl font-bold">
                Education
              </h2>
              <ul className="space-y-4" role="list">
                {RESUME_DATA.education.map((education) => (
                  <li key={education.university}>
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col items-start justify-between gap-x-2 gap-y-1 text-base md:flex-row md:items-center">
                          <h3 className="font-semibold">
                            {education.university}
                          </h3>
                          <span className="mx-2 hidden h-[1px] flex-grow bg-gray-800 md:block" />
                          <time
                            className="text-sm tabular-nums text-gray-400"
                            dateTime={education.start}
                          >
                            {education.start} - {education.end}
                          </time>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-2 print:text-[12px]">
                        <span>{education.degree}</span>
                        <ul className="mt-2 block text-sm print:text-[10px]">
                          <li className="mb-1 flex gap-x-2">
                            <ArrowRightIcon
                              className="mt-[0.25em] h-3 w-3 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="flex items-center gap-x-1">
                              CGPA: {education.cgpa}
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeIn>

          {/* Projects Section */}
          <FadeIn>
            <Section
              className="print-force-new-page scroll-mb-16"
              aria-labelledby="projects-heading"
            >
              <h2 id="projects-heading" className="mb-2 text-2xl font-bold">
                Projects
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-3 print:gap-3">
                {RESUME_DATA.projects.map((project) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={project.link}
                    />
                  );
                })}
              </div>
            </Section>
          </FadeIn>

          {/* Certificates Section */}
          <FadeIn>
            <Section aria-labelledby="certificates-heading">
              <h2 id="certificates-heading" className="mb-2 text-2xl font-bold">
                Certificates
              </h2>
              <ul className="space-y-4" role="list">
                {RESUME_DATA.certificates.map((cert) => (
                  <li key={`${cert.title}-${cert.issuer}`}>
                    <Card>
                      <CardContent>
                        <div className="flex flex-col gap-2 gap-x-2 text-base md:flex-row md:items-center md:justify-between">
                          <h3 className="font-semibold text-white">
                            {cert.title}
                          </h3>
                          <span className="mx-2 hidden h-[1px] flex-grow bg-gray-800 md:block" />
                          <div className="flex items-center text-sm tabular-nums text-gray-400">
                            <span className="mr-3 text-xs text-gray-400">
                              {cert.issuer}
                            </span>
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center hover:text-blue-500"
                                aria-label={`View ${cert.title} certificate`}
                              >
                                <ExternalLinkIcon className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
