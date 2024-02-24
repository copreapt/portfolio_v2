import { Inter, Darker_Grotesque, Poppins} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const darker_grotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400','500'],
  variable: "--font-grotesque",
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400","500"],
  variable: "--font-poppins",
});