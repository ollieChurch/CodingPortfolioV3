---
title: "I love vibe coding. I don't trust it."
date: 2026-02-22
description: "I vibe code constantly. My side project got more features in months than it had in years. But my day job involves people's money, and stakes change everything."
tags: ["ai", "programming", "productivity", "webdev"]
---

Greg Brockman recently said that engineers should reach for an agent before they reach for an editor. I've been testing that idea for months now, and I have thoughts.

Let me be upfront: I vibe code constantly. I'm not here to tell you it's bad. I'm here to tell you it's complicated.

## The appeal is real

TaskGlitch, my side project (an intelligent task scheduler), got more features in the last few months than it had in the previous two years. I migrated it from Vue 2 to Vue 3 in about ten minutes. Ten minutes. That migration had been sitting on my to-do list for over a year because I knew it would be a painful weekend of work. An AI agent knocked it out while I watched.

The feeling is genuinely addictive. You describe what you want, and code appears. It's like having a rubber duck that actually responds. You talk through a problem, and instead of just helping you think, it hands you a solution. Sometimes a good one. Sometimes a surprisingly good one.

For side projects, for prototyping, for exploring ideas, this is transformative. The distance between "I wonder if..." and "let me try it" has collapsed to almost nothing. I build more, I experiment more, I ship more. That part is unambiguously great.

## But stakes change everything

Here's where it gets complicated. TaskGlitch is used by exactly one person: me. If something breaks, I notice, I fix it, nobody else is affected. The consequences of a bug are that my task list looks weird for a day.

My day job is different. I work at Ontime Payments. We handle payments. Banking. Financial infrastructure. Real money moving between real accounts belonging to real people. You cannot shrug off getting money wrong. You cannot ship a "plausible-looking" solution and hope for the best. The cost of a subtle bug isn't a weird task list. It's someone's rent payment going missing, or a merchant not getting paid, or a compliance violation that brings regulators to the door.

When the stakes are low, vibe coding is a superpower. When the stakes are high, it's a liability, unless you treat it with extreme care.

## The Moltbook cautionary tale

If you want a concrete example of what happens when vibe coding meets zero scrutiny, look at Moltbook. The founder publicly announced that he "didn't write a single line of code". The entire application was AI-generated. Within days of launching, security researchers had found the entire database exposed. User data, credentials, everything, sitting there in the open because nobody with security knowledge had reviewed what the AI produced.

The AI wrote code that worked. It ran. It served pages. It looked like a real application. But it had fundamental security flaws that any experienced developer would have caught in a code review. The AI doesn't know what it doesn't know, and if the person prompting it doesn't know either, you get Moltbook.

This isn't an argument against AI-assisted development. It's an argument against unreviewed AI-assisted development. There's a massive difference.

## The code review problem

Here's something that keeps me up at night: if everyone on a team is vibe coding, who actually understands the system?

Code review exists for a reason. It's not just about catching bugs. It's about shared understanding. When you review someone's code, you learn how the system works. You build a mental model. You develop the intuition that lets you debug problems at three in the morning when something breaks in production.

If the AI writes the code and you glance at it and hit merge, you skip all of that learning. The system grows, but your understanding of it doesn't. And then when something goes wrong (and it will go wrong) you're staring at code you don't recognise, written by a model that can't explain its reasoning, trying to figure out what went wrong and why.

Debugging is where you learn. Struggling with a problem is where you build the deep understanding that makes you a good engineer. If you outsource all the struggle, you outsource all the learning too.

## The METR study

This isn't just vibes about vibes. METR, a research organisation focused on AI evaluation, ran a study where experienced developers used AI coding tools on real tasks from their own open-source projects. The results were striking: developers using AI tools took 19% longer to complete tasks compared to working without them.

But here's the really interesting part: those same developers believed they were 20% faster. There was a 39-percentage-point gap between perceived and actual performance. They felt faster. They felt more productive. The AI gave them the sensation of flow and progress. But when you measured the actual output, they were slower.

I don't think this means AI tools are useless, far from it. But it does mean we should be sceptical of our own intuitions about how much they're helping. The feeling of productivity and actual productivity are not the same thing, and AI tools seem particularly good at creating the feeling without always delivering the reality.

## The third golden age

Grady Booch, one of the most respected voices in software engineering, recently talked about what he calls the "third golden age of software." His argument is that we're in a phase similar to the early days of personal computing: lots of enthusiasm, lots of experimentation, lots of people building things who couldn't before. And that's genuinely exciting.

But he also points out that the hobbyist phase is always followed by a reckoning. The early days of the web gave us incredible creativity and also gave us websites that were security nightmares. The early days of mobile gave us an explosion of apps and also gave us apps that drained your battery in an hour and leaked your location data.

We're in the hobbyist phase of AI-assisted development right now. The tools are powerful enough to be useful but not mature enough to be trusted blindly. The people using them range from experienced engineers who understand the limitations to complete beginners who think the AI is infallible. And the gap between those two groups produces very different outcomes.

## Where I land

I'm not going to stop vibe coding. It's too useful, too fun, and too effective for the right kinds of work. TaskGlitch will keep getting features at a pace that would have been impossible without AI assistance.

But I'm also not going to pretend that what works for a personal side project works for financial infrastructure. The stakes matter. The context matters. The difference between "this code runs" and "this code is correct, secure, and maintainable" matters.

My rule is simple: play freely where the consequences are low, and be rigorous where they're high. Use the AI to draft, explore, and prototype. But when it's time to ship something that handles people's money, read every line. Understand every decision. Question every assumption.

Keep playing. Keep experimenting. Keep pushing the boundaries of what's possible with these tools. But know when the stakes demand more than vibes.

## References

- [Greg Brockman on agentic software development](https://x.com/gdb)
- [Wiz security research on Moltbook](https://wiz.io/blog)
- [Grady Booch on The Pragmatic Engineer podcast](https://newsletter.pragmaticengineer.com)
- [METR study on AI coding productivity](https://metr.org/blog)
- [TaskGlitch](https://taskglitch.com) - Intelligent task scheduling
