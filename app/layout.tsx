import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <h1>Layout</h1>
        {children}
      </body>
    </html>
  );
}
