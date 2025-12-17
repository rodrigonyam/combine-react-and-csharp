import * as signalR from '@microsoft/signalr';

class SignalRService {
  constructor() {
    this.connection = null;
  }

  async startConnection() {
    const token = localStorage.getItem('token');
    
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(process.env.REACT_APP_SIGNALR_URL || 'https://localhost:7001/notificationHub', {
        accessTokenFactory: () => token
      })
      .withAutomaticReconnect()
      .build();

    try {
      await this.connection.start();
      console.log('SignalR connection established');
    } catch (error) {
      console.error('SignalR connection failed:', error);
    }
  }

  async stopConnection() {
    if (this.connection) {
      await this.connection.stop();
      this.connection = null;
    }
  }

  // Listen for notifications
  onReceiveNotification(callback) {
    if (this.connection) {
      this.connection.on('ReceiveNotification', callback);
    }
  }

  // Listen for task updates
  onTaskUpdate(callback) {
    if (this.connection) {
      this.connection.on('TaskUpdated', callback);
    }
  }

  // Listen for project updates
  onProjectUpdate(callback) {
    if (this.connection) {
      this.connection.on('ProjectUpdated', callback);
    }
  }

  // Send notification
  async sendNotification(userId, message) {
    if (this.connection) {
      try {
        await this.connection.invoke('SendNotification', userId, message);
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }
  }

  // Join project group
  async joinProjectGroup(projectId) {
    if (this.connection) {
      try {
        await this.connection.invoke('JoinProjectGroup', projectId);
      } catch (error) {
        console.error('Error joining project group:', error);
      }
    }
  }

  // Leave project group
  async leaveProjectGroup(projectId) {
    if (this.connection) {
      try {
        await this.connection.invoke('LeaveProjectGroup', projectId);
      } catch (error) {
        console.error('Error leaving project group:', error);
      }
    }
  }
}

export const signalRService = new SignalRService();