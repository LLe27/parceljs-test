# parceljs-test
Testing parceljs bundler using dependencies such as jquery, bootstrap and font-awesome

## Available Scripts
```
npm run build
```
This command runs `parcel watch FILENAME` which watches and rebuilds files as they change and supports [hot module replacement](https://parceljs.org/hmr.html) but does not start the built-in web server (intended for those who already have a server configured).

```
npm run dev
```
This command runs `parcel FILENAME` which starts the built-in development server that automatically rebuilds your app as you change files and supports hot module replacement.  Open [http://localhost:1234/](http://localhost:1234/) to view the web server host. If the page does not work please check your editor/port config.

```
npm run prod
```
This command runs `parcel build FILE` which builds the application once for production.

### Additional Resources
- https://parceljs.org/getting_started.html
