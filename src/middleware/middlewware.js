import cors from 'cors';
import bodyParser from 'body-parser';

// Middleware to handle CORS requests and set response timeout to 10 seconds.

export default function (app) {

app.use(
  cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use((req, res, next) => {
  res.setTimeout(10000);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

}