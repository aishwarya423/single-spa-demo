hi

in chile repo while doint npm i getting

error one

code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: @testing-library/react@16.3.0
npm error Found: @types/react@17.0.89
npm error node_modules/@types/react
npm error   @types/react@"^17.0.19" from the root project
npm error   peer @types/react@"^17.0.0" from @types/react-dom@17.0.26
npm error   node_modules/@types/react-dom
npm error     @types/react-dom@"^17.0.9" from the root project
npm error     peerOptional @types/react-dom@"*" from single-spa-react@6.0.2
npm error     node_modules/single-spa-react
npm error       single-spa-react@"^6.0.2" from the root project
npm error   1 more (single-spa-react)
npm error
npm error Could not resolve dependency:
npm error peerOptional @types/react@"^18.0.0 || ^19.0.0" from @testing-library/react@16.3.0
npm error node_modules/@testing-library/react
npm error   dev @testing-library/react@"^16.0.1" from the root project
npm error
npm error Conflicting peer dependency: @types/react@19.2.2
npm error node_modules/@types/react
npm error   peerOptional @types/react@"^18.0.0 || ^19.0.0" from @testing-library/react@16.3.0
npm error   node_modules/@testing-library/react
npm error     dev @testing-library/react@"^16.0.1" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\Pavan Kalyan\AppData\Local\npm-cache\_logs\2025-10-25T12_57_46_277Z-eresolve-report.txt    

npm error A complete log of this run can be found in: C:\Users\Pavan Kalyan\AppData\Local\npm-cache\_logs\2025-10-25T12_57_46_277Z-debug-0.log

solution:
"@types/react": "^19.0.19",
"@types/react-dom": "^19.0.9"
