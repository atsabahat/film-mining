import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    devices: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    primary: string;
    secondary: string;
    primaryTextColor: string;
    secondaryTextColor: string;
  }
}
