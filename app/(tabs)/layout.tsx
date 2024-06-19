import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import dynamic from "next/dynamic";
import { Spline3D } from "@/components/spline-3d";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sakana",
  description: "Sakana's Portfolio",
};

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="w-full flex flex-col my-32 items-center">
            <div className="pb-8 max-w-sm md:max-w-lg">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
