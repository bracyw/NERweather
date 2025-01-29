import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { OrderListModule } from 'primeng/orderlist';
import AppContextComponent from './context/app-context.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import TypographyComponent from 'src/components/typography/typography.component';
import SidebarToggleComponent from 'src/components/sidebar-toggle/sidebar-toggle.component';
import { OverviewPageComponent } from 'src/pages/overview-page/overview-page.component';
import AppSidebarComponent from './app-sidebar/app-sidebar.component';
import SidebarChipComponent from 'src/components/sidebar-chip/sidebar-chip.component';
import { WindSpeedComponent } from 'src/pages/overview-page/components/wind-speed/wind-speed.component';
import HStackComponent from 'src/components/hstack/hstack.component';
import { InfoBackgroundComponent } from 'src/components/info-background/info-background.component';
import { GraphComponent } from 'src/components/graph/graph.component';
import { DoubleLineGraphComponent } from 'src/components/double-line-graph/double-line-graph.component';
import { GraphDialogComponent } from 'src/components/graph-dialog/graph-dialog.component';

@NgModule({
  declarations: [
    AppContextComponent,
    /* Start of our homemade components */
    TypographyComponent,
    SidebarToggleComponent,
    OverviewPageComponent,
    AppSidebarComponent,
    SidebarChipComponent,
    WindSpeedComponent,
    HStackComponent,
    InfoBackgroundComponent,
    GraphComponent,
    DoubleLineGraphComponent,
    GraphDialogComponent
  ],
  bootstrap: [AppContextComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgApexchartsModule,
    FlexLayoutModule,
    NgApexchartsModule,
    ToastModule,
    OrderListModule,
    ProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatIconModule,
    SidebarModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, MessageService, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'steering_wheel',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search_hands_free.svg')
      )
      .addSvgIcon('wifi', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/wifi.svg'))
      .addSvgIcon('speed', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/speed.svg'))
      .addSvgIcon('person', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/person.svg'))
      .addSvgIcon('eye', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/eye_tracking.svg'))
      .addSvgIcon('timelapse', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/timelapse.svg'))
      .addSvgIcon('cell_tower', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/cell_tower.svg'))
      .addSvgIcon('map', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/map.svg'))
      .addSvgIcon('360', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/360.svg'))
      .addSvgIcon('electric_car', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/electric_car.svg'))
      .addSvgIcon('memory', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/memory.svg'))
      .addSvgIcon('back_hand', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/back_hand.svg'))
      .addSvgIcon(
        'battery_charging_full',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/battery_charging_full.svg')
      )
      .addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/menu.svg'))
      .addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/home.svg'))
      .addSvgIcon('bar_chart', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bar_chart.svg'))
      .addSvgIcon('search', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search.svg'))
      .addSvgIcon('arrow_right', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/arrow_right.svg'))
      .addSvgIcon('ev_station', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/ev_station.svg'))
      .addSvgIcon(
        'device_thermostat',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/device_thermostat.svg')
      )
      .addSvgIcon('electric_meter', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/electric_meter.svg'))
      .addSvgIcon('warning', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/warning.svg'))
      .addSvgIcon(
        'electrical_services',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/electrical_services.svg')
      )
      .addSvgIcon('thermostat', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/thermostat.svg'))
      .addSvgIcon('model_training', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/model_training.svg'))
      .addSvgIcon('quickreply', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/quickreply.svg'))
      .addSvgIcon('bolt', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bolt.svg'))
      .addSvgIcon('timer', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/timer.svg'))
      .addSvgIcon(
        'arrow_drop_down_circle',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assests/icons/arrow_drop_down_circle.svg')
      );
  }
}
