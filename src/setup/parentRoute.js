import authRoute from "../api/route.auth.js";

export default function (app) {
    app.get('/', (req, res) =>{

        res.send('Hello, World!');
    })
    // Register routes
    app.use("/auth", authRoute);
}