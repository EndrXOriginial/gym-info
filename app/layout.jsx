import { Menu } from './components/menu/menu';
import './globals.css';
import './homepage.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
