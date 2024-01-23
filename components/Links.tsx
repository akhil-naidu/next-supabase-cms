import { UserIcon } from '@heroicons/react/24/outline';
import SidebarItem from './SidebarItem';

import Stack from './Stack';

export const LINKS = [
  {
    label: 'Logout',
    href: '',
    icon: UserIcon,
  },
];

const Links = () => (
  <Stack direction='vertical' spacing='large' className='mt-3'>
    <ul className='w-full'>
      {LINKS.map((LINK) => (
        <SidebarItem
          key={LINK.label}
          href={LINK.href}
          icon={LINK.icon}
          target='_blank'
          rel='noopener'
        >
          {LINK.label}
        </SidebarItem>
      ))}
    </ul>
  </Stack>
);

export default Links;
