import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oferta sprzedaży sprzętu AV i IT",
  description:
    "Profesjonalny sprzęt AV, IT i wyposażenie do sprzedaży. Monitory Sony, kamery PTZ, nagłośnienie Focal/Onkyo, meble i więcej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
