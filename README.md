# Smith 042

一个基于 Vue 3 + TypeScript + Vant 4 构建的现代化移动端应用。

## 技术栈

- **框架**: Vue 3.2+
- **语言**: TypeScript 4.6+
- **构建工具**: Vite 4.4+
- **UI组件库**: Vant 4.0+
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: SCSS
- **HTTP客户端**: Axios

## 项目特性

- 🚀 基于 Vue 3 Composition API
- 📱 移动端优先的响应式设计
- 🎨 支持明暗主题切换
- 📦 完整的 TypeScript 支持
- 🔧 现代化的开发工具链
- 📝 规范的代码结构和注释
- 🎯 组件化和模块化设计

## 项目结构

```
src/
├── assets/          # 静态资源
│   ├── styles/      # 样式文件
│   └── images/      # 图片资源
├── components/      # 公共组件
│   └── common/      # 通用组件
├── hooks/           # 组合式函数
├── router/          # 路由配置
├── stores/          # 状态管理
├── types/           # 类型定义
├── utils/           # 工具函数
├── views/           # 页面组件
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 环境变量

复制 `env.example` 文件为 `.env` 并配置相应的环境变量：

```bash
cp env.example .env
```

## 开发规范

### 代码风格

- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 组合式 API 规范
- 使用 SCSS 进行样式开发
- 组件命名采用 PascalCase
- 文件命名采用 kebab-case

### 目录规范

- `components/`: 可复用的组件
- `views/`: 页面级组件
- `hooks/`: 组合式函数
- `utils/`: 工具函数
- `types/`: 类型定义
- `stores/`: 状态管理

### 提交规范

使用语义化的提交信息：

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 部署

### 构建

```bash
npm run build
```

### 部署到服务器

将 `dist` 目录下的文件部署到 Web 服务器即可。

## 许可证

MIT License
