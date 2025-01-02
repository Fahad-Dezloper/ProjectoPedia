'use client'

import * as React from 'react'
import { Mic, ArrowUp, Plus, RefreshCw, ScanSearchIcon, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ProjectCard } from '@/components/project-card'
import Link from 'next/link'
import ProjectCards from '@/app/components/ProjectCards'
import { useChat } from 'ai/react';

const exampleQueries = [
  "Git Wrapped",
  "I am Looking for a project to select colors?",
  "Looking for Pre-Build Components",
]

export default function Chat({start}: any) {

  const [query, setQuery] = React.useState('');
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [hidden, setHidden] = React.useState(false)
  const [showMessages, setShowMessages] = React.useState(false)
  const [error, setError] = React.useState('');
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHidden(true);
    start(true);
    setShowMessages(true);
    setError('');
    handleSubmit(e)
  }

  // const refreshProjects = () => {
  //   setIsRefreshing(true)
  //   setProjects([...projects].sort(() => Math.random() - 0.5))
  //   setTimeout(() => setIsRefreshing(false), 500)
  // }

  return (
    <>{error && <div className="text-red-500">{error}</div>}
    <div className="w-full h-screen overflow-hidden flex flex-col justify-between max-w-3xl mx-auto px-4 py-2 space-y-4">
      
      <div className={`${showMessages ? "" : "hidden"} max-h-[84vh] px-3 flex flex-col gap-4 overflow-auto`}>
      {messages.map(m => (
        <div key={m.id} className={`whitespace-pre-wrap flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}>
           <div 
        className={`p-2 rounded-lg ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        style={{ maxWidth: "75%", wordBreak: "break-word" }}
      >
          {m.content}
          </div>
        </div>
      ))}
      </div>
      
      <div className='flex flex-col gap-4'>
        <div className={`text-center space-y-4 ${hidden ? "hidden" : ""}`}>
        <h1 className="text-4xl font-bold">What Problem are you facing?</h1>
        </div>

        <div className="relative">
          <div className={`flex flex-wrap gap-2 justify-center ${hidden ? "hidden" : ""}`}>
            {exampleQueries.map((query) => (
              <Button
                key={query}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setQuery(query)}
              >
                {query}
              </Button>
            ))}
          </div>
        </div>

      <Card className="relative">
        <form onSubmit={onSubmit} className="flex items-center p-2">
            <Search className="size-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for a Project..."
            value={input}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 text-base bg-transparent border-0 outline-none focus:outline-none"
          />
          <div className="flex items-center gap-2">
            {/* <Button type="button" variant="ghost" className="hidden md:flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Project
            </Button> */}
            <Button type="submit" variant="ghost" size="icon">
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Submit</span>
            </Button> 
          </div>
        </form>
      </Card>

      <div className="flex gap-2 justify-center text-sm font-primary text-muted-foreground">
        <h1 className='hover:text-foreground transition-colors'>Build with 💙 by <Link target='_blank' className='font-black underline' href="https://x.com/l_fahadkhan_l">𝕏</Link></h1>
      </div>
      </div>
    </div>
    </>
  )
}

