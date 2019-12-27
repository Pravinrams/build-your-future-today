## Running the App**

If your credentials are different from these: 
```
const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5433
});
```
Update it to match your local database credentials before running `seed.js`

- `git clone` https://github.com/Jeffrey-A/build-your-future-today.git
- `cd /build-your-future-today`
- `npm i`
- `node seed.js`
- `cd /front-end`
- `npm i`
- `npm run build`
- `cd ../`
- `node index.js`
- Go to: http://localhost:5000/

If you get any problem running the program please let me know.