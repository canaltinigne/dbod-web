import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let instances = [
      {id: 11, name: 'myd1', type: 'MySQL', class: 'TEST'},
      {id: 12, name: 'postgd1', type: 'PG', class: 'TEST'},
      {id: 13, name: 'infd1', type: 'InfluxDB', class: 'TEST'},
      {id: 14, name: 'myt1', type: 'MySQL', class: 'PROD'},
    ];
    return {instances};
  }
}
