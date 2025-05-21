export function createConnection(serverUrl, roomId){
    return {
        connect(){
            console.log('connecting to "'+roomId+'" room '+serverUrl+'....');
        },
        disconnect(){
            console.log('Disconnected from "'+roomId+'" room '+serverUrl+'....');
        }
    }
}