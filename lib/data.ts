export interface AITool {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  category: string;
  tags: string[];
  website: string;
  pricing: string;
  rating: number;
  featured: boolean;
  logo: string;
}

export const aiTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    nameEn: "ChatGPT",
    description: "OpenAI 开发的先进对话式 AI 助手，支持多轮对话、代码生成、文本创作等多种任务",
    category: "聊天助手",
    tags: ["对话", "写作", "编程"],
    website: "https://chat.openai.com",
    pricing: "免费+付费",
    rating: 4.8,
    featured: true,
    logo: "/logos/chatgpt.svg",
  },
  {
    id: "claude",
    name: "Claude",
    nameEn: "Claude",
    description: "Anthropic 开发的安全 AI 助手，擅长长文本处理、编程辅助和复杂推理",
    category: "聊天助手",
    tags: ["对话", "写作", "编程"],
    website: "https://claude.ai",
    pricing: "免费+付费",
    rating: 4.7,
    featured: true,
    logo: "/logos/claude.svg",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    nameEn: "Midjourney",
    description: "基于 Discord 的 AI 图像生成工具，可创作高质量的数字艺术和设计作品",
    category: "图像生成",
    tags: ["图像", "艺术", "设计"],
    website: "https://midjourney.com",
    pricing: "付费",
    rating: 4.9,
    featured: true,
    logo: "/logos/midjourney.svg",
  },
  {
    id: "dalle",
    name: "DALL-E",
    nameEn: "DALL-E",
    description: "OpenAI 的图像生成 AI，可从文本描述创建逼真的图像和艺术作品",
    category: "图像生成",
    tags: ["图像", "艺术", "设计"],
    website: "https://openai.com/dall-e-3",
    pricing: "付费",
    rating: 4.6,
    featured: false,
    logo: "/logos/chatgpt.svg",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    nameEn: "GitHub Copilot",
    description: "GitHub 推出的 AI 编程助手，实时提供代码建议和自动补全",
    category: "编程辅助",
    tags: ["编程", "开发", "效率"],
    website: "https://github.com/features/copilot",
    pricing: "付费",
    rating: 4.7,
    featured: true,
    logo: "/logos/claude.svg",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    nameEn: "Notion AI",
    description: "集成在 Notion 中的 AI 助手，帮助用户快速生成内容、总结文档和提升写作效率",
    category: "办公效率",
    tags: ["写作", "文档", "效率"],
    website: "https://notion.so/product/ai",
    pricing: "付费",
    rating: 4.5,
    featured: false,
    logo: "/logos/chatgpt.svg",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    nameEn: "Perplexity AI",
    description: "AI 驱动的搜索引擎，提供准确的答案和引用来源，支持实时信息检索",
    category: "搜索工具",
    tags: ["搜索", "问答", "研究"],
    website: "https://perplexity.ai",
    pricing: "免费+付费",
    rating: 4.6,
    featured: true,
    logo: "/logos/claude.svg",
  },
  {
    id: "runway",
    name: "Runway",
    nameEn: "Runway",
    description: "AI 视频创作和编辑平台，支持文本生成视频、图像生成视频和智能剪辑",
    category: "视频创作",
    tags: ["视频", "创作", "编辑"],
    website: "https://runway.ml",
    pricing: "付费",
    rating: 4.5,
    featured: false,
    logo: "/logos/midjourney.svg",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    nameEn: "Hugging Face",
    description: "开源 AI 模型托管平台，提供数千个预训练模型和 API 服务",
    category: "开发平台",
    tags: ["模型", "API", "开源"],
    website: "https://huggingface.co",
    pricing: "免费+付费",
    rating: 4.8,
    featured: true,
    logo: "/logos/chatgpt.svg",
  },
  {
    id: "zapier-ai",
    name: "Zapier AI",
    nameEn: "Zapier AI",
    description: "AI 自动化工具，连接数千个应用程序，创建智能工作流自动化",
    category: "自动化",
    tags: ["自动化", "集成", "工作流"],
    website: "https://zapier.com/ai",
    pricing: "免费+付费",
    rating: 4.4,
    featured: false,
    logo: "/logos/claude.svg",
  },
];

export const categories = [
  "聊天助手",
  "图像生成",
  "编程辅助",
  "办公效率",
  "搜索工具",
  "视频创作",
  "开发平台",
  "自动化",
];

export const featuredTools = aiTools.filter((tool) => tool.featured);