import App from '../components/App';
import HomePage from '../components/HomePage';
import TodoLists from '../components/TodoLists';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';

const routes = [
    { component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: HomePage
            },
            {
                path: '/home',
                component: HomePage
            },
            {
                path: '/lists',
                component: TodoLists
            },
            {
                path: '/login',
                component: LoginPage
            },
            {
                path: '/registration',
                component: RegistrationPage
            }
        ]
    }
];

export default routes;