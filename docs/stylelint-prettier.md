# Stylelint and Prettier

**Fluid UI** is a modern starter prepared for better CSS development.
We use [**Stylelint**](https://stylelint.io/) with additional packages:

```json
{
  "stylelint"
  "stylelint-config-prettier"
  "stylelint-config-rational-order"
  "stylelint-config-standard-scss"
  "stylelint-order"
}
```

**Stylelint** configration is defined in `.stylelintrc`:

```json
{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-rational-order"
  ],
  "ignoreFiles": ["**/*.css"],
  "rules": {
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "max-nesting-depth": 3,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": ["attribute"]
      }
    ],
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false
      }
    ]
  }
}
```

[Prettier](https://prettier.io/) configuration is defined in `.prettierrc.json`:

```json
{
  "printWidth": 140,
  "tabWidth": 2,
  "trailingComma": "all",
  "endOfLine": "auto",
  "plugins": ["prettier-plugin-rational-order"]
}
```
