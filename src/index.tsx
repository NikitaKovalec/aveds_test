import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import UserProvider from "app/redux/user/useProvider";
import {Provider} from "react-redux";
import store from "app/redux/user/store";

render(
    <Provider store={store}>
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)
