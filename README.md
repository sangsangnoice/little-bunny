# Little Bunny · 电子小兔子 V1.0

一个可以慢慢陪伴的独立静态网页。原创 SVG 绘本房间、奶油白小兔子、真实可持续的状态和轻量成长。无需构建、账号、后端、CDN、字体下载或 npm 安装。使用 GitHub Pages 原生静态托管。

## 本地运行

在解压后的 `little-bunny` 文件夹中打开终端：

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

保持终端窗口运行，在电脑浏览器打开 `http://localhost:4175/`。停止服务按 Ctrl+C。若端口占用，换成 4176 并同步更改网址。不要双击 HTML 通过 file:// 打开：浏览器会限制 ES 模块加载。

开发时也可在父目录运行静态服务器，再访问 `/little-bunny/`。不同端口/域名的浏览器存档互相独立。

## 怎么玩

- 喂菜叶、摸头、玩球、休息；也可以直接点兔子或小床。
- 不同状态决定表情与反馈：肚子饿、想被陪伴、困倦、开心或睡眠。
- 喂食间隔 45 秒，摸头 15 秒，玩耍 35 秒；动作之间至少 1.6 秒。避免把陪伴变成不停点击。
- 饱食每小时缓慢下降 2 点；心情通常每小时下降 0.65 点；清醒精力每小时下降 1.2 点。玩耍消耗精力，休息每小时恢复 25 点，恢复满后醒来。可以随时叫醒。
- 离线最多计算 12 小时变化。亲密度不会因为离开减少，没有死亡或惩罚机制。
- 亲密度达到 8 / 20 / 38 / 60 / 85 解锁五件装饰。在“布置小屋”中显示或收起。
- 点击窗户和植物，留意高心情时的小动作；每天、首次完成三种照顾等小事会留下手记与陪伴星星。星星是收藏纪念，不是消耗货币。
- 设置中可以改名、选择自动/日间/夜间、关闭轻柔动画。系统减少动态效果的偏好优先。

## 存档

`localStorage` 键：`little-bunny-v1`。保存四项状态、睡眠、冷却、装饰及其隐藏状态、事件、手记、星星、访问时间与设置。每次操作立即保存，打开期间每 15 秒同步；切换后台和离开页面时也会保存。异常 JSON 回退到默认数据，存储失败会显示提示。多个标签页通过 storage 事件同步；仍建议只在一个标签页操作，避免同时写入竞争。

数据仅在当前浏览器设备中，不会同步到手机或云端。清除网站数据会删除进度。后续版本若调整数据结构，应在 restore 中增加迁移，不要更换存档键。

## 文件结构

```text
little-bunny/
├── index.html             页面、面板、对话框、可访问性标签
├── style.css              色彩、桌面/移动布局、兔子与环境动画
├── bunny.svg              原创兔子图标
├── .nojekyll               直接提供静态文件
├── src/
│   ├── state.mjs           默认状态、存档兼容、时间变化、互动、事件、解锁
│   ├── room.mjs            原创内联 SVG 房间与角色
│   └── app.mjs             DOM 渲染、交互、动画、设置与存储
├── tests/
│   ├── state.test.mjs      Node 内置测试，无第三方依赖
│   └── static-check.py     子目录资源、DOM ID、常见敏感信息检查
├── screenshots/            实际浏览器截图（不必发布）
├── TEST-REPORT.md
└── README.md
```

## GitHub Pages 发布

使用现有仓库 https://github.com/sangsangnoice/little-bunny ，与其他项目完全分开。完整项目直接位于仓库根目录，必须保留 `src/`。运行只需要以下 7 个文件：

```text
index.html
style.css
bunny.svg
.nojekyll
src/app.mjs
src/state.mjs
src/room.mjs
```

仓库 Settings → Pages → Deploy from a branch，选择 `main` 和 `/(root)` 并保存。正式网址：https://sangsangnoice.github.io/little-bunny/ 。页面采用相对路径，兼容 `https://<用户名>.github.io/little-bunny/`，也可以放在其他独立子目录。没有需要构建的产物，不要上传存档、临时文件或其他项目。若托管平台自行配置 MIME，`.mjs` 必须以 JavaScript MIME 类型提供（GitHub Pages 支持）。

发布后检查页面、CSS、图标及三个模块均返回成功，并实际完成一次互动、刷新、打开手记。线上验证结果以本次发布记录为准。

## 测试与扩展

```sh
node --test tests/state.test.mjs
python3 tests/static-check.py
```

需要现代 Node 执行测试；网站运行本身不需要 Node。状态规则集中在 state.mjs；装饰统一由 DECOR 表管理，新增时同时补上 room.mjs 的对应 SVG 组。主要状态算法不依赖 DOM，方便继续测试和扩展。V1.0 不含音频系统、复杂拖拽或服务端功能。
