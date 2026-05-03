import './globals.css';

export const metadata = {
  title: 'Kushal Reshamdalal — Senior Software Engineer',
  description:
    'Senior Software Engineer at Nasdaq building high-throughput fraud detection systems, real-time transaction processors, and cloud-native microservices that protect thousands of financial institutions.',
  keywords: [
    'software engineer',
    'fintech',
    'fraud detection',
    'Java',
    'AWS',
    'Nasdaq',
    'backend engineer',
    'Toronto',
  ],
  authors: [{ name: 'Kushal Reshamdalal' }],
  openGraph: {
    title: 'Kushal Reshamdalal — Senior Software Engineer',
    description: 'Building the backend systems that stop financial crime at scale.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-ink-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
