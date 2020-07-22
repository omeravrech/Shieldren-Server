
import { Router } from 'express';
import { appRoutes } from './utils';

const addToRouter = (router: Router, element: SingleRoute) : void => {
    switch(element.method.toUpperCase()) {
        case "GET": 
            router.get(element.path, element.handler);
            break;
        case "POST": 
            router.post(element.path, element.handler);
            break;
        case "ALL":
            router.all(element.path, element.handler);
            break;
        default:
            break;
    }
}

const e = (routes: Array<NestedRoute | SingleRoute>):Router => {
    const fullElements: Array<SingleRoute> = [];
    const router = Router();

    routes.forEach((element: NestedRoute | SingleRoute) => {
        if(Object.getOwnPropertyNames(element).includes("routes")) {

            (<NestedRoute>element).routes.forEach((route:SingleRoute) => {
                route.path = element.path + (route.path[0]==='/'?route.path.slice(1):route.path);
                addToRouter(router, route);
            });
        } else {
            addToRouter(router, <SingleRoute>element);
        }
    })
    return router;
}
export default e(appRoutes);
