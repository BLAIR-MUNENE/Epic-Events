import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemText, Typography, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="w-64 p-5 bg-gray-100 h-screen flex flex-col">
            <div className="text-center mb-20">
                <Avatar alt="Levis Munene" src="path_to_profile_image" sx={{ width: 56, height: 56, margin: '0 auto' }} />
                <Typography variant="h6" className="mt-2 text-gray-800">Levis Munene</Typography>
            </div>
            <List component="nav">
                <ListItem button component={Link} to="/profile/personal-info" className="hover:bg-gray-200">
                    <ListItemText primary="Personal information" />
                </ListItem>
                <ListItem button component={Link} to="/profile/history" className="hover:bg-gray-200">
                    <ListItemText primary="History" />
                </ListItem>
                <ListItem button component={Link} to="/logout" className="hover:bg-gray-200">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
