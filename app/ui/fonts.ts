import { Inter, Lusitana, Roboto, Ubuntu } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

export const ubuntuFont = Ubuntu({
  weight: ['400'],
  subsets: ['latin'],
});