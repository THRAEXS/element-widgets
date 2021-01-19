# Element Widgets

Widget based on element-ui.

## Todos

- [ ] Documentation

- [ ] mixins location

- [X] selector loading

- [ ] selector button label

- [X] small pagination table

- [ ] Big data table(`editable`)

- [ ] pagination selector ok/cancel event custom

## Features

- [X] `card-box`

- [X] `dialog-box`

- [X] `pagination-table`

- [X] `pagination-selection`

- [X] `pagination-selector`

- [ ] `tree-selection`

- [ ] `tree-selector`

## Documentation

### `pagination-selector` 分页选择器

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | :---: | :---: |
| `value` / `v-model` | 绑定值, 支持`.sync`修饰符 | `string` / `array` | - | - |
| `data` | 显示的数据, 必需 | `array` | - | `[]` |
| `visible` | 是否显示选择器, 支持`.sync`修饰符 | `boolean` | - | `false` |
| `multiple` | 是否为多选 | `boolean` | - | `false` |s
| `loading` | 是否显示加载动效 | `boolean` | - | `false` |
| `loadingText` | 加载动效图标下方的文案 | `string` | - | - |
| `loadingBackground` | 加载动效的背景颜色 | `string` | - | `rgba(0, 0, 0, 0.7)` |
