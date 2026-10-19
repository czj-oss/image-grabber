# 图提取 ImageGrab

这是一个用于课程考核的 Chrome Manifest V3 扩展和静态官网项目。

## 插件加载

1. 打开 Chrome，访问 `chrome://extensions`。
2. 打开右上角“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本项目根目录，也就是包含 `manifest.json` 的目录。

插件支持淘宝、天猫、京东、拼多多相关页面。打开商品详情页后，点击右下角“获取图片”。

## 官网本地预览

在项目根目录运行：

```powershell
python -m http.server 5500 --directory docs
```

然后打开 `http://127.0.0.1:5500/`。

## GitHub Pages

在 GitHub 仓库设置中选择 `Settings -> Pages -> Deploy from a branch`，分支选择 `main`，目录选择 `/docs`。
