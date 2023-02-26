import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scenes/global/Topbar";
import Leftbar from "./scenes/global/Leftbar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from './scenes/invoices'
import Contacts from "./scenes/contacts";
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calender from './scenes/calender'
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <Leftbar />
          </ProSidebarProvider>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* <Route path="/invoices" component={<Invoices/>}/> */}
              {/* <Route path="/form" component={<Form/>}/> */}
              {/* <Route path="/bar" component={<Bar/>}/> */}
              {/* <Route path="/pie" component={<Pie/>}/> */}
              {/* <Route path="/line" component={<Line/>}/> */}
              {/* <Route path="/faq" component={<FAQ/>}/> */}
              {/* <Route path="/geography" component={<Geography/>}/> */}
              {/* <Route path="/calender" component={<Calender/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
