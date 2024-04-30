export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );

    // In this example(if index is 0), server and servers[0] are indeed referencing the same object in memory because the find method returns a reference to the found object in the array.
    // console.log("updateServerupdateServer", server === this.servers[0]);

    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
