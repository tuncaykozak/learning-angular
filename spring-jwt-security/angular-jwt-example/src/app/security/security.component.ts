import { Component } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent {
  accessRequest = {
    username: 'tuncaykozak',
    password: 'ndoosh',
  };

  response: any;

  constructor(private jwtClientService: JwtClientService) {}

  ngOnInit() {
    this.getAccesToken(this.accessRequest);
  }

  public getAccesToken(authRequest: any) {
    let resp = this.jwtClientService.generateToken(authRequest);
    resp.subscribe((data) => {
      this.accessApi(data);
    });
  }

  public accessApi(token: any) {
    let resp = this.jwtClientService.welcome(token);
    resp.subscribe((data) => {
      this.response = data;
    });
  }
}
