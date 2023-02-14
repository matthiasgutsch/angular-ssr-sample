import { SelectItem } from "primeng/api";

import { environment } from "../../environments/environment";
export const APP_API = "api/v1/";


export const CLIENTS_API = environment.baseUrl + APP_API + "locations";
export const APPOINTMENTS_API = environment.baseUrl + APP_API + "appointments";
export const LOCATIONS_API = environment.baseUrl + APP_API + "locations";


export const PARAM_WORKS_PATH = '/admin/settings/works/'
export const PARAM_NEWS_PATH = '/news/'
export const PARAM_ANIMATIONS_PATH = '/animazione/'
export const PARAM_CLIENTS_PATH = '/lavori/'

export const PARAM_CHECKINS_PATH = '/admin/checkins/'
export const PARAM_CHECKOUTS_PATH = '/admin/checkouts/'
export const PARAM_TIMESHEETS_PATH = '/admin/timesheets/'
export const PARAM_BILLINGS_PATH = '/admin/billings/'
export const PARAM_QUOTES_PATH = '/admin/quotes/'
export const PARAM_ORDERS_PATH = '/admin/orders/'
export const PARAM_EMPLOYEE_TIMESHEETS_PATH = '/employee/timesheets/'
export const PARAM_PRODUCTS_PATH = '/dashboard/products/'

export const PARAM_DASHBOARD_PATH = '/dashboard/'
export const PARAM_STARTUPS_PATH = '/startups/'
export const PARAM_MARKETS_PATH = '/markets/'
export const PARAM_MARKET_PATH = '/market/'

export const PARAM_EMPLOYEES_PATH = '/admin/employees/'
export const PARAM_SUPPLIERS_PATH = '/admin/suppliers/'

export const PARAM_APPOINTMENTS_PATH = '/admin/appointments/'

export const PARAM_ADMIN_PAYMENTS_PATH = '/dashboard/payments'

export const PARAM_ADMIN_JOBS_PATH = '/dashboard/jobs'
export const PARAM_ADMIN_STARTUPS_PATH = '/dashboard/startups'
export const PARAM_SUPPORTS_PATH = '/dashboard/support/'


export const FISCAL_CODE_VALIDATOR_REGEX =
  /^([A-Za-z]{6}[0-9lmnpqrstuvLMNPQRSTUV]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9lmnpqrstuvLMNPQRSTUV]{2}[A-Za-z]{1}[0-9lmnpqrstuvLMNPQRSTUV]{3}[A-Za-z]{1})$/g;



export const API_DATE_FORMAT = 'yyyy-MM-DD[T]HH:mm:ss';
export const CHIPS_DATE_FORMAT = 'DD/MM/yyyy HH:mm';


export const PAGES: SelectItem[] = [
  { title: "Home", value: "", icon: "pi pi-list" },
  { title: "Chi siamo", value: "chi-siamo", icon: "pi pi-list" },
  { title: "Referenze", value: "referenze", icon: "pi pi-list" },
  { title: "Servizi", value: "servizi", icon: "pi pi-list" },
  { title: "News", value: "news", icon: "pi pi-list" },
  { title: "Contatti", value: "contatti", icon: "pi pi-list" },
  { title: "Lavora con noi", value: "careers", icon: "pi pi-list" },

];


export const PAGES_EN: SelectItem[] = [
  { title: "Home", value: "", icon: "pi pi-list" },
  { title: "News", value: "news", icon: "pi pi-list" },


];

export const PAGES_FOOTER: SelectItem[] = [
  { label: "Home", value: "", icon: "pi pi-list" },
  { label: "Chi siamo", value: "chi-siamo", icon: "pi pi-list" },
  { label: "Servizi", value: "servizi", icon: "pi pi-list" },
  { label: "Animazione", value: "animazione", icon: "pi pi-list" },
  { label: "Lavori", value: "lavori", icon: "pi pi-list" },
  { label: "News", value: "eventi-news", icon: "pi pi-list" },
  { label: "Trasparenza", value: "/trasparenza", icon: "pi pi-list" },
  { label: "Contatti", value: "/contatti", icon: "pi pi-list" },
  { label: "Sitemap", value: "/sitemap", icon: "pi pi-list" },

];


export const SERVICES: SelectItem[] = [
  { label: "Biblioteche", value: "/servizi/biblioteche"},
  { label: "Catalogazione", value: "/servizi/catalogazione"},
  { label: "Archivi", value: "/servizi/archivi"},
  { label: "Letture e laboratori", value: "/servizi/animazione-ed-eventi"},
  { label: "Musei e Beni culturali", value: "/servizi/beni-culturali"},
  { label: "Bibliobus Biblioteca viaggiante", value: "/servizi/servizio-bibliobus"},
  { label: "Prestito Interbibliotecario", value: "/servizi/prestito-interbibliotecario"},
  { label: "Turismo e Visite guidate", value: "/servizi/turismo-e-visite-guidate"},
];



export const APP_VERSION = "2.0";
export const EDITOR_CONFIGURATION =
  'selector:"textarea", plugins: "table",  menubar: "false", height: 400, toolbar: "table | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent"';
