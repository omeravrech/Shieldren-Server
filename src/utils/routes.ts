import { DefaultController } from '../controllers';

const appRoutes: Array<NestedRoute | SingleRoute> = [
    {
        path: "/",
        routes: [
            { method: "get", path:"/" , handler: DefaultController.getIndexPage },
            { method: "get", path: "/favicon.ico", handler: DefaultController.getFavIcon }
        ]
    },
    { method: "all", path: "*", handler: DefaultController.Error404Page }
];

export default appRoutes;