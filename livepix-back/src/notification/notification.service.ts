import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Pusher from 'pusher';
import { PixWebDTO } from 'src/dto/pix-web.dto';

@Injectable()
export class NotificationService {
    private pusher: Pusher;
    private readonly logger = new Logger(NotificationService.name);

    constructor(private configService: ConfigService) {
        this.pusher = new Pusher({
            appId: this.configService.get<string>('PUSHER_APP_ID')!,
            key: this.configService.get<string>('PUSHER_KEY')!,
            secret: this.configService.get<string>('PUSHER_SECRET')!,
            cluster: this.configService.get<string>('PUSHER_CLUSTER')!,
            useTLS: true,
        });
    }

    async triggerDonationAlert(donationData: PixWebDTO): Promise<void> {
        this.logger.log(`Disparando alerta para doação de ${donationData.nome}...`);

        try {
            await this.pusher.trigger(
                'canal-alertas-pix',
                'nova-doacao',
                donationData,
            );

            this.logger.log('Alerta disparado com sucesso!')

            this.logger.log(`Alerta disparado com sucesso para ${donationData.nome}`);
        } catch (error) {
            this.logger.error(`Erro ao disparar alerta: ${error}`);
            throw error;
        }
    }
}
