import { Box, CssBaseline } from "@mui/material";
import AppBars from "../../components/common/AppBar";
import { DrawerHeader, Main } from "../../components/common/PageComonComponent/index";
import Drawers from "../../components/common/Drawer";

export default function Customer() {
  return ( 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBars haddings="Customer" />
      <Drawers />
      <Main open={true}>
        <DrawerHeader />
      </Main>
    </Box>
  )
}
