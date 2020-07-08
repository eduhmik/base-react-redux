import Home from "../containers/Home"
import Test from "../containers/Test"

const routes = [
    {
        path: "/",
        component:Home,
        id: 'home',
        exact: true
    },
    {
        path: "/test",
        component:Test,
        id: 'test',
        exact: true
    }
]

export default routes;