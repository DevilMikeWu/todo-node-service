import WebSocket from "ws";
import Monitor from "./monitor";

export default class SocketConnection {
  private port: Number = 8080;
  private connect(): void {
    const wss = new WebSocket.Server({ port: 8080 });
    wss.on("connection", ws => {
      const monitor = new Monitor();
      ws.on("message", message => {
        console.log(`Received message => ${message}`);
      });
      ws.on('open', () =>{
        console.log('')
      });
      ws.on("close", () => {
        console.log("a websocket connection is closed");
      });
      // ws.send("hello ws");
      monitor.getSystemData(ws);
    });
  }

  public start(): void {
    this.connect();
  }
}
