import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Instance } from './instance';

@Injectable()
export class InstanceService {

    private instancesUrl = 'api/heroes';  // URL to web api
    private headers = new Headers(
        {
            'Content-Type': 'application/json'
        });

    constructor(private http: Http) { }

    getInstances(): Promise<Instance[]> {
        return this.http.get(this.instancesUrl)
               .toPromise()
               .then(response => response.json().data as Instance[])
               .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getInstance(id: number): Promise<Instance> {
        const url = `${this.instancesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Instance)
            .catch(this.handleError);
    }
    update(instance:Instance): Promise<instance> {
        const url = `${this.instancesUrl}/${instance.id}`;
        return this.http
            .put(url, JSON.stringify(instance), {headers: this.headers})
            .toPromise()
            .then(() => instance)
            .catch(this.handleError);
    }
    create(name: string): Promise<Instance> {
        return this.http
            .post(this.instancesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Instance)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.instancesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}
