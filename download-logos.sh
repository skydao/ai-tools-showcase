#!/bin/bash
# Download logos
cd /Users/d.t/workspace/ai-tools-showcase/public/logos

# 使用可靠的图片源
echo "下载 ChatGPT logo..."
curl -s -L -o chatgpt.png "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"

echo "下载 GitHub Copilot logo..."
curl -s -L -o copilot.png "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"

echo "下载 Hugging Face logo..."
curl -s -L -o huggingface.png "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"

echo "下载 Notion logo..."
curl -s -L -o notion.png "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"

echo "下载 Perplexity logo..."
curl -s -L -o perplexity.png "https://upload.wikimedia.org/wikipedia/commons/2/2b/Perplexity_Logo.png"

echo "下载 Zapier logo..."
curl -s -L -o zapier.png "https://upload.wikimedia.org/wikipedia/commons/c/c3/Zapier_Logo.png"

echo "下载 DALL-E logo..."
curl -s -L -o dalle.png "https://upload.wikimedia.org/wikipedia/commons/1/1e/DALL-E_Logo.svg"

echo "下载 Runway logo..."
curl -s -L -o runway.png "https://upload.wikimedia.org/wikipedia/commons/6/68/Runway_logo.png"

echo "下载 Midjourney logo..."
curl -s -L -o midjourney.png "https://upload.wikimedia.org/wikipedia/commons/3/3f/Midjourney_Logo.png"

echo "下载 Claude logo..."
curl -s -L -o claude.png "https://cdn.brandfetch.io/id8J7sK6Vx/w/512/h/512/icon.webp" || \ncurl -s -L -o claude.png "https://upload.wikimedia.org/wikipedia/commons/a/a6/Claude_anthropic_logo.svg"

echo "Logo 下载完成！"