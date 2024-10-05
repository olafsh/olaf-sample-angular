# OLAF Sample for Angular

This sample is ideal for developers looking to explore both the Angular framework and the OLAF SDK in a real-world scenario.

## Development server

Run `ng serve --host {olaf-hostname} --port 4200 --ssl --disable-host-check` for a dev server. Navigate to `{olaf-hostname}`. The application will automatically reload if you change any of the source files.

Flags `--ssl` and `--disable-host-check` have to be present as well, because OLAF service supports only secure connections and cryptography works well with SSL connection.

Don't worry, this will not unlock security issues, but just allow you to use custom domain instead of `localhost`.
