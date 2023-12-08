import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../node_modules/.prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('DB Connected!');
  }

  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on<string>('beforeExit', async ()  => {
  //     await app.close();
  //   });
  // }
}
