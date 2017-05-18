import { Component, OnInit } from '@angular/core';

import { Instance }          from '../instance';
import { InstanceService }   from '../instance.service';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {
  instances: Instance[];
  selectedInstance: Instance;

  constructor(
    //private router: RouterModule,
    private instanceService: InstanceService) { }

  ngOnInit(): void {
    this.getInstances();
  }

  getInstances(): void {
    this.instanceService.getInstances().then(instances => this.instances = instances);
  }

  onSelect(instance: Instance): void {
    this.selectedInstance = instance;
  }
  //gotoDetail(): void {
  //  this.router.navigate(['/detail', this.selectedInstance.id]);
  //}
}

