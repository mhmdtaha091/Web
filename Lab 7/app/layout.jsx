import './globals.css';

export const metadata = {
  title: 'SEL-310 Lab 7 Solutions',
  description: 'Lab 7 solutions implemented with Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
