import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'


const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/portfolio',
        component: Portfolio,
    },
    {
        path: '/contact',
        component: Contact,
    }

] 
export default routes 