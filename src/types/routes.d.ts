declare type SingleRoute = {
    path: string;
    method: string;
    handler: function;
}
declare type NestedRoute = {
    path: string;
    routes: Array<SingleRoute>;
}
