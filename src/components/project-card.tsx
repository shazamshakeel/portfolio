import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon } from "lucide-react";
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
          <CardTitle>
            <div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-400"
              >
                <h3 className="text-balance text-base font-semibold">
                  {title}
                </h3>
                <span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </span>
              </a>
            </div>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed print:text-[10px]">
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
