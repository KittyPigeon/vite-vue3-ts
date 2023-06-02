# vite+vue3+ts

node 16.14.0

## eslint 校验

> 在 Vite for Vue 3 项目中添加 TypeScript 校验和保存自动修复，可以参考以下步骤：

添加 TypeScript 支持

首先需要安装相关依赖 typescript 和 @vitejs/plugin-vue-jsx。可以通过如下命令进行安装：

sh
npm i -D typescript @vitejs/plugin-vue-jsx
此外，还需要在项目根目录下添加一个名为 tsconfig.json 的 TypeScript 配置文件，用于指定 TypeScript 的编译选项。

修改 vite.config.js

在 vite.config.js 中添加 plugins 字段，并将 vue() 修改为 vueJsx()，使其能够处理 .tsx 文件。示例代码如下：

javascript
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
plugins: [vueJsx()],
});
添加 ESLint 支持（可选）

如果希望使用 ESLint 进行 TypeScript 格式检查和自动修复，可以参考前面的方法进行配置。

添加 VS Code 配置

在 .vscode/settings.json 文件中添加如下配置：

json
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
},
"vetur.validation.template": false,
"javascript.format.insertSpaceBeforeFunctionParenthesis": true,
"typescript.format.insertSpaceBeforeFunctionParenthesis": true,
"eslint.validate": [
"javascript",
"typescript",
"vue",
],
"eslint.options": {
"extensions": [".js", ".vue", ".ts"],
},
以上配置中，eslint.validate 表示需要进行 ESLint 校验的文件类型，设置后将会在代码编辑时进行实时校验；eslint.options.extensions 中包含了 TypeScript 文件（.ts）的扩展名，以便于 VS Code 正确识别这些文件。

至此，就完成了在 Vite for Vue 3 项目中添加 TypeScript 校验和保存自动修复的配置。在进行开发时，只需保持以上配置文件的正确性和相关插件的安装即可。

## 依赖库的安装

### 文献

- [动态路由生成](https://www.jianshu.com/p/1dfcc790c637)
- [vue3+ts+vite](https://blog.csdn.net/qq_17335549/article/details/128480583)
- [vite+vue3+prettier+eslint](https://juejin.cn/post/7222460499493584955)

## 错误总结

- package.json 文件错误会导致 eslint 失败
