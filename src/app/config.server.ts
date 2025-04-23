import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './config';


// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering(),
//     provideServerRoutesConfig(serverRoutes),
//     { provide: HttpServiceBaseUrl, useValue: `${process.env['VA_API_ENDPOINT']}/api/` },
//     // provideHttpClient(withInterceptorsFromDi(), withFetch()),
//     // { provide: HTTP_INTERCEPTORS, useClass: StoreAPIAuthenticationInterceptor, multi: true },
//     // provideAppInitializer(() => {
//     //   // var httpService = inject(HttpService);
//     //   // httpService.defaultHeaders = new HttpHeaders({ 'API_KEY': `${process.env['API_KEY']}` });
//     // })
//   ]
// };


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
