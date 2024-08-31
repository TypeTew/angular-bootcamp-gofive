const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name :'CategoryApp',
  filename : 'remoteEntry.js',// file ที่ทำเสร็จแล้ว
  exposes:{
    "./CategoryAdd":
    "./projects/new-micro-front-end/src/features/category-add/category-add.component.ts"
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});