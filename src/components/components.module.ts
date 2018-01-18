import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { ProfileImageComponent } from './profile-image/profile-image';
@NgModule({
	declarations: [NavbarComponent,
    ProfileImageComponent],
	imports: [],
	exports: [NavbarComponent,
    ProfileImageComponent]
})
export class ComponentsModule {}
