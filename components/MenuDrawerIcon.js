import {
  Home,
  Info,
  AccountBox,
  Logout,
  Reviews,
  ImportContacts,
} from '@mui/icons-material';
import WatchIcon from '@mui/icons-material/Watch';
import DiamondIcon from '@mui/icons-material/Diamond';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Base the input argument this function will return an icon
export default function MenuDrawerIcon(menu) {
  switch (menu) {
    case 'Home':
      return <Home />;
    case 'Watches':
      return <WatchIcon />;
    case 'About Us':
      return <Info />;
    case 'Jewelry':
      return <DiamondIcon />;
    case 'Reviews':
      return <Reviews />;
    case 'Videos':
      return <YouTubeIcon />;
    case 'News':
      return <ImportContacts />;
    case 'My Profile':
      return <AccountBox />;
    case 'Logout':
      return <Logout />;
    default:
      break;
  }
}

export function MenuDrawerLinks(menu) {
  switch (menu) {
    case 'Home':
      return '/';
    case 'Watches':
      return '/cars';
    case 'Jewelry':
      return '/';
    case 'About Us':
      return '/about';
    case 'Videos':
      return '/videos';

    case 'My Profile':
      return '/';
    case 'Logout':
      return '/';
    default:
      break;
  }
}
