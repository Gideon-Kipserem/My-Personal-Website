import "./globals.css";

export const metadata = {
  title: "Gideon Kimaiyo | Frontend & Fullstack Developer",
  description: "Frontend & Fullstack Developer in Kenya. React, JavaScript, Python, Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
