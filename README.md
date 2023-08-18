# 脚手架开发

## 依赖安装

Command-line interfaces (CLI) 相关：

commander：用于创建命令行界面和解析用户输入。
inquirer：用于与用户交互，提供选择、输入等交互方式。
chalk：用于在命令行中添加彩色文本，并使输出更具可读性。
文件处理和操作：

fs-extra：扩展 Node.js 的 fs 模块，提供更多的文件操作方法。
glob：用于在文件系统中查找匹配特定模式的文件。
rimraf：用于删除文件和文件夹，类似于 Unix 的 rm 命令。
模板和代码生成：

ejs：简单且强大的模板引擎，用于生成基于模板的代码。
lodash：提供了各种实用的函数，用于处理数组、对象和字符串等。
Git 操作：

simple-git：用于在脚手架中执行 Git 命令，如初始化 Git 仓库、提交代码等。

```shell
pnpm add commander fs-extra glob rimraf chalk ejs lodash simple-git inquirer execa

pnpm add rollup typescript @rollup/plugin-typescript # rollup typescript 支持

```

### 添加eslint

```shell
pnpm add eslint -D

npx eslint --init # 选择进行eslint 配置初始化
```

### 添加 husky

```shell
pnpm add husky -D

npx husky install

npx husky add .husky/pre-commit "pnpm run prepare" # 添加 pre-commit 钩子

npm set-script prepare "husky install" # scripts 中添加 prepare

```

### 添加 commitlint

```shell
pnpm add @commitlint/cli @commitlint/config-conventional -D

npx husky add .husky/commit-msg "npx --no-install commitlint -e" # 添加 commit-msg 钩子
```
