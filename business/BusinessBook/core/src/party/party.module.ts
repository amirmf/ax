import { Module } from '@nestjs/common';
import { PartyBusinessClassController } from './controller/party-business-class.controller';
import { PartyProductClassController } from './controller/party-product-class.controller';
import { PartyBusinessClassService } from './service/party-business-class.service';
import { PartyProductClassService } from './service/party-product-class.service';
import { PartyStandardClassController } from './controller/party-standard-class.controller';
import { PartyStandardClassService } from './service/party-standard-class.service';
import { PartyContactController } from './controller/party-contact.controller';
import { PartyMediaController } from './controller/party-media.controller';
import { PartyIdentifierService } from './service/party-identifier.service';
import { PartyMediaService } from './service/party-media.service';
import { PartyContactService } from './service/party-contact.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyProductClassRepo } from './repo/party-product-class.repo';
import { PartyBusinessClassRepo } from './repo/party-business-class.repo';
import { PartyStandardClassRepo } from './repo/party-standard-class.repo';
import { PartyContactRepo } from './repo/party-contact.repo';
import { PartyMediaRepo } from './repo/party-media.repo';
import { PartyIdentifierRepo } from './repo/party-identifier.repo';
import { PartyBusinessClass } from './entity/party-business-class.entity';
import { PartyContact } from './entity/party-contact.entity';
import { PartyIdentifier } from './entity/party-identifier.entity';
import { PartyMedia } from './entity/party-media.entity';
import { PartyProductClass } from './entity/party-product-class.entity';
import { PartyStandardClass } from './entity/party-standard-class.entity';
import { Party } from './entity/party.entity';
import { PartyBusinessClassMapper } from './mapper/party-business-class.mapper';
import { PartyContactMapper } from './mapper/party-contact.mapper';
import { PartyIdentifierMapper } from './mapper/party-identifier.mapper';
import { PartyMediaMapper } from './mapper/party-media.mapper';
import { PartyProductClassMapper } from './mapper/party-product-class.mapper';
import { PartyStandardClassMapper } from './mapper/party-standard-class.mapper';
import { PartyIdentifierController } from './controller/party-identifier.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Party,
      PartyProductClass,
      PartyBusinessClass,
      PartyStandardClass,
      PartyContact,
      PartyMedia,
      PartyIdentifier,
    ]),
  ],
  controllers: [
    PartyProductClassController,
    PartyBusinessClassController,
    PartyStandardClassController,
    PartyContactController,
    PartyMediaController,
    PartyIdentifierController,
  ],
  providers: [
    PartyProductClassMapper,
    PartyBusinessClassMapper,
    PartyStandardClassMapper,
    PartyContactMapper,
    PartyMediaMapper,
    PartyIdentifierMapper,

    PartyProductClassRepo,
    PartyBusinessClassRepo,
    PartyStandardClassRepo,
    PartyContactRepo,
    PartyMediaRepo,
    PartyIdentifierRepo,

    PartyProductClassService,
    PartyBusinessClassService,
    PartyStandardClassService,
    PartyContactService,
    PartyMediaService,
    PartyIdentifierService,
  ],
  exports: [
    PartyProductClassService,
    PartyBusinessClassService,
    PartyStandardClassService,
    PartyContactService,
    PartyMediaService,
    PartyIdentifierService,
  ],
})
export class PartyModule {}
