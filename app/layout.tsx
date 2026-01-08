import "./globals.css";
import Nav from "./components/nav/Nav";

export default function RootLayout({
  children,
}:  {
  children: React.ReactNode;
})  {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}