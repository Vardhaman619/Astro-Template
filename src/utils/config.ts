import { siteConfig } from '../config/site';

export class Config {
  static getPhone(): string {
    return siteConfig.contact.phone;
  }

  static getEmail(): string {
    return siteConfig.contact.email;
  }

  static getAddress(): string {
    const { street, city, state, postcode } = siteConfig.contact.address;
    return `${street}, ${city}, ${state} ${postcode}`;
  }

  static getColors() {
    return siteConfig.colors;
  }

  static getSocialLinks() {
    return siteConfig.social;
  }

  static getBusinessHours() {
    return siteConfig.hours;
  }

  static getCompanyInfo() {
    return siteConfig.company;
  }
}