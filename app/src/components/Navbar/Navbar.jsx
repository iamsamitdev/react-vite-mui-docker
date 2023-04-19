import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { navbarStyles } from './styles'
import { mainNavbarItems } from './navbarItems'
import { useNavigate } from 'react-router-dom'
import { MenuItem, MenuList } from '@mui/material'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Drawer 
        variant='permanent' 
        anchor='left' 
        sx={navbarStyles.drawer}>
        <Toolbar />
        <Divider />
        <MenuList>
            {
                mainNavbarItems.map((item, index) => (
                    <MenuItem 
                        style={{
                            paddingTop: '15px', 
                            paddingBottom: '15px'
                        }}
                        key={index}
                        onClick={() => navigate(item.route)}
                    >
                        <ListItemIcon sx={navbarStyles.icon}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </MenuItem>
                ))
            }
        </MenuList>
    </Drawer>
  )
}

export default Navbar