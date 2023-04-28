import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "../../routes/CustomRoutes";

function Layout() {
    return (
        <BrowserRouter>
    
            <CustomRoutes />
     
        </BrowserRouter>
    )
}

export default Layout;