// NOTE THAT service is nothing but simple class, there is no any decoratore to configure any sevrvice.

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
