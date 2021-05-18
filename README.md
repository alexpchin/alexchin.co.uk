# Alexchin.co.uk

To run:

```sh
yarn start
```

To deploy to staging (http://staging.alexchin.co.uk/)

```
git push heroku-staging master
```

To deploy to production (http://www.alexchin.co.uk/)

```
git push heroku-production master
```

### Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Prettier formatting similar to:
https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08

Influences taken from:
https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319

Heroku buildpack added to deploy production build: https://github.com/mars/create-react-app-buildpack.git

Static version of the site generated using react-snapshot.

Sitemap building with react-snapshot-sitemap.

Ideas from: http://animate.mhaagens.me/idontexist
