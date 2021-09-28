
declare module '*.vue' {
  import vue from 'vue'
  export default vue
}

declare module 'lodash';

declare module '*./vue-types';


declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}