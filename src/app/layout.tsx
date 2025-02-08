import './globals.css'
import '@my-chatbot/ui/src/styles.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { LoadingProvider } from './context/LoadingContext'
import { ThemeProvider } from './context/ThemeContext'
import { Icons } from 'next/dist/lib/metadata/types/metadata-types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code Nicer | Web Developer',
  description:
    "Code nicer, a full stack web developer. Do you have an idea? Let's build your idea now, my inbox is always open.",
  keywords:
    'nicer, code nicer, web developer, full stack, portfolio, coding, programming, JavaScript, React, Next.js',
  openGraph: {
    images: ['/nicer-og-image.png'] as string[],
    title: 'Code Nicer | Full Stack Web Developer',
    description:
      "Code nicer, a full stack web developer. Do you have an idea? Let's build your idea now, my inbox is always open.",
  },
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta name="keywords" content={String(metadata.keywords)} />
        <meta
          property="og:image"
          content={(metadata.openGraph?.images as string[])[0]}
        />
        <meta
          property="og:image:alt"
          content={String(metadata.openGraph?.title)}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={String((metadata.icons as Icons).apple)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={String((metadata.icons as Icons).icon)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={String((metadata.icons as Icons).shortcut)}
        />
        <link rel="manifest" href={String(metadata.manifest)} />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Code Nicer',
              jobTitle: 'Web Developer',
              url: 'https://codenicer.dev',
              sameAs: [
                'https://www.facebook.com/code.Nicer',
                'https://github.com/codenicer',
                'https://www.linkedin.com/in/code-nicer',
              ],
              image: 'https://codenicer.dev/me.jpeg',
              description:
                "Code nicer, a full stack web developer. Do you have an idea? Let's build your idea now, my inbox is always open.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
