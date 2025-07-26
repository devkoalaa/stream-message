import { Body, Controller, Post } from '@nestjs/common';
import { PixWebDTO } from 'src/dto/pix-web.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @Post('pix-webhook')
    async triggerAlert(@Body() donationData: PixWebDTO) {
        await this.notificationService.triggerDonationAlert(donationData);

        return { message: 'Webhook recebido com sucesso!' }
    }
}
