"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, Shield, Code, Zap, MessageSquare, Clock, Globe, Terminal, CheckCircle2, ArrowRight, Container, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Container className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">NanoClaw</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#comparison" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Compare</Link>
            <Link href="#quick-start" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quick Start</Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </div>
          <Button asChild>
            <Link href="https://github.com/gavrielc/nanoclaw" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            Open Source • MIT License
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            NanoClaw
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A lightweight Claude assistant that runs securely in containers.{" "}
            <span className="text-primary font-semibold">~500 lines of TypeScript</span>.
            Built to be understood and customized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://github.com/gavrielc/nanoclaw" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#quick-start">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t">
            <div>
              <div className="text-3xl font-bold text-primary">~500</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10 min</div>
              <div className="text-sm text-muted-foreground">To Understand</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Container Isolated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NanoClaw Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why NanoClaw</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Through Simplicity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NanoClaw takes a radically different approach to AI assistants. Instead of complex permission systems, it uses real OS-level container isolation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Small Enough to Understand</CardTitle>
                <CardDescription>
                  Just ~500 lines of core TypeScript code. One process, a few source files. No microservices, no message queues, no abstraction layers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You can read and understand the entire codebase in under 10 minutes. Have Claude Code walk you through it.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle>Secure by Isolation</CardTitle>
                <CardDescription>
                  Agents run in actual Linux containers using Apple Container on macOS or Docker on Linux. Each chat gets its own sandboxed context.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bash access is safe because commands run inside the container, not on your host system.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle>Built for Customization</CardTitle>
                <CardDescription>
                  This is not a framework—it is working software designed to be forked and modified. No configuration sprawl.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Want different behavior? Change the code directly. The codebase is intentionally small enough that modifications are safe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NanoClaw comes with essential features built-in, with a skills system for adding more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: MessageSquare, title: "WhatsApp Integration", desc: "Message your Claude assistant directly from your phone" },
              { icon: Container, title: "Container Isolation", desc: "Each chat runs in its own sandboxed environment" },
              { icon: Clock, title: "Scheduled Tasks", desc: "Set up recurring jobs that run Claude automatically" },
              { icon: Globe, title: "Web Access", desc: "Built-in web search and content fetching capabilities" },
              { icon: Shield, title: "Isolated Groups", desc: "Each group has its own memory and filesystem" },
              { icon: Sparkles, title: "Skills System", desc: "Add optional integrations like Gmail via skills" },
            ].map((feature, i) => (
              <Card key={i} className="border-none bg-background/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              NanoClaw vs Traditional AI Assistants
            </h2>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-6 font-semibold">Feature</th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">NanoClaw</th>
                      <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Codebase Size", "~500 lines", "50,000+ lines"],
                      ["Security Model", "OS-level container isolation", "Application-level permissions"],
                      ["Dependencies", "Minimal", "45+ packages"],
                      ["Time to Understand", "~10 minutes", "Days or weeks"],
                      ["Customization", "Direct code changes", "Complex configuration files"],
                    ].map(([feature, nano, others], i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-4 px-6">{feature}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-green-600 dark:text-green-400">{nano}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Quick Start</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in 4 Steps
            </h2>
            <p className="text-muted-foreground">
              NanoClaw uses Claude Code for setup—no manual configuration needed.
            </p>
          </div>

          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="step1">1. Clone</TabsTrigger>
              <TabsTrigger value="step2">2. Enter</TabsTrigger>
              <TabsTrigger value="step3">3. Claude</TabsTrigger>
              <TabsTrigger value="step4">4. Setup</TabsTrigger>
            </TabsList>
            <TabsContent value="step1">
              <Card>
                <CardHeader>
                  <CardTitle>Clone the Repository</CardTitle>
                  <CardDescription>Get the NanoClaw source code from GitHub</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
                    <span className="text-green-400">$</span>{" "}
                    <span className="text-white">git clone https://github.com/gavrielc/nanoclaw.git</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="step2">
              <Card>
                <CardHeader>
                  <CardTitle>Enter the Directory</CardTitle>
                  <CardDescription>Navigate to the cloned repository</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
                    <span className="text-green-400">$</span>{" "}
                    <span className="text-white">cd nanoclaw</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="step3">
              <Card>
                <CardHeader>
                  <CardTitle>Run Claude Code</CardTitle>
                  <CardDescription>Start the Claude Code assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
                    <span className="text-green-400">$</span>{" "}
                    <span className="text-white">claude</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="step4">
              <Card>
                <CardHeader>
                  <CardTitle>Run Setup</CardTitle>
                  <CardDescription>Claude Code handles everything: dependencies, authentication, container setup, service configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
                    <span className="text-purple-400">&gt;</span>{" "}
                    <span className="text-white">/setup</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Can You Build?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "📊", title: "Sales Pipeline Assistant", desc: "Send an overview of the sales pipeline every weekday morning at 9am" },
              { emoji: "📝", title: "Documentation Maintainer", desc: "Review git history weekly and update README if there's drift" },
              { emoji: "📰", title: "AI News Briefing", desc: "Compile news on AI developments from Hacker News and TechCrunch" },
              { emoji: "📧", title: "Email Management", desc: "Integrate Gmail to manage inbox, draft responses, summarize emails" },
              { emoji: "🏠", title: "Smart Home Control", desc: "Connect to home automation systems and control devices via WhatsApp" },
              { emoji: "🔍", title: "Research Assistant", desc: "Search the web, fetch content, summarize articles, compile reports" },
            ].map((useCase, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="text-2xl">{useCase.emoji}</span>
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why WhatsApp and not Telegram/Signal?</AccordionTrigger>
              <AccordionContent>
                Because the author uses WhatsApp. Fork it and run a skill to change it. That&apos;s the whole point—NanoClaw is designed to be customized for your exact needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why Apple Container instead of Docker?</AccordionTrigger>
              <AccordionContent>
                On macOS, Apple Container is lightweight, fast, and optimized for Apple silicon. But Docker is also fully supported—during /setup, you can choose which runtime to use. On Linux, Docker is used automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I run this on Linux?</AccordionTrigger>
              <AccordionContent>
                Yes! Run /setup and it will automatically configure Docker as the container runtime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is this secure?</AccordionTrigger>
              <AccordionContent>
                Agents run in containers, not behind application-level permission checks. They can only access explicitly mounted directories. You should still review what you&apos;re running, but the codebase is small enough that you actually can.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Why no configuration files?</AccordionTrigger>
              <AccordionContent>
                We don&apos;t want configuration sprawl. Every user should customize it so that the code matches exactly what they want rather than configuring a generic system. If you like having config files, tell Claude to add them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I debug issues?</AccordionTrigger>
              <AccordionContent>
                Ask Claude Code. &quot;Why isn&apos;t the scheduler running?&quot; &quot;What&apos;s in the recent logs?&quot; &quot;Why did this message not get a response?&quot; That&apos;s the AI-native approach.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Requirements</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Operating System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>macOS (Apple Silicon recommended)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Linux (x86_64 or ARM64)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Software
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Node.js 20+</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Claude Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Apple Container (macOS) or Docker</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Own AI Assistant?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                NanoClaw is open source under the MIT license. Fork it, customize it, make it yours.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://github.com/gavrielc/nanoclaw" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Get Started on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Container className="w-5 h-5 text-primary" />
              <span className="font-bold">NanoClaw</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-muted-foreground text-sm">Lightweight Claude Assistant</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://github.com/gavrielc/nanoclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="https://news.ycombinator.com/item?id=46850205" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hacker News
              </Link>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © 2026 NanoClaw. Open source under MIT License.
          </p>
        </div>
      </footer>
    </main>
  );
}
