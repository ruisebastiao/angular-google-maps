export default {
<<<<<<< HEAD
  entry: 'dist/snazzy-info-window/index.js',
  dest: 'dist/snazzy-info-window/snazzy-info-window.umd.js',
  format: 'umd',
  moduleName: 'ngmaps.snazzyInfoWindow',
  sourceMap: true,
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx',
    'rxjs/Rx': 'Rx',
    '@ruisebastiao/core': 'ngmaps.core'
=======
  input: 'dist/packages/snazzy-info-window/index.js',
  output: {
    file: 'dist/packages/snazzy-info-window/snazzy-info-window.umd.js',
    name: 'ngmaps.snazzyInfoWindow',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular/compiler': 'ng.compiler',
      '@angular/platform-browser': 'ng.platformBrowser',
      '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
      'js-marker-clusterer': 'MarkerClusterer',
      'rxjs/Subject': 'Rx',
      'rxjs/observable/PromiseObservable': 'Rx',
      'rxjs/operator/toPromise': 'Rx.Observable.prototype',
      'rxjs/Observable': 'Rx',
      'rxjs/Rx': 'Rx',
      '@agm/core': 'ngmaps.core'
    },
    sourceMap: true,
    format: 'umd',
>>>>>>> master
  },
  experimentalDynamicImport: true,
  context: 'window',
<<<<<<< HEAD
  external: ['rxjs', '@angular/core', 'rxjs/Observable', '@ruisebastiao/core']
=======
  external: ['rxjs', '@angular/core', '@agm/core']
>>>>>>> master
}
