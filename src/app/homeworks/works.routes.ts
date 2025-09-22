
import { Routes } from '@angular/router';
import { MiComponente01 } from './mi-componente01/mi-componente01'
import { MiComponente02 } from './mi-componente02/mi-componente02'
import { MiComponente03 } from './mi-componente03/mi-componente03'
import { MiComponente04 } from './mi-componente04/mi-componente04'
import { MiComponente05 } from './mi-componente05/mi-componente05'
import { MiComponente06 } from './mi-componente06/mi-componente06'
import { MiComponente07 } from './mi-componente07/mi-componente07'
import { MiComponente08 } from './mi-componente08/mi-componente08'
import { MiComponente09 } from './mi-componente09/mi-componente09'
import { MiComponente10 } from './mi-componente10/mi-componente10'
import { Saludo } from './saludo/saludo'





export default [
  { path:'saludo', data: { breadcrumb: 'Saludo' }, component: Saludo },
  { path:'c01', data: { breadcrumb: 'Componente 01' }, component: MiComponente01 },
  { path:'c02', data: { breadcrumb: 'Componente 02' }, component: MiComponente02 },
  { path:'c03', data: { breadcrumb: 'Componente 03' }, component: MiComponente03 },
  { path:'c04', data: { breadcrumb: 'Componente 04' }, component: MiComponente04 },
  { path:'c05', data: { breadcrumb: 'Componente 05' }, component: MiComponente05 },
  { path:'c06', data: { breadcrumb: 'Componente 06' }, component: MiComponente06 },
  { path:'c07', data: { breadcrumb: 'Componente 07' }, component: MiComponente07 },
  { path:'c08', data: { breadcrumb: 'Componente 08' }, component: MiComponente08 },
  { path:'c09/:param_nombre/:param_edad', data: { breadcrumb: 'Componente 09' }, component: MiComponente09 },
  { path:'c10', data: { breadcrumb: 'Componente 10' }, component: MiComponente10 },



] as Routes;
