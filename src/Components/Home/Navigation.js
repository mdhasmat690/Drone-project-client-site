import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import drone from "../../img/drone-svgrepo-com.svg";
import "./Navigation.css";
import useAuth from "../Hooks/UseAuth";

const Navigation = () => {
  const { user, handleLogOut } = useAuth();
  // console.log(user);
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    navIcone: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },

    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },

    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
      [theme.breakpoints.up("lg")]: {
        textAlign: "left",
      },
    },
    mobileNaveItem: {
      color: "#000",
      textDecoration: "none",
    },
  });
  const { navItem, navIcone, navItemContainer, navLogo, mobileNaveItem } =
    useStyle();

  const [state, setState] = React.useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcone}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img className="img-style" src={drone} alt="" />
            </Typography>
            <Box className={navItemContainer}>
              <Link className={navItem} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/service">
                <Button color="inherit">Service</Button>
              </Link>
              <Link className={navItem} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link className={navItem} to="/about">
                <Button color="inherit">About</Button>
              </Link>
              {/* <Link className={navItem} to="/login">
                <Button color="inherit">Login</Button>
              </Link> */}
              {user?.email ? (
                <Button onClick={handleLogOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Link className={navItem} to="/login">
                  Login
                </Link>
              )}
              {user.email && <>{user?.displayName}</>}

              <Link className={navItem} to="/allProduct">
                <Button
                  style={{ color: "red", fontWeight: 800 }}
                  color="inherit"
                >
                  More_Product
                </Button>
              </Link>
 
                    

              <Link to="posts"><button>Product</button></Link>




            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNaveItem} to="/">
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNaveItem} to="/service">
                      Service
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNaveItem} to="/about">
                      About
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    {/* <Link className={mobileNaveItem} to="/login">
                      Login
                    </Link> */}

                    {user?.email ? (
                      <Button onClick={handleLogOut} variant="light">
                        Logout
                      </Button>
                    ) : (
                      <Link className={navItem} to="/login">
                        Login
                      </Link>
                    )}
                    <>{user?.displayName}</>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
