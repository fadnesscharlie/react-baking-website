
//Icons
import CodeIcon from '@mui/icons-material/Code';
import CookieIcon from '@mui/icons-material/Cookie';
import CoffeeIcon from '@mui/icons-material/Coffee';
import PetsIcon from '@mui/icons-material/Pets';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

// Images
import Assortedcookie from "../../productImages/AssortedCookies.jpg";
import HaruAndKrissy from '../images/other/HaruAndKrissy.jpg'

export const facts = [
  {
    question: 'Choice of snack',
    title: 'Cookies',
    icon: <CookieIcon />,
    link: '',
    image_url: Assortedcookie,
    description: 'Chocolate Chip, White Chocolate Macadamia Nut, and Ginger Bread Cookies'
  },
  {
    question: 'Choice of Beverage',
    title: 'Mocha Cookie Crumble Frappuccino',
    icon: <CoffeeIcon />,
    link: 'https://www.starbucks.com/menu/product/956/iced',
    image_url: ''
  },
  {
    question: 'Dog vs Cat',
    title: 'Cats!',
    icon: <PetsIcon />,
    link: '',
    image_url: HaruAndKrissy,
    description: 'My cats Haru and Krissy'
  },
  {
    question: 'Current Visual Studio Code Theme',
    title: 'Monokai Dimmed',
    icon: <CodeIcon />,
    link: '',
    image_url: ''
  },
  {
    question: 'Tabs vs Spaces',
    title: 'TEAM TABS',
    icon: <SentimentSatisfiedAltIcon />,
    link: '',
    image_url: ''
  }
]