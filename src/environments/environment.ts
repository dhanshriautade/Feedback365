// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Login:'http://localhost:9002/feedback/accountValidate',
  GetEvent:'http://localhost:9002/feedback/getEventList',
  GetTotalEvent:'http://localhost:9002/feedback/getTotalSummary',
  ProfileInfo:'http://localhost:9002/feedback/getUserDetails',
  GetAllEmployee:'http://localhost:9002/feedback/getAllEmployees',
  SentEvent:'http://localhost:9002/feedback/addForm',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
