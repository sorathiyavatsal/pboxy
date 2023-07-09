import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

const AboutPage = () => {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark" defaultTheme="system" enableSystem>
      <div>
        <h1>Dashboard Page</h1>
        <p>This is the About page content.</p>
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;