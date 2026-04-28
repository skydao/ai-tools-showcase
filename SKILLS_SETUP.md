# AI Tools Showcase - 所需技能清单

## 技能分配

### 1. 大脑（我）需要加载的技能

这些技能在协调和规划时使用：

- **writing-plans** (✅ 已加载)
  - 用途：创建网站开发实施计划
  - 场景：将需求文档转化为可执行的开发任务

- **popular-web-designs** (✅ 已加载)
  - 用途：获取专业网站设计模板
  - 场景：为 AI Tools 网站选择合适的设计风格（如 Linear、Vercel、Stripe 等）

- **subagent-driven-development** (✅ 已加载)
  - 用途：通过子代理执行开发任务
  - 场景：将开发任务分配给 OpenClaw 执行

- **dogfood** (✅ 已加载)
  - 用途：Web 应用程序 QA 测试
  - 场景：网站开发完成后进行系统测试

### 2. 双手（OpenClaw）需要执行的技能

OpenClaw 将执行实际的文件操作和命令：

- **文件创建**：创建 Next.js 项目文件
- **代码生成**：生成 React/TypeScript 组件
- **依赖管理**：安装 npm 包
- **运行服务**：启动开发服务器
- **测试执行**：运行测试套件

## 技能工作流

```
1. 我（大脑）→ 加载 writing-plans
   ↓ 创建实施计划

2. 我（大脑）→ 加载 popular-web-designs
   ↓ 选择设计风格（推荐：Linear 或 Vercel）

3. 我（大脑）→ 加载 subagent-driven-development
   ↓ 派遣子代理到 OpenClaw

4. OpenClaw（双手）→ 执行开发任务
   ↓ 创建文件、运行命令、生成代码

5. 我（大脑）→ 加载 dogfood
   ↓ 进行 QA 测试
```

## 推荐的设计风格

根据 AI Tools Showcase 的定位，推荐以下设计模板：

1. **Linear.app** - 超极简暗色主题，精确，紫色强调
   - 适合：科技类、开发者工具
   - 特点：现代、专业、暗色主题

2. **Vercel** - 黑白精度，Geist 字体系统
   - 适合：开发工具、SaaS 平台
   - 特点：简洁、优雅、高性能感

3. **Supabase** - 深绿色主题，代码优先
   - 适合：数据库、工具类应用
   - 特点：现代、技术感

**推荐选择：Linear.app** - 最符合 AI Tools 的科技定位

## 开发计划结构

基于 writing-plans 技能，将创建以下计划：

### Phase 1: 项目初始化
- 创建 Next.js 项目结构
- 配置 TypeScript 和 Tailwind CSS
- 设置项目目录

### Phase 2: 数据层
- 定义 AI 工具数据模型
- 创建示例数据（10+ 工具）
- 创建数据访问层

### Phase 3: 组件开发
- 导航栏组件
- 工具卡片组件
- 搜索组件
- 筛选组件
- 详情页组件

### Phase 4: 页面开发
- 首页（精选工具 + 分类）
- 工具列表页
- 工具详情页

### Phase 5: 样式和响应式
- 应用设计系统（Linear 风格）
- 桌面端布局
- 平板端适配
- 移动端适配

### Phase 6: 测试和优化
- 功能测试
- 响应式测试
- 性能优化
- QA 测试（使用 dogfood）

## 下一步行动

1. ✅ 加载所需技能（已完成）
2. ⏭️ 选择设计风格（推荐 Linear）
3. ⏭️ 创建详细实施计划
4. ⏭️ 派遣 OpenClaw 执行开发任务

---

**状态**：技能准备完成，等待开始开发