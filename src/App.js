// Import Global State Provider
import { GlobalProvider } from "./contexts/GlobalContext";
// Import style-components
import { ThemeProvider } from "styled-components";
// Import Main Container of application
import { MainContainer } from "./containers/MainContainer";
// Import primary theme of application
import { primaryTheme } from "./constants/Theme";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={primaryTheme}>
        <MainContainer />
      </ThemeProvider>
    </GlobalProvider>
  );
}
export default App;
