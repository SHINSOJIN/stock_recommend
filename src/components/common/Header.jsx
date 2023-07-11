import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Badge, Box, IconButton, Stack, Tooltip,} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from '../../hooks/use-popover';
import profile from '../../assets/images/avatar-seo-hyeon-ji.png'
import login from '../../assets/images/login.png'
import {AccountPopover} from "./AccountPopover";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const Header = (props) => {
    const { onNavOpen } = props;
    const accountPopover = usePopover();
    const [isLogin, setIsLogin] = useState(false)

    const loginCheck = () => {
        //TODO: [2] sessionStorage에 로그인 정보가 없다면 로그인 버튼을, 존재한다면 아바타 버튼을 출력
        if(!!sessionStorage.getItem('email') && !!sessionStorage.getItem('password')){
            setIsLogin(true)
        }
    }


    useEffect(loginCheck, [])


    return (
        <div className='main_container'>
            <Box
                component="header"
                sx={{
                    backdropFilter: 'blur(6px)',
                    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                    position: 'sticky',
                    left: {lg: `${SIDE_NAV_WIDTH}px`},
                    top: 0,
                    zIndex: (theme) => theme.zIndex.appBar
                }}
            >
                <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={2} sx={{minHeight: TOP_NAV_HEIGHT, px: 2}}>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <IconButton onClick={onNavOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <Badge badgeContent={4} color="success" variant="dot">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        {isLogin ?       
                            <Avatar onClick={accountPopover.handleOpen} ref={accountPopover.anchorRef} src={profile}/>
                            :
                            <Avatar onClick={()=>window.location.replace('/login')} ref={accountPopover.anchorRef} src={login}/>
                        }
                  
                    </Stack>
                </Stack>
            </Box>
            <AccountPopover
                anchorEl={accountPopover.anchorRef.current}
                open={accountPopover.open}
                onClose={accountPopover.handleClose}
            />
        </div>
    );
};

export default Header;