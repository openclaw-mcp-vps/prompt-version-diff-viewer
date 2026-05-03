import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptDiff — Git diff for AI prompt iterations',
  description: 'Track AI prompt versions with git-like diffs, measure performance impact, and A/B test prompt variations. Built for AI product teams and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40cbf5ce-8db7-4301-8243-100fd408fdbe"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
