export default class Server {
    ws: WebSocket;
    buffer = [];

    constructor(endpoint, onDisconnect = null) {
        this.ws = new WebSocket(endpoint);
        this.ws.onmessage = (e) => {
            this.buffer.push(e.data);
        }
        this.ws.onclose = onDisconnect;
    }

    async* get() {
        while (true) {
            if (!this.buffer.length) {
                await new Promise(resolve => setTimeout(resolve, 100));
                continue;
            }
            yield this.buffer.shift();
        }
    }

    send(data) {
        console.log(data)
        this.ws.send(data);
    }

    disconnect() {
        this.ws.close();
    }
}
