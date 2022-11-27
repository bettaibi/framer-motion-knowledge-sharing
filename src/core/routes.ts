import AnotherPage from "containers/AnotherPage";
import HomePage from "containers/HomePage";

interface RoutesConfig{
    exact: boolean;
    path: string;
    component: React.ComponentType<any>;
}

export const routes: RoutesConfig[] = [
    {
        exact: true,
        path: '/',
        component: HomePage,
    },
    {
        exact: true,
        path: '/another-page',
        component: AnotherPage,
    }
];