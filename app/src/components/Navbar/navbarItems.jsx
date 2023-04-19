import { People, Dns, Image, Public, SettingsEthernet, SettingsInputComponent } from '@mui/icons-material'

export const mainNavbarItems = [
  {
    id: 0,
    icon: <People />,
    label: 'Authentication',
    route: 'authentication',
  },
  {
    id: 1,
    icon: <Dns />,
    label: 'Database',
    route: 'database',
  },
  {
    id: 2,
    icon: <Image />,
    label: 'Storage',
    route: 'storage',
  },
  {
    id: 3,
    icon: <Public />,
    label: 'Hosting',
    route: 'hosting',
  },
  {
    id: 4,
    icon: <SettingsEthernet />,
    label: 'Functions',
    route: 'functions',
  },
  {
    id: 5,
    icon: <SettingsInputComponent />,
    label: 'Machine Learning',
    route: 'machine-learning',
  },
]