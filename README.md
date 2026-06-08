# Snake3D — 3D 贪吃蛇

> 软件工程实践（二）小组协同开发项目
>
> 武汉理工大学计算机科学与技术学院

---

## 项目简介

Snake3D 是一款基于 **Three.js** 的 3D 贪吃蛇网页游戏。玩家在 18×18 的 3D 网格棋盘上控制贪吃蛇吃食物得分，蛇身越长分数越高。游戏采用等距俯视视角，具有流畅的 3D 渲染效果和粒子特效。

### 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 构建工具 | Maven | 项目管理与自动化构建 |
| 后端服务 | JDK HttpServer | 内置 HTTP 服务器（零外部依赖） |
| 3D 渲染 | Three.js r160 | 3D 场景渲染 |
| 前端 | HTML5 + CSS3 + JavaScript (ES Module) | 游戏 UI 与交互 |

### 游戏截图

> 启动游戏后访问 `http://localhost:8080` 即可体验。

---

## 快速开始

### 环境要求

- JDK 8 或更高版本
- Maven 3.6 或更高版本
- 现代浏览器（Chrome / Firefox / Edge / Safari）

### 编译与运行

```bash
# 1. 克隆仓库
git clone <repo-url>
cd kai-fa-522_2

# 2. 编译项目
mvn clean compile

# 3. 运行游戏服务器
mvn exec:java -Dexec.mainClass="cn.edu.whut.sept.GameServer"

# 4. 打开浏览器访问
# http://localhost:8080
```

### 游戏操作

| 操作 | 按键 |
|------|------|
| 移动方向 | `W A S D` 或 `↑ ← ↓ →` |
| 暂停/继续 | `空格键 Space` |
| 开始游戏 | `空格键` 或点击按钮 |
| 重新开始 | `空格键` 或点击按钮 |

---

## 项目结构

```
kai-fa-522_2/
├── pom.xml                     # Maven 配置
├── README.md                   # 项目说明
├── .github/workflows/ci.yml    # GitHub Actions CI
├── .workbuddy/rules/           # AI 开发约束规则
├── src/
│   ├── main/java/.../
│   │   └── GameServer.java     # HTTP 服务器
│   ├── main/resources/web/
│   │   ├── index.html          # 游戏页面
│   │   ├── css/style.css       # 样式
│   │   └── js/
│   │       ├── game-core.js    # 游戏核心逻辑
│   │       ├── scene.js        # 3D 场景渲染
│   │       └── main.js         # 主入口
│   └── test/java/.../
│       └── GameServerTest.java # 单元测试
└── REPORT.docx                 # 实训报告
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

| 成员 | 角色 | 负责模块 | 分支 |
|------|------|---------|------|
| 成员A | 组长 | 游戏核心逻辑、项目集成 | `main` / `feature/game-logic` |
| 成员B | 开发 | 3D 场景渲染、粒子特效 | `feature/3d-render` |
| 成员C | 开发 | HTTP 服务器、UI 界面、CI/CD | `feature/server-ui` |

---

## CI/CD

项目使用 GitHub Actions 进行持续集成：

- **编译检查**: `mvn compile` 确保代码可编译
- **单元测试**: `mvn test` 运行测试用例
- **打包**: `mvn package` 生成可执行 JAR 文件

每次 push 或 PR 到 `main` 分支时自动触发上述流程。

---

## AI 辅助开发声明

本项目全程使用 AI 大模型（WorkBuddy / Deepseek-V4-Pro）辅助开发：

- **AI 职责**: 代码生成、架构设计、文档编写、问题排查
- **人工职责**: 需求决策、代码审查、测试验证、答辩展示

项目根目录 `.workbuddy/rules/PROJECT-CONSTRAINTS.md` 包含完整的 AI 开发约束规则。

---

## License

MIT License — 本项目仅用于教学实践目的。
