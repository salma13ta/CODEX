// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Codex Portfolio",
  description: "Digital Solutions Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>
        {/* الـ children هنا هي اللي هتعرض الـ Splash والـ Onboarding وباقي الصفحات */}
        {children}

        <a
          href="https://api.whatsapp.com/send/?phone=01226694723&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer noopener"
          className="fixed bottom-32 right-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/20 z-50 border-4 border-[#0a0e27]"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle w-6 h-6 text-white fill-white"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}