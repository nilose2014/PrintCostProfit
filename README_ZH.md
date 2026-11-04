# Print Cost & Profit

**面向 3D 打印的成本计算、生产监控与业务管理完整工具。**

Print Cost & Profit 帮助创客和小型 3D 打印企业了解每次打印的真实成本、制定合理售价、监控兼容打印机、管理耗材库存并组织日常业务。

> **Windows 稳定版本：v1.4**  
> **Linux 软件包：v1.4**  
> 请通过 [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases) 查看已发布版本和可用下载。

## 下载、仓库与安装

| 平台 | 下载 | 安装 |
|---|---|---|
| **Windows** | [最新发布版本](https://github.com/nilose2014/PrintCostProfit/releases/latest)：下载 `.exe` 安装程序或可用的 Windows 软件包。 | 运行安装程序并按向导操作。 |
| **Linux** | [Linux 分支](https://github.com/nilose2014/PrintCostProfit/tree/linux) 或 [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest)：发布后下载 Linux v1.4 软件包。 | 解压软件包并运行启动脚本。 |

### 官方链接
- 主仓库：https://github.com/nilose2014/PrintCostProfit
- Linux 源码：https://github.com/nilose2014/PrintCostProfit/tree/linux
- 全部发布版本：https://github.com/nilose2014/PrintCostProfit/releases
- 最新版本：https://github.com/nilose2014/PrintCostProfit/releases/latest
- 问题反馈：https://github.com/nilose2014/PrintCostProfit/issues

Releases 页面是安装程序和软件包的官方来源。文件可能随版本变化，请勿使用旧的直链。

### Windows 安装
1. 打开 [Releases](https://github.com/nilose2014/PrintCostProfit/releases)。
2. 下载最新 `.exe` 安装程序或可用 ZIP。
3. 运行安装程序，或将完整 ZIP 解压到具有写入权限的目录。
4. 通过快捷方式或附带的启动脚本运行应用。
5. 如果浏览器没有自动打开，请访问 `http://127.0.0.1:8700/`。
6. 请将 HTML、JavaScript、CSS 和服务器文件保持在原有目录结构中。

本地服务器必须保持运行。更新后，先停止旧服务器，从更新后的目录启动服务器，并按 `Ctrl + F5` 强制刷新。替换文件前备份数据，不要删除数据目录。

### Linux 安装（Ubuntu、Debian 及衍生版本）
1. 从 [Linux 分支](https://github.com/nilose2014/PrintCostProfit/tree/linux) 或 [Releases](https://github.com/nilose2014/PrintCostProfit/releases) 下载软件包。
2. 解压完整软件包，并在项目根目录打开终端。
3. 执行：
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. 打开 `http://127.0.0.1:8700/`。

请在 Linux 终端执行命令；WSL 用户应使用 Ubuntu 终端，而不是 PowerShell。需要 Python 3 和 SQLite。保持目录结构不变。用户数据与程序文件分开保存。启动测试失败时不要忽略错误。

### 首次启动与打印机连接
打开网页前先启动本地服务器。电脑和打印机必须能通过局域网互相访问。使用打印机 LAN 地址和端口配置 Moonraker。打印机关闭时也可以保存连接设置，但实时监控需要打印机在线。Snapmaker Orca 集成依赖受支持的本地工作流程和软件包中的后处理脚本。

---

## 什么是 Print Cost & Profit？

它将 3D 打印的技术和商业流程整合在一起。除材料和打印时间外，还考虑电费、设备损耗、维护、人工、后处理、失败打印、库存和最终售价。

工作流程包括：从兼容 G-code 导入数据或手动输入；计算实际生产成本；设置目标利润和建议售价；检查材料与打印机；保存估价和业务文档；跟踪生产、库存、维护和财务活动。

## 主要功能

### 1. 打印成本计算器
计算项目包括耗材克数、材料每公斤价格、打印时长、电力消耗和电费、设备折旧、机器成本、维护、人工和准备时间、额外费用、每件喷涂和后处理费用，以及失败打印预留成本。显示目标利润、建议售价、单件成本、单件利润和利润率。明确区分**生产成本**、**销售价格**、**利润**和**利润率**。

#### G-code 与切片软件数据
Orca 集成可导入文件名、材料、颜色及 HEX 代码、预计耗材用量、打印时间和可用缩略图。计算前请检查数据和材料匹配，尤其是多材料或多颜色项目。

#### 价格比较与已保存估价
比较不同售价方案，查看利润目标变化或附加金额对最终价格的影响，并保存估价。

### 2. 仪表盘
集中查看销售、成本、利润、财务图表、库存、打印机状态、生产情况和最近活动。详细信息位于对应功能区域。

### 3. 打印机监控 — Snapmaker U1 / Moonraker
通过局域网和 Moonraker 连接兼容打印机。功能包括打印机发现和手动 IP 设置、保存连接、在线/离线状态、打印状态与进度、当前任务、文件名和可用耗材数据、文件列表、G-code 缩略图、多打印机选择，以及将当前打印任务发送到计算器。

电脑必须能够访问局域网中的打印机。防火墙、网络隔离、错误 IP 或 Moonraker 不可用可能导致监控失败。

### 4. 耗材库存
记录品牌、材料（PLA、PETG 等）、颜色名称和 HEX 值、初始重量与剩余重量、每公斤价格和库存数量。将 G-code 材料和颜色与已登记耗材卷匹配。不确定的匹配必须检查。库存警告取决于重量数据是否及时更新。

### 5. 打印机与设备配置
配置打印机和连接信息，在支持时进行网络发现，保存设备数据、查看状态，并将生产和财务信息关联到对应打印机。当前流程主要面向 Snapmaker U1；其他设备和固件可能需要兼容的 Moonraker 接口，且不一定经过验证。

### 6. 维护中心
组织清洁、轴润滑、皮带和导轨检查、热端、喷嘴、挤出机、耗材进料、风扇、冷却、打印平台、电缆和连接器检查。可记录维护操作及状态。始终遵循制造商手册和安全说明。

### 7. 报价、订单和发票
创建并保存报价、管理订单和发票、关联客户、查看文档详情与总额、生成 PDF，并在工作流程支持时将报价转换为发票。发送前检查编号、税费、货币、客户信息和 PDF。

### 8. 客户管理
保存客户资料并关联业务文档，减少重复输入，按客户组织报价、订单和发票。

### 9. 财务与会计
记录业务收支并查看收入、成本和利润；如已配置，也可按打印机查看。请与正式账目及税务义务核对。应用不提供会计或税务建议。

### 10. 产品目录
管理生产或销售的产品。在启用相关功能的版本中，产品展示和 QR 功能可将实体产品关联到目录信息。

### 11. 活动日志与诊断
本地日志用于排查服务器启动、打印机连接、API、导入、集成、备份和存储问题。报告问题时请提供版本、操作系统、复现步骤及已清除私人信息的日志。

### 12. 备份与恢复
受支持版本提供本地存储、备份和恢复功能。Linux 服务器通过 API 支持快照、修订控制、备份和日志；Windows 使用独立的本地服务器和存储流程。更新前备份，将副本保存在程序目录之外，应用运行时不要手动修改数据库。

### 13. 设置与界面
集中管理应用配置。根据版本可整理区域、隐藏字段和调整面板顺序。

### 14. 八种语言
界面文本集中在 `js/traducciones.js`：西班牙语、英语、法语、德语、意大利语、波兰语、支持 RTL 的阿拉伯语和简体中文。新增字段、对话框、按钮、警告和错误消息都必须集中管理并完成翻译。

---

## 软件截图

图片位于 `assets/screenshots/`。

### 仪表盘
![仪表盘](assets/screenshots/screenshot-02.jpg)

### 计算器与打印数据
![成本计算器](assets/screenshots/screenshot-03.jpg)
![打印数据](assets/screenshots/screenshot-01.jpg)

### 生产与业务管理
![业务管理](assets/screenshots/screenshot-05.jpg)
![成本与价格](assets/screenshots/screenshot-06.jpg)
![配置与业务文档](assets/screenshots/screenshot-07.jpg)

### 设置与更新
![应用配置](assets/screenshots/screenshot-08.jpg)
![应用选项](assets/screenshots/screenshot-09.jpg)
![版本与更新](assets/screenshots/screenshot-10.jpg)

### 客户、订单与发票
![客户管理](assets/screenshots/screenshot-12.jpg)
![客户与文档](assets/screenshots/screenshot-13.jpg)
![文档管理](assets/screenshots/screenshot-14.jpg)
![订单与报价](assets/screenshots/screenshot-15.jpg)
![发票](assets/screenshots/screenshot-16.jpg)
![销售](assets/screenshots/screenshot-17.jpg)

### 耗材与打印机
![耗材库存](assets/screenshots/screenshot-18.jpg)
![库存卡片](assets/screenshots/screenshot-19.jpg)
![打印机与材料](assets/screenshots/screenshot-20.jpg)

### 盈利与报告
![盈利能力](assets/screenshots/screenshot-21.jpg)
![财务摘要](assets/screenshots/screenshot-22.jpg)
![发票 PDF](assets/screenshots/screenshot-23.jpg)

### 维护
![维护中心](assets/screenshots/screenshot-24.jpg)
![维护任务](assets/screenshots/screenshot-25.jpg)

### 其他界面
![其他界面](assets/screenshots/screenshot-04.jpg)
![其他界面](assets/screenshots/screenshot-11.jpg)
![其他界面](assets/screenshots/screenshot-26.jpg)

---

## 典型工作流程
1. 在切片软件中准备任务并生成 G-code。
2. 通过 Orca 导入数据或手动输入。
3. 检查材料和颜色并关联库存。
4. 检查打印机和可用耗材。
5. 计算材料、时间、电力、设备、人工和后处理成本。
6. 设置售价并检查利润率。
7. 保存报价并关联客户。
8. 监控打印。
9. 记录销售或发票并检查财务活动。
10. 更新库存和维护记录。

## 系统要求
**Windows：**兼容的 64 位 Windows、运行应用和写入数据的权限、访问打印机局域网的能力，以及访问 GitHub 的互联网连接。

**Linux：**Ubuntu、Debian 或兼容衍生版本、Python 3、SQLite、启动脚本执行权限和局域网访问。

**打印机集成：**兼容的连接方式、可访问的本地 Moonraker API、正确 IP，以及按平台软件包配置的 Orca 集成。

## 版本与更新
本文所述 Windows 稳定版和 Linux 软件包为 **v1.4**。更新前备份数据，下载正确的软件包，停止服务器，更新文件，从新目录启动服务器并确认版本。不要在同一端口运行两个服务器。默认地址：`127.0.0.1:8700`。

## 故障排除
- **应用无法打开：**检查服务器和终端/PowerShell，打开 `http://127.0.0.1:8700/`，检查 8700 端口。
- **版本错误：**停止旧服务器，从正确目录启动，检查 `http://127.0.0.1:8700/api/version` 和 `VERSION`，再按 `Ctrl + F5` 刷新。
- **打印机离线：**检查电源、网络、IP、Moonraker 和防火墙；尝试手动 IP。
- **缺少 G-code 数据或缩略图：**检查 G-code 和切片软件导出内容，确认材料、颜色、重量和时间。
- **Linux 测试失败：**从项目根目录运行脚本，检查 Python 3 和 SQLite，并保留完整错误信息。

## 项目结构
- `Print_Cost_Profit.html` — 应用界面。
- `js/` — 模块、集成和集中式翻译。
- `css/` — 样式。
- `VERSION` — 服务器读取的版本。
- `Servidor_Panel_U1.ps1` — Windows 服务器。
- `linux/` — Linux 服务器、启动脚本和测试。
- 本地数据 — 数据库、日志和备份按平台配置与程序文件分开保存。

Windows 和 Linux 软件包的具体内容可能不同。

## 支持与贡献
- 问题反馈：https://github.com/nilose2014/PrintCostProfit/issues
- 源代码：https://github.com/nilose2014/PrintCostProfit
- Linux 源码：https://github.com/nilose2014/PrintCostProfit/tree/linux
- 发布版本：https://github.com/nilose2014/PrintCostProfit/releases

报告问题时请提供版本、操作系统、软件包、打印机及连接方式、复现步骤、已清理敏感信息的日志和截图。不要公开密码、令牌、私人凭据、客户数据或私人数据库。

## 重要信息
Print Cost & Profit 是 3D 打印成本计算和业务管理辅助工具。结果取决于输入数据、切片元数据、打印机配置、电价、材料价格和业务设置。请检查计算、库存、报价和发票。监控依赖兼容的本地服务及固件/API；不同平台和版本的功能可能不同。

**Print Cost & Profit — 了解成本、合理定价并管理 3D 打印工作流程。**
