import { DefaultController } from '../controllers';

const appRoutes: Array<NestedRoute | SingleRoute> = [
    {
        path: "/",
        routes: [
            { method: "get", path:"/" , handler: DefaultController.indexPage },
        ]
    },
    { method: "all", path: "*", handler: DefaultController.Error404Page }
];

export default appRoutes;