import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="overflow-hidden w-24 h-24 cursor-pointer">
            <CardContent className="p-0">
              <Image
                src={project.snapshot}
                alt={project.title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <div className="space-y-2">
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-sm">{project.projectName}</p>
            <p className="text-xs text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.hashtags.map((tag) => (
                <span key={tag} className="text-xs bg-muted px-1.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

