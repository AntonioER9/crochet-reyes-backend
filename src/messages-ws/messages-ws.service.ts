import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Socket } from 'socket.io';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';

interface ConnectedClients {
  [id: string]: {
    socket: Socket,
    user: User
  }
}

@Injectable()
export class MessagesWsService {

  private connectedClients: ConnectedClients = {}

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }


  async registerClient(client: Socket, userId: string) { // Connected client

    const user = await this.userRepository.findOneBy({ id: userId }); //VERIFICAMOS QUE EL USUARIO EXISTA
    if (!user) throw new Error('User not found');
    if (!user.isActive) throw new Error('User not active');

    this.checkUserConnection(user);

    this.connectedClients[client.id] = {
      socket: client,
      user: user,
    };
  }

  removeClient(clientId: string) { // Disconnected client
    delete this.connectedClients[clientId];
  }


  getConnectedClients(): string[] { //number of clients connected
    return Object.keys(this.connectedClients);
  }


  getUserFullName(socketId: string) {
    return this.connectedClients[socketId].user.fullName;
  }


  private checkUserConnection(user: User) { // Permitimos solo una conexión de 1 cliente con su JWT

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectedClient.socket.disconnect();
        break;
      }
    }

  }

}