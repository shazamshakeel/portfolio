import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-gray-800/50 p-4 transition-all duration-300 hover:border-gray-700">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-base font-semibold">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex gap-2 transition-colors duration-200 hover:text-blue-400"
              >
                {title}
                <span
                  className="mt-2.5 h-1.5 w-1.5 rounded-full bg-green-500"
                  title="View Project"
                  aria-label="External link indicator"
                />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <CardDescription className="text-sm print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              className="px-1.5 py-0.5 text-xs print:px-1 print:py-0.5 print:text-[9px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
