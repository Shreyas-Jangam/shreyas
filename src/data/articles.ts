export interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "ide-for-ai-browser-agents",
    title: "IDE for AI Browser Agents",
    subtitle: "Agent Skills in Codex, Claude in Chrome",
    description: "Exploring the latest developments in AI-powered browser automation and how it's revolutionizing web interactions.",
    category: "AI Agents",
    date: "2025-12-20",
    readTime: "5 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/6689f5de-c69f-4f0d-bc3f-bfa47815f808/IDE_for_AI_Browser_Agents.png",
    author: "Shreyas Jangam",
    content: `## Today's Top AI Highlights

1. **The IDE for browser agents: from prototype to production code**
2. **AI Agent with one endless chat and self-managing memory**
3. **Claude can now use your browser**
4. **GLM 4.7 outperforms GPT 5.1 and Claude Sonnet 4.5**
5. **Skills now officially available in Codex**

## AI Tutorial: Developer's Guide to Multi-Agent Patterns in Google ADK

Here's a comprehensive breakdown of 8 production patterns for building agent teams. All backed by real architectural principles.

Each pattern solves a specific problem:

1. **Sequential Pipeline** – Data processing that needs predictable order. Parser extracts text, Extractor pulls structured data, Summarizer generates output.

2. **Coordinator/Dispatcher** – Intent-based routing. Analyzes requests and sends to billing specialist vs tech support specialist based on descriptions.

3. **Parallel Fan-Out/Gather** – Eliminate sequential bottlenecks. Run security scan, style check, and performance analysis simultaneously. Synthesize at the end.

4. **Hierarchical Decomposition** – Handle tasks too large for one context window. Top-level ReportWriter delegates to ResearchAssistant, which manages WebSearch and Summarizer agents.

5. **Generator + Critic** – Quality enforcement with conditional looping. Generate SQL → validate syntax → regenerate if errors → exit when pass.

6. **Iterative Refinement** – Qualitative improvement loop. Draft → critique → refine → repeat until quality threshold met.

7. **Human-in-the-Loop** – Safety net for irreversible actions. Agent processes routine work, pauses for human approval on high-stakes decisions.

8. **Composite** – Real production systems combine patterns. Coordinator routes to parallel search, results go through generator-critic loop before delivery.

## Latest Developments

### The IDE for Browser Agents: From Prototype to Production Code

Your browser agent just tried to sign up for a service and hit the email verification wall. Now you're stuck building custom workarounds for every auth flow, or worse, manually clicking through 2FA codes while your "automation" waits.

**Notte** solves this and treats browser automation like actual engineering, not magic. It's a full-stack platform where you craft, debug, and ship production-grade browser agents. Not "set it and forget it" promises. Real code you understand and control, backed by infrastructure (identities, proxies, vaults, managed browsers) that actually scales.

**How it works:**

1. **Real Digital Identities** – Agents get their own governed email addresses and phone numbers. They autonomously handle login, 2FA, and account creation instead of failing at verification screens.

2. **Automation Studio IDE** – Code editor + live browser viewer + execution logs in one window. You see exactly what your agent sees as it runs. Debug failures with step-by-step context, not guesswork.

3. **Agent Mode Prototyping** – Describe a task in natural language, watch it run live in the browser, then click "Open in Editor" to get editable code. Prototype fast, ship with code you own and can refine.

4. **Record Once, Replay as Code** – Click through a workflow manually. Notte records the session and generates a deterministic script that mirrors your actions.

5. **One-click deployment** - Turn your scripts into Functions that expose a stable API endpoint and can be scheduled with cron-style triggers.

### AI Agent with One Endless Chat and Self-Managing Memory

AI memory banks are fine until your conversation sprawls across 47 different chats, and many times, you're managing the memory yourself, deleting and adding relevant ones.

**MIRA** is an open-source framework that treats the inability to start fresh as a design feature, not a limitation. Memories extract themselves from conversations and decay through formulas based on usage patterns; frequently accessed information persists while stale data fades.

**Key Highlights:**

1. **Self-maintaining memory graph** - Discrete memories automatically split when verbose, consolidate when overlapping, and form typed relationships.

2. **Zero-config tool extensibility** - Drop Python files into tools/ with a HOW_TO_BUILD_A_TOOL.md guide that lets Claude Code generate new tools in minutes.

3. **Hierarchical persistent knowledge** - Domaindocs provide stable reference material with version control while memories flow around them.

4. **Single-thread** - No "new chat" functionality forces solving hard persistence problems that would otherwise be avoided.

## Quick Bites

**Claude can now use your browser** - Anthropic just dropped a Chrome extension that lets Claude navigate your browser, click buttons, and fill forms, available now in beta for all paid subscribers.

**Open-source GLM 4.7 outperforms GPT 5.1 and Claude Sonnet 4.5** - China's Z.ai just dropped GLM-4.7, their latest open-source coding model, surpassing GLM-4.6 with substantial improvements in coding, complex reasoning, and tool usage.

**Skills now officially available in Codex** - The Agent Skills standard is catching on fast: OpenAI's Codex now supports Skills, letting you extend it with the same skill format as Claude.

**Mistral's new OCR model beats DeepSeek OCR** - Mistral just shipped OCR 3, their latest document parser that beats their previous version on 74% of test cases across forms, tables, and handwriting.`
  },
  {
    id: "google-open-source-a2ui-protocol",
    title: "Google's Open-source A2UI Protocol",
    subtitle: "GPT Image 1.5 in ChatGPT and API",
    description: "Google's revolutionary approach to UI automation that's changing how we interact with applications.",
    category: "LLMs",
    date: "2025-12-15",
    readTime: "4 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/9c5a671c-3bbf-41c6-9b6c-f5ddac4b91a9/Google_s_Open-source_A2UI_Protocol.png",
    author: "Shreyas Jangam",
    content: `## Today's Top AI Highlights

1. **Google open-sources A2UI: Let AI agents generate native UIs**
2. **Persistent memory compression tool for Claude Code**
3. **GPT Image 1.5 is here in ChatGPT and API**
4. **Anthropic's new Agent Mode shows chat interface has limits**
5. **CC Agent by Google for "Your Day Ahead" briefing every morning**

## Latest Developments

### Google Open-Sources A2UI: Let AI Agents Generate Native UIs

AI agents can finally generate interactive UIs that feel native to your app.

Google just open-sourced **A2UI** (Agent-to-User Interface), a protocol that lets agents stream rich UI components like forms, date pickers, and interactive cards directly to users across web, mobile, and desktop platforms.

Instead of dumping walls of text or embedding clunky HTML widgets, agents now send lightweight JSON descriptions that your app renders using its own component library. Built with contributions from CopilotKit and designed specifically for LLMs to generate incrementally, A2UI solves the core problem of how agents safely deliver interactive experiences across trust boundaries.

**Key Highlights:**

1. **Declarative Security Model** - Agents can only request components from your pre-approved catalog, eliminating code execution risks while maintaining full expressiveness.

2. **Framework-Agnostic Rendering** - Single agent response works across Angular, Flutter, Lit, React, and native mobile with current renderer support for web (Lit/Angular) and mobile/desktop (Flutter GenUI SDK).

3. **Progressive Streaming Architecture** - Flat component list with ID references enables LLMs to build UIs incrementally without perfect JSON.

4. **Production Integration Paths** - Direct API access via A2A protocol for multi-agent systems, built-in support in AG UI/CopilotKit for full-stack React apps.

### Persistent Memory Compression Tool for Claude Code

A Claude Code plugin just dropped that gives Claude real memory across sessions.

Not through prompt engineering tricks, but by automatically capturing what happens during your work and injecting compressed observations when you restart.

**Claude-Mem** works like a persistent context layer that survives session crashes, context limits, and those annoying moments when you have to restart because you hit token caps.

**Key Highlights:**

1. **Automatic Context Injection** - No manual commands needed; recent observations auto-inject at session start with type indicators and token costs displayed upfront.

2. **Multi-Layer Memory Retrieval** - Layer 1 shows observation indexes with token costs, Layer 2 fetches full narratives on-demand via MCP search, Layer 3 accesses original source code.

3. **10 Search Operations** - Search by observations, sessions, prompts, concept tags, files, types, recent context, timeline around specific points, and more.

## Quick Bites

**GPT Image 1.5 is here in ChatGPT and API** - OpenAI's response to Nano Banana buzz: ChatGPT Images (GPT Image 1.5) for image generation and editing, with 4x speed improvements and tighter instruction adherence for edits.

**Meta releases SAM Audio for sound segmentation** - Meta just dropped SAM Audio, extending their Segment Anything toolkit to sound isolation.

**Letta Code - open-source first memory-first coding agent** - Letta just dropped Letta Code, a memory-first CLI coding agent that actually remembers what you've worked on.

**Anthropic's new Agent Mode shows chat interface has limits** - Anthropic is testing a new Agent mode for Claude that splits tasks into dedicated sections - Research, Analyze, Write, Build, and "Do More".`
  },
  {
    id: "web-agents-infrastructure",
    title: "Web Agents Infrastructure for the Next Trillion Internet Users",
    subtitle: "Google unifies model and agent with Interactions API",
    description: "Building the foundation for AI-powered web experiences at scale.",
    category: "AI Agents",
    date: "2025-12-10",
    readTime: "6 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/c2baad56-7325-4d55-aaf2-8bc3c37bed0b/Web_Agents_Infrastructure_for_the_Next_Trillion_Internet_Users.png",
    author: "Shreyas Jangam",
    content: `## The Future of Web Agents

The next trillion internet users won't interact with the web the way we do today. They'll rely on AI agents that understand context, navigate complex interfaces, and complete tasks autonomously.

Google's new Interactions API represents a fundamental shift in how we think about web automation. Instead of brittle scripts that break with every UI change, we're moving toward semantic understanding of interfaces.

## Key Innovations

### Unified Model-Agent Architecture

The traditional separation between "understanding" and "acting" is dissolving. Modern agents combine:

- **Perception**: Understanding what's on screen
- **Reasoning**: Deciding what action to take
- **Execution**: Performing the action reliably

### Semantic Web Understanding

Rather than relying on CSS selectors or XPath, next-gen agents understand:

- The purpose of UI elements
- The flow of multi-step processes
- Error states and recovery patterns

### Scale and Reliability

Building for a trillion users means:

- Sub-second response times
- 99.99% uptime requirements
- Graceful degradation under load

## Practical Applications

1. **E-commerce Automation** - Agents that can comparison shop, find deals, and complete purchases
2. **Form Filling** - Intelligent completion of complex multi-page forms
3. **Data Extraction** - Structured data from unstructured web pages
4. **Accessibility** - Making the web usable for users with different abilities

## The Road Ahead

The infrastructure being built today will define how the next generation interacts with digital services. We're not just building tools—we're building the foundation for a more accessible, efficient internet.`
  },
  {
    id: "best-open-source-ai-coding-agents",
    title: "Best Open-Source AI Coding Agents",
    subtitle: "What Teams Can Actually Ship With in 2026",
    description: "A comprehensive breakdown of today's top open-source AI coding agents and how engineering teams use them.",
    category: "AI Coding",
    date: "2025-11-28",
    readTime: "8 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/becf566b-2d3a-430e-a3e0-ea2f8c4c5cb2/Best_Open-Source_AI_Coding_Agents.png",
    author: "Shreyas Jangam",
    content: `You've probably tried an **AI coding agent** by now.

Maybe it scaffolded a feature impressively, then broke your tests.
Maybe it hallucinated APIs it never explored.
Maybe it made sweeping edits you didn't trust enough to commit.

Most teams hit the same moment: **"This works in demos, but can I actually run it in production?"**

## What is an Open-Source AI Coding Agent?

An **open-source AI coding agent** is software that uses a large language model (LLM) to **plan and perform development tasks through real tools** rather than chat responses alone.

Unlike simple AI coding assistants or copilots, these agents can:
- Read and modify repository files
- Execute verified shell commands
- Browse technical documentation
- Generate git diffs and pull requests
- Iterate against tests and CI feedback loops

In practice, coding agents behave like **junior developers operating your IDE** under supervision.

## Why Open-Source Coding Agents Matter in 2025

### 1. Autonomy Without Opacity

Instead of black-box automation, open agents expose:
- Every tool call
- Every file edit
- Every step of task planning

### 2. Model and Provider Flexibility

With open agents, models become **interchangeable components**:
- Claude by Anthropic
- GPT by OpenAI
- OpenRouter
- Local LLM runtimes via Ollama

### 3. Local-First Security

Open agents operate inside your infrastructure:
- Using local IDEs
- Running commands via your shell
- Accessing repositories with your permissions

## Common Failure Modes

1. **Long-Horizon Drift**: If planning is loose, the agent wanders and starts making edits that don't line up with the original goal.

2. **Unsafe Terminal Autonomy**: Give an agent full shell access with no checks and you get the usual mess: broken deps, removed files, or a half-working env.

3. **Poor Repository Understanding**: Without contextual grounding, agents duplicate existing utilities or violate project conventions.

4. **Unverifiable Results**: If tests aren't part of the loop, you're left judging quality by "vibes."

## Best Practices for Agent-Assisted Development

↳ **Think of the agent like a junior dev** - Give it a clear task, not a vague idea.

↳ **Keep the scope tight** - Short loops lead to safer changes and faster feedback.

↳ **Limit tools based on the task** - If the job doesn't need the shell, don't give it shell access.

↳ **Save the good runs** - If an agent handles something well, store that workflow in the repo.

↳ **Review the logs** - Spot problems early and tune the workflows over time.

## Top Open-Source Agents

### Cline
IDE-native editing with secure git diffs, auditable terminal execution, and test-driven iteration loops.

### Aider
Git-native pair programming with automatic commit generation.

### Continue
Open-source autopilot for VS Code and JetBrains with multi-model support.`
  },
  {
    id: "agentic-vibe-coding-ide",
    title: "Agentic Vibe Coding IDE with Built-in Browser",
    subtitle: "Mistral's open-source coding models, Google's Titan + MIRAS",
    description: "Mistral's open-source coding models, Google's Titan + MIRAS for long-term AI memory - The future of development environments.",
    category: "AI Coding",
    date: "2025-11-20",
    readTime: "5 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/510f897f-17f7-400c-a86c-f6ea1d77ece3/Agentic_Vibe_Coding_IDE_with_Built-in_Browser.jpg",
    author: "Shreyas Jangam",
    content: `## The Evolution of Coding IDEs

The development environment is transforming from a passive text editor into an active coding partner. The latest wave of "agentic" IDEs combines traditional code editing with AI capabilities that understand context, execute tasks, and learn from your patterns.

## Key Features of Modern Agentic IDEs

### Built-in Browser Integration

Why switch between your IDE and browser when the IDE can:
- Preview changes in real-time
- Debug network requests inline
- Test responsive layouts instantly
- Capture and replay user sessions

### Contextual AI Assistance

Modern IDEs go beyond simple autocomplete:
- Understanding your entire codebase
- Suggesting refactors based on patterns
- Generating tests that match your style
- Documenting code as you write

### Memory and Learning

The breakthrough innovation is persistent memory:
- Remembering past debugging sessions
- Learning your preferred solutions
- Building a knowledge base from your work
- Sharing insights across team members

## Mistral's Open-Source Contribution

Mistral has released powerful coding models that:
- Run locally with reasonable hardware
- Match proprietary model performance
- Integrate seamlessly with popular IDEs
- Support fine-tuning for specific codebases

## Google's Titan + MIRAS

Long-term AI memory is solving the context problem:
- Sessions that pick up where you left off
- Project knowledge that persists across restarts
- Cross-session learning and improvement
- Team-wide knowledge accumulation

## The Future is Integrated

The line between "tool" and "collaborator" is blurring. Tomorrow's IDE will:
- Understand your intent before you type
- Anticipate bugs before they happen
- Suggest architecture improvements proactively
- Learn and adapt to your team's patterns`
  },
  {
    id: "context-trap-agent-builders",
    title: "The Context Trap Every Agent Builder Falls Into",
    subtitle: "Why Adding More Rules Makes Your Agent Worse",
    description: "Understanding the paradox of context in AI agent development.",
    category: "AI Agents",
    date: "2025-11-15",
    readTime: "7 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/288ffd66-0c00-450f-99bd-7940148b6fe2/The_Context_Trap_Every_Agent_Builder_Falls_Into.png",
    author: "Shreyas Jangam",
    content: `## The Paradox of Context

Every agent builder hits this wall: your agent isn't performing well, so you add more instructions. More rules. More examples. More context.

And somehow, it gets *worse*.

Welcome to the context trap.

## Why More Context Fails

### 1. Attention Dilution

LLMs have limited attention. When you flood the context window with instructions, the model can't focus on what matters most. Important rules get lost in a sea of "helpful" guidelines.

### 2. Conflicting Instructions

The more rules you add, the higher the chance they conflict. "Be concise" vs "Be thorough." "Ask clarifying questions" vs "Act autonomously." The agent freezes or picks randomly.

### 3. Over-Specification Paradox

Highly specific rules work for specific cases but fail for edge cases. General rules work broadly but lack precision. You can't have both without bloating context.

## The Right Approach

### Hierarchical Context

Instead of one massive prompt:
- **Core identity**: Who is the agent? (10% of context)
- **Current task**: What are we doing now? (30% of context)
- **Relevant examples**: What worked before? (40% of context)
- **Constraints**: What must we avoid? (20% of context)

### Dynamic Context Loading

Don't load everything at once:
- Start with minimal context
- Load relevant memories on demand
- Prune outdated information aggressively
- Use semantic search for retrieval

### Rule Compression

Instead of 50 specific rules:
- 5 principles that guide decision-making
- Examples that illustrate edge cases
- A meta-rule for handling conflicts

## Practical Tips

1. **Measure context efficiency**: Track performance per token of context
2. **A/B test aggressively**: More context isn't always better
3. **Watch for degradation**: Performance often drops before you notice
4. **Prune regularly**: Remove rules that aren't earning their tokens

## The Lesson

The best agents aren't the ones with the most comprehensive instructions. They're the ones with the *right* instructions, delivered at the *right* time, in the *right* amount.

Less is often more. Trust the model. Guide, don't constrain.`
  },
  {
    id: "context-rot-ai-agents",
    title: "Open-Source Solution to Context Rot in AI Agents",
    subtitle: "DeepSeek V3.2 reaches Gemini 3 and Claude Sonnet 4.5 performance",
    description: "Solving the persistent context degradation problem in AI systems.",
    category: "LLMs",
    date: "2025-10-30",
    readTime: "6 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/f422bc9b-8aba-41d9-9748-51527dc413da/Open-Source_Solution_to_Context_Rot_in_AI_Agents.png",
    author: "Shreyas Jangam",
    content: `## Understanding Context Rot

Context rot is the silent killer of AI agent performance. Over long conversations or complex tasks, the quality of agent responses degrades—not because the model got worse, but because the context became polluted.

## How Context Rot Happens

### Accumulation of Noise
Every interaction adds tokens. Not all tokens are valuable. Over time, the signal-to-noise ratio drops.

### Stale Information
Early context becomes outdated. The agent references decisions that no longer apply or facts that have changed.

### Conflicting States
As the conversation evolves, earlier statements may conflict with later ones. The agent can't reconcile these contradictions.

## The Open-Source Solution

A new wave of tools tackles context rot head-on:

### Memory Compaction
Instead of keeping full conversation history:
- Summarize completed topics
- Extract key decisions and facts
- Discard redundant information
- Maintain a "living summary" that updates

### Semantic Deduplication
Identify and merge similar information:
- Same facts stated differently
- Repeated instructions
- Overlapping examples

### Context Health Scoring
Monitor context quality in real-time:
- Track relevance decay over turns
- Alert when context needs cleaning
- Auto-trigger maintenance routines

## DeepSeek V3.2 Breakthrough

The latest DeepSeek model shows how architecture can help:
- Better handling of long contexts
- Improved attention to recent information
- More robust to context noise
- Matching performance of Gemini 3 and Claude Sonnet 4.5

## Best Practices

1. **Regular context audits**: Review what's in context periodically
2. **Structured memory**: Use explicit memory stores, not implicit context
3. **Decay mechanisms**: Old information should fade unless refreshed
4. **Clear session boundaries**: Know when to start fresh

## The Future

The goal isn't infinite context. It's *useful* context. The agents that win will be the ones that manage their memory like experienced professionals—knowing what to remember, what to forget, and when to ask again.`
  },
  {
    id: "chatgpt-claude-features-any-llm",
    title: "Bring ChatGPT and Claude-like Features to Any LLM",
    subtitle: "Advanced tool use in Claude, 30 pro tips for using Gemini CLI",
    description: "Democratizing advanced AI capabilities for all language models.",
    category: "LLMs",
    date: "2025-10-15",
    readTime: "5 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/43bc1c06-7aa5-4684-a7a9-21dec0f9920c/Bring_ChatGPT_and_Claude-like_Features_to_Any_LLM.png",
    author: "Shreyas Jangam",
    content: `## The Feature Gap

ChatGPT and Claude have features that make them incredibly useful: web browsing, code execution, file analysis, image generation. But what if you're using a different model? What if you need these capabilities with a local LLM?

## Bridging the Gap

Open-source tools now let you add these capabilities to any model:

### Tool Use Frameworks
- **LangChain**: Comprehensive tool integration
- **LlamaIndex**: Specialized for data retrieval
- **Semantic Kernel**: Microsoft's AI orchestration

### Web Browsing
- Playwright integration for any LLM
- Search API wrappers
- Content extraction and summarization

### Code Execution
- Sandboxed Python environments
- Multi-language support
- Output capture and error handling

### File Analysis
- Document parsing (PDF, DOCX, etc.)
- Image understanding via vision models
- Data extraction and structuring

## Advanced Tool Use in Claude

Claude's tool use has matured significantly:

1. **Parallel tool calls**: Execute multiple tools simultaneously
2. **Tool result streaming**: See results as they come in
3. **Error recovery**: Graceful handling of tool failures
4. **Tool composition**: Chain tools for complex workflows

## 30 Pro Tips for Gemini CLI

The Gemini CLI has become a power user's dream:

1. Use \`-m\` to switch models mid-session
2. Pipe files directly: \`cat file.py | gemini "review this"\`
3. Set up aliases for common tasks
4. Use templates for repeatable prompts
5. Export conversations to markdown
... and 25 more tips for power users.

## The Democratization of AI Features

The best AI capabilities shouldn't be locked to specific providers. With the right tools:
- Use any model you want
- Run locally for privacy
- Customize for your use case
- Avoid vendor lock-in

The future is open, composable, and model-agnostic.`
  },
  {
    id: "claude-opus-swe-bench",
    title: "Claude Opus 4.5 Scores 80.9% on SWE-bench",
    subtitle: "Extend MCP servers with interactive UIs, Deep Agents with Google ADK",
    description: "Breaking new ground in AI coding benchmarks and capabilities.",
    category: "AI Coding",
    date: "2025-09-25",
    readTime: "4 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/586fd41e-abd4-4ba0-af15-9a4351588242/Untitled_design__2_.png",
    author: "Shreyas Jangam",
    content: `## A New Benchmark Champion

Claude Opus 4.5 just achieved 80.9% on SWE-bench Verified, a significant leap in AI coding capabilities. But what does this actually mean for developers?

## Understanding SWE-bench

SWE-bench tests real-world software engineering:
- Actual GitHub issues from popular repos
- Multi-file changes required
- Tests must pass after changes
- No cherry-picking easy problems

80.9% means Claude can solve 4 out of 5 real engineering problems autonomously.

## What Makes Opus 4.5 Different

### Extended Reasoning
The model can now:
- Plan multi-step solutions
- Backtrack when approaches fail
- Verify its own work
- Learn from test failures

### Better Code Understanding
Improvements in:
- Cross-file reasoning
- API contract understanding
- Side effect prediction
- Dependency awareness

### MCP Server Extensions

The Model Context Protocol now supports:
- Interactive UIs for human-in-the-loop
- Rich previews of changes
- Approval workflows for risky actions
- Collaborative editing modes

## Deep Agents with Google ADK

Google's Agent Development Kit enables:
- Multi-agent orchestration
- Specialized agent composition
- Parallel task execution
- Hierarchical supervision

## What This Means for You

1. **More automation is possible**: Tasks that required human intervention can now be delegated
2. **Trust but verify**: 80% is impressive but not 100%—always review
3. **Tooling matters**: Raw model capability + good tools = transformative workflows
4. **The gap is closing**: Open-source models are approaching these benchmarks

## The Road to 100%

We're not there yet. The remaining 20% includes:
- Highly ambiguous specifications
- Deep domain expertise requirements
- Novel problem patterns
- Cross-system integrations

But progress is accelerating. What was impossible a year ago is now routine.`
  },
  {
    id: "context-aware-ai-coworker",
    title: "Context-Aware AI Coworker",
    subtitle: "xAI Grok 4.1 Fast and the Agent Tools API",
    description: "Building AI assistants that truly understand your workflow.",
    category: "AI Agents",
    date: "2025-08-20",
    readTime: "5 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/47f7c254-67c3-495d-9282-3a20cbd7aec9/Context-Aware_AI_Coworker.png",
    author: "Shreyas Jangam",
    content: `## Beyond Chat: The AI Coworker

The future of AI assistance isn't a chatbot you query—it's a coworker that understands your context, anticipates your needs, and works alongside you.

## What Makes a Coworker Context-Aware?

### Workspace Understanding
- Knows your current project
- Understands your role
- Recognizes your tools and workflows
- Adapts to your preferences

### Temporal Awareness
- Remembers past interactions
- Tracks ongoing tasks
- Anticipates deadlines
- Suggests timely actions

### Social Context
- Understands team dynamics
- Knows who to ask for what
- Respects communication norms
- Facilitates collaboration

## xAI Grok 4.1 Fast

Grok 4.1 brings new capabilities:
- Sub-second response times
- Real-time context integration
- Streaming tool execution
- Parallel reasoning paths

The "Fast" variant is optimized for:
- Interactive workflows
- Continuous assistance
- High-frequency queries
- Low-latency requirements

## Agent Tools API

The new API enables:
- Custom tool definitions
- Structured outputs
- Error handling
- Audit logging

### Example Use Cases

1. **Meeting Prep**: Agent reviews calendar, gathers context, prepares briefings
2. **Email Triage**: Categorizes, summarizes, suggests responses
3. **Code Review**: Fetches PRs, analyzes changes, flags issues
4. **Research**: Gathers information, synthesizes findings, updates docs

## Building Your AI Coworker

Start with:
1. Define the workflows to augment
2. Identify context sources
3. Build tool integrations
4. Iterate based on usage

The goal isn't to replace human judgment—it's to amplify human capability by handling the mechanical while you focus on the meaningful.`
  },
  {
    id: "gemini-3-agentic-ai-ide",
    title: "Google's Gemini 3 and Agentic AI IDE",
    subtitle: "Manus Browser Operator, Gemini Agent to execute tasks autonomously",
    description: "The next generation of AI-powered development environments.",
    category: "LLMs",
    date: "2025-07-10",
    readTime: "6 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/08f49b73-f5d5-4e00-a9bc-db04d978d10e/Google_s_Gemini_3_and_Agentic_AI_IDE.png",
    author: "Shreyas Jangam",
    content: `## Gemini 3: The Foundation

Google's Gemini 3 represents a fundamental leap in AI capabilities:

### Multimodal Native
- Text, code, images, audio, video—all in one model
- Cross-modal reasoning
- Unified understanding

### Extended Context
- Million-token context windows
- Perfect recall across long documents
- Coherent long-form generation

### Enhanced Reasoning
- Chain-of-thought by default
- Self-verification
- Uncertainty quantification

## The Agentic AI IDE

Google's new IDE built on Gemini 3:

### Project Intelligence
- Understands entire codebases
- Maintains project-level context
- Tracks dependencies and impacts

### Autonomous Execution
- Runs tests independently
- Fixes issues it finds
- Proposes optimizations

### Collaborative Features
- Real-time pair programming
- Async review and suggestions
- Team knowledge sharing

## Manus Browser Operator

Browser automation reimagined:
- Natural language commands
- Visual understanding of pages
- Robust to UI changes
- Multi-step workflow execution

### Use Cases
- Automated testing
- Data collection
- Form filling
- Process automation

## Gemini Agent

The autonomous task executor:
- Breaks down complex requests
- Orchestrates multiple tools
- Handles errors gracefully
- Reports progress clearly

### Examples
- "Set up a new React project with testing"
- "Find and fix the performance issue"
- "Update all dependencies and verify nothing broke"

## The Integrated Experience

The power comes from integration:
- IDE understands what you're building
- Agent knows what tools are available
- Browser can interact with external systems
- Everything shares context

This isn't just an incremental improvement—it's a new paradigm for software development.`
  },
  {
    id: "open-source-agentic-rag",
    title: "Open-Source Full-stack Agentic RAG",
    subtitle: "Google Code Wiki for up-to-date code wikis, Grok 4.1 by xAI",
    description: "Building comprehensive retrieval-augmented generation systems.",
    category: "RAG",
    date: "2025-06-05",
    readTime: "7 min",
    image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/eb47ba2f-4413-467d-ac4d-1d62c61983bc/Open-Source_Full-stack_Agentic_RAG.png",
    author: "Shreyas Jangam",
    content: `## Beyond Basic RAG

Traditional RAG is simple: retrieve relevant documents, stuff them in context, generate a response. But real-world applications demand more.

## What is Agentic RAG?

Agentic RAG adds decision-making to retrieval:
- **When** to retrieve (not every query needs it)
- **What** to retrieve (multiple sources, different types)
- **How** to use it (verify, synthesize, cite)
- **Whether** to retrieve more (iterative refinement)

## The Full-Stack Approach

### Data Layer
- Multiple document types
- Structured and unstructured data
- Real-time updates
- Version history

### Retrieval Layer
- Hybrid search (semantic + keyword)
- Multi-index queries
- Relevance reranking
- Source diversity

### Agent Layer
- Query understanding
- Retrieval strategy selection
- Result synthesis
- Citation generation

### Application Layer
- User interface
- Feedback collection
- Analytics
- Continuous improvement

## Google Code Wiki

Automatic documentation that stays current:
- Parses your codebase
- Generates explanations
- Updates on every commit
- Links to relevant code

### Features
- Architecture overviews
- Function documentation
- Dependency graphs
- Change history

## Grok 4.1 for RAG

xAI's latest model excels at:
- Long-context retrieval tasks
- Multi-document reasoning
- Faithful summarization
- Citation accuracy

## Open-Source Stack

Build your own agentic RAG:

1. **Vector Store**: Qdrant, Milvus, or Weaviate
2. **Retrieval**: LlamaIndex or LangChain
3. **Agent Framework**: CrewAI or AutoGen
4. **LLM**: Grok, Claude, or open models
5. **Orchestration**: Prefect or Temporal

## Best Practices

1. **Start simple**: Basic RAG often works
2. **Add agency gradually**: One capability at a time
3. **Measure everything**: Know what's working
4. **Iterate with users**: Real feedback beats benchmarks

The goal isn't the most sophisticated system—it's the most useful one.`
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};
