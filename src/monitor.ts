import child_process, { spawn } from "child_process";

export default class Monitor {
  private spawn: any = child_process.spawn;

  public getSystemData(ws: any): any {
    const mon = spawn("iostat", ["-I", "5"]);
    mon.stdout.on("data", data => {
      console.log(data);
      try{
        ws.send(`iostat: ${data}`);
      }catch(err){
        console.log(err);
      }
    });
  }
}
