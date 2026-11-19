# Print Cost & Profit
## 3D 打印成本计算、库存与打印机管理软件

**Windows 桌面版：2.0 | Linux：1.4**  
开发者：Beatriz Toro Martin

官方仓库：https://github.com/nilose2014/PrintCostProfit  
所有发行版本：https://github.com/nilose2014/PrintCostProfit/releases

## 1. 下载

请始终从 GitHub 官方发行页面下载。

### Windows 10 / 11 — 版本 2.0

**安装程序 ZIP：** `PrintCostProfit-Setup-v2.0.zip`  
[Windows 2.0 发行页面](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. 下载 ZIP 并选择**全部解压缩**。
2. 打开解压后的文件夹。
3. 运行 `PrintCostProfit-Setup.exe`，按照安装向导操作。

**便携版 ZIP：** `PrintCostProfit-Portable-v2.0.zip`  
[Windows 2.0 发行页面](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. 下载 ZIP 并将其解压到固定文件夹。
2. 在解压后的文件夹中运行 `PrintCostProfit-Portable.exe`。

请勿直接从 ZIP 内运行可执行文件。请将解压后的应用文件保存在一起。

### Linux — 版本 1.4

[Linux 1.4 发行页面](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu：** `printcostprofit_1.4.1_amd64.deb`  
[下载 .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

也可以双击 `.deb` 文件，使用系统软件包安装程序。

**AppImage：** `PrintCostProfit-Linux-x86_64.AppImage`  
[下载 AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Linux 软件包面向 64 位 AMD64 系统。**Windows 版本为 2.0，已发布的 Linux 版本为 1.4，两者属于独立的发行版本线。**

## 2. Windows 安全提示

目前 Windows 可执行文件尚未使用商业代码签名证书签名。SmartScreen 或其他安全软件可能显示警告。请确认下载来自官方仓库。如果杀毒软件检测到真实威胁，或无法验证文件来源，请勿忽略警告。

## 3. 主要功能

- **3D 打印成本计算器：** 根据耗材用量、材料价格、打印时间、设备运行成本、折旧、维护和其他已配置费用估算制造成本。
- **售价与盈利能力：** 查看预计生产成本、销售价格、利润、利润率和建议售价。结果取决于输入的数据。
- **耗材库存：** 管理品牌、材料、颜色、线轴数量和材料价格。
- **打印机配置文件：** 保存成本计算所需的设备参数。
- **打印机监控：** Snapmaker U1 已确认完全兼容。其他基于 Moonraker、Fluidd 或 Mainsail 的打印机可能根据配置和支持功能运行。
- **切片软件集成：** 面向 Snapmaker Orca、OrcaSlicer 和 Creality Print。兼容性约为 90%，可能因版本和配置而异，不保证达到 100%。
- **G-code 处理：** 读取可用文件信息、预计打印时间、预计材料消耗和耗材元数据。切片软件估算不一定等于打印机实际消耗。
- **报价、发票和财务管理：** 用于整理商业单据和财务活动。
- **本地 SQLite：** Windows 2.0 使用 SQLite 和 Electron IPC 在本地保存数据。

## 4. Windows 架构 — 版本 2.0

Windows 2.0 从 Electron 本地文件加载界面，不再使用旧版 PowerShell HTTP 桥接架构。界面通过 IPC 与 SQLite 通信。兼容打印机通过网络使用 Moonraker 访问。Orca G-code 流程使用由 Electron 管理的本地文件监控机制。旧版 HTTP 服务器或 PowerShell 桥接说明不适用于 Windows 2.0。

## 5. 切片软件集成

该集成面向基于 OrcaSlicer 的应用，尤其是 Snapmaker Orca、OrcaSlicer 和 Creality Print。菜单名称可能因应用和版本而异。

1. 打开切片软件并选择打印机配置文件。
2. 打开打印设置，必要时启用高级或专家模式。
3. 找到**其他**部分和后处理脚本设置。
4. 按照相应软件包附带的集成说明操作。
5. 保存配置文件，生成测试 G-code，并检查 Print Cost & Profit 是否收到可用信息。

Windows 2.0 使用 Electron 管理的本地文件监控。请勿使用要求启动旧版 PowerShell HTTP 桥接程序的说明。

## 6. 打印机网络配置

对于兼容的 Moonraker 打印机，请确保电脑和打印机可以通过网络通信，获取打印机 IP 地址，确认 Moonraker 可访问，并在应用中配置连接。可用功能取决于打印机、固件和网络配置。Snapmaker U1 是已确认完全兼容的参考型号。

## 7. 数据与备份

Windows 桌面版使用本地 SQLite 数据库。请定期备份，尤其是在更新之前。应用运行时请勿手动删除或移动数据库。如果存储初始化失败，请保留数据库并调查错误，不要继续输入重要数据。

## 8. 系统要求

- **Windows：** Windows 10 或 11、64 位系统，并有足够磁盘空间。打印机监控需要网络访问。面向用户的软件包不要求手动安装 Node.js 或 Python。
- **Linux：** 64 位 AMD64。在兼容的 Debian/Ubuntu 系统上使用 Debian 软件包，或使用提供的 AppImage。
- 可选集成：Snapmaker Orca、OrcaSlicer、Creality Print 和连接网络的兼容打印机。

## 9. 更新

1. 打开官方发行页面。
2. 阅读发行说明并确认操作系统和版本。
3. 下载相应软件包。
4. 备份重要数据。
5. 按照说明安装或解压新软件包。

更新时请勿删除现有应用数据。Windows 和 Linux 使用独立发行版本线；更新前请确认版本号。

## 10. 故障排除

- **Windows 无法启动：** 确认 ZIP 已完整解压，所有应用文件保存在一起。记录错误信息。
- **安全警告：** 验证下载来源并检查杀毒软件结果。Windows 构建目前未使用商业证书签名。
- **打印机监控失败：** 检查电源、网络、IP 地址、Moonraker 访问和打印机设置。
- **切片软件集成失败：** 检查软件版本、后处理配置、G-code 输出和本地文件接收。
- **数据未保存：** 保留数据库，检查 SQLite 初始化并记录错误。不要通过删除数据来临时修复。
- **Linux AppImage 无法启动：** 执行 `chmod +x`，从终端启动并检查错误。对于 `.deb`，检查安装和依赖提示。

## 11. 源代码与开发

源代码：https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

生成 Windows 版本：

```bash
npm run dist:win
```

这些命令供开发人员使用。普通用户应从 GitHub Releases 下载已准备好的软件包。

## 12. 许可、版权与支持

Print Cost & Profit 按照仓库中 `LICENSE.txt` 的条件发布。重新分发或修改软件前，请阅读适用许可证。

报告问题时，请提供应用版本、操作系统、相关打印机和切片软件型号及版本、问题描述、完整错误信息和复现步骤。请勿提供密码、私钥或不必要的个人信息。

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
由 Beatriz Toro Martin 开发。
