# Little Bunny 项目边界

此目录是独立的 Little Bunny V1.0 项目。以此目录作为工作目录和 Git 根目录；不要在父目录初始化仓库。

- Our Universe 与 Day Zero 是其他独立项目，不读取、修改、移动或提交其文件来完成本项目任务。
- 唯一发布仓库为 sangsangnoice/little-bunny；GitHub Pages 使用 main 分支根目录。不得改动其他仓库。
- 保留 localStorage 键 little-bunny-v1；维护存档兼容性，不清理或覆盖玩家存档。
- 项目无需构建或外部依赖。原始运行、部署说明见 README.md。
- 运行既有检查：node --test tests/state.test.mjs；python3 tests/static-check.py。
- 从本目录运行预览：python3 -m http.server 4175 --bind 127.0.0.1。
