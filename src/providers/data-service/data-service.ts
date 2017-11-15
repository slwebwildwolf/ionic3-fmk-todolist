import {Injectable} from '@angular/core';
import {DataFmkServiceProvider} from "../../app-fmk/providers/data-fmk-service/data-fmk-service";
import {BaseServiceProvider} from "../../app-fmk/providers/base-service";

/**
  Service des Data de l'application.
*/
@Injectable()
export class DataServiceProvider extends DataFmkServiceProvider {

  KEY:string = 'data_mysimplelist';

  dataApp = {
    lists: []
  }

  constructor(protected baseService:BaseServiceProvider) {
    super(baseService);
  }

  load() {
    super.load();
    this.baseService.addDataToJson(this.data, this.dataApp);
  }

}
