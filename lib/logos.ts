import Image from "next/image";

export const toolLogos: Record<string, string> = {
  chatgpt: "/logos/chatgpt.svg",
  claude: "/logos/claude.svg",
  midjourney: "/logos/midjourney.svg",
  dalle: "/logos/chatgpt.svg",
  copilot: "/logos/claude.svg",
  "notion-ai": "/logos/chatgpt.svg",
  perplexity: "/logos/claude.svg",
  runway: "/logos/midjourney.svg",
  huggingface: "/logos/chatgpt.svg",
  "zapier-ai": "/logos/claude.svg",
};

export const getToolLogo = (id: string) => toolLogos[id] || "/logos/chatgpt.svg";