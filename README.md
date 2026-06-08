# Snake3D — 3D 贪吃蛇

> 软件工程实践（二）小组协同开发项目
>
> 武汉理工大学计算机学院

---

## 项目简介

Snake3D 是一款基于 **Three.js** 的 3D 贪吃蛇网页游戏。玩家在 18×18 的 3D 网格棋盘上控制贪吃蛇吃食物得分，蛇身越长分数越高。游戏采用等距俯视视角，具有流畅的 3D 渲染效果和粒子特效。

### 技术栈

| 层级    | 技术                           | 说明                         |
| ------- | ------------------------------ | ---------------------------- |
| 运行时  | Node.js 18+                    | 服务端运行时                 |
| 服务端  | Node.js 内置 http 模块         | 静态文件服务器（零外部依赖） |
| 3D 渲染 | Three.js r160                  | 3D 场景渲染（CDN 加载）      |
| 前端    | HTML5 + CSS3 + 原生 JavaScript | 游戏 UI 与交互               |

---

## 快速开始

### 环境要求

- Node.js 18 或更高版本
- 现代浏览器（Chrome / Firefox / Edge / Safari）

### 运行

```bash
# 启动游戏服务器
node server.js

# 或使用 npm
npm start

# 浏览器打开
# http://localhost:8080
```

### 游戏操作

| 操作      | 按键                   |
| --------- | ---------------------- |
| 移动方向  | `W A S D` 或 `↑ ← ↓ →` |
| 暂停/继续 | `空格键 Space`         |
| 开始游戏  | `空格键` 或点击按钮    |
| 重新开始  | `空格键` 或点击按钮    |

---

## 项目结构

```
kai-fa-522_2/
├── server.js                    # Node.js HTTP 服务器
├── package.json                 # 项目元信息
├── README.md                    # 项目说明
├── .github/workflows/ci.yml     # GitHub Actions CI
├── .workbuddy/rules/            # AI 开发约束规则
├── .gitignore
├── REPORT.docx                  # 实训报告
└── src/main/resources/web/
    ├── index.html               # 游戏页面
    ├── css/style.css            # 样式
    └── js/
        ├── game-core.js         # 游戏核心逻辑
        ├── scene.js             # 3D 场景渲染
        └── main.js              # 主入口
```

---

## 游戏规则

- **网格**: 18×18 棋盘
- **初始状态**: 蛇长 3 节，位于棋盘中央，方向向右
- **移动**: 按 WASD 或方向键控制蛇的移动方向
- **吃食物**: 蛇头碰到食物 +10 分，蛇身增长 1 节
- **速度递增**: 每吃 5 个食物，移动速度加快一档
- **游戏结束**: 蛇头撞墙或撞到自己身体
- **暂停**: 空格键暂停/继续

---

## 小组分工

| 成员   | GitHub                  | 角色 | 负责模块                              | 分支                            |
| ------ | ----------------------- | ---- | ------------------------------------- | ------------------------------- |
| 陈健韬 | jet-isnt-haha/jettyChen | 组长 | 项目初始化、游戏核心逻辑、集成合并    | master / feature/game-logic     |
| 高有民 | cantabile-g             | 开发 | Three.js 3D场景渲染、粒子特效         | feature/3d-render               |
| 赵昊德 | funnyjacy               | 开发 | HTTP服务器、UI界面、CI/CD、文档、测试 | feature/server-ui、feature/test |

---

## CI/CD

项目使用 GitHub Actions 进行持续集成。

每次 push 或 PR 到 `master` 分支时自动触发代码检查。

---

## AI 辅助开发声明

本项目全程使用 AI 大模型（WorkBuddy / Deepseek-V4-Pro）辅助开发：

- **AI 职责**: 代码生成、架构设计、文档编写、问题排查
- **人工职责**: 需求决策、代码审查、测试验证、答辩展示

项目根目录 `.workbuddy/rules/PROJECT-CONSTRAINTS.md` 包含完整的 AI 开发约束规则。

---

## License

MIT License — 本项目仅用于教学实践目的。
