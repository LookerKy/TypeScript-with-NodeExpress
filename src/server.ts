import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(`this Server run in ${app.get("port")} port`);
});

export default server;
