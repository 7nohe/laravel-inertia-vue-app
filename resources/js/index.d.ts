import { Config, RouteParam, RouteParams, Router } from "ziggy-js";

declare global {
    declare function route(
        name?: undefined,
        params?: RouteParamsWithQueryOverload | RouteParam,
        absolute?: boolean,
        config?: Config
    ): Router;

    declare function route(
        name: string,
        params?: RouteParamsWithQueryOverload | RouteParam,
        absolute?: boolean,
        config?: Config
    ): string;
    declare const Ziggy: any;
}
declare module "vue" {
    interface ComponentCustomProperties {
        route: ((
            name?: undefined,
            params?: RouteParamsWithQueryOverload | RouteParam,
            absolute?: boolean,
            config?: Config
        ) => Router) &
            ((
                name: string,
                params?: RouteParamsWithQueryOverload | RouteParam,
                absolute?: boolean,
                config?: Config
            ) => string);
    }
}
