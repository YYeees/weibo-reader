# 微博存档浏览器 — 项目上下文

## 项目简介
「钢琴 + 企鹅」主题的微博个人存档浏览器，两个页面：
- `indexPenguin.html` — 钢琴键年份选择首页（蜜蜂黄背景，企鹅吉祥物）
- `detailByPenguin.html` — 按月阅读微博存档

设计稿来源：claude.ai/design 项目 `755d5160-041a-4d6d-a8c6-61c774fadd8a`（`.dc.html` 高保真原型）

## 技术栈
纯静态 HTML + 原生 JS，无框架无构建工具。样式全部内联。
- 字体：Caveat / Noto Serif SC / Cormorant Garamond（Google Fonts）
- 颜色系：daisyUI 5 bumblebee 主题，主色 `oklch(85% 0.199 91.936)`（蜜蜂黄）
- 音频：Web Audio API 实时合成（triangle + sine 叠加）
- 雪花：Canvas 2D，六角雪花 + 圆形气泡 2:3 混合

## 数据
- `data/weibo-2019.json` — 有真实内容
- `data/weibo-2020.json` — 存在但内容待补
- 2021–2023 数据尚未整理，detail 页会显示「这一年的微博还在整理中」

## 当前状态
两个页面已基本完成，像素级还原设计稿。

### 已完成
- 钢琴键布局（14 白键 + 10 黑键），响应式（横屏/竖屏自适应，竖屏旋转 -90deg）
- 长按年份键 600ms 进入 detail 页（fade 过渡）
- 企鹅跳跃动画（音高映射跳跃高度）
- 雪花粒子系统（按键节奏影响雪花密度）
- detail 页：左侧竖向月份钢琴键（桌面）+ 横向滑动月份条（手机）
- 图片灯箱、上下月翻页、章节切换动画
- 返回按钮用 `←`，hover 有 scale + 背景色效果

### 待修复（重要）
**iOS 手机端钢琴无声音 bug**（已分析，等待实施修复）

根本原因是两个叠加的 bug：
1. `ac.resume()` 异步但未 await，`o.start(ac.currentTime)` 时 ac 仍 suspended，`currentTime=0`，音符调度到「过去」被静默跳过
2. iOS WebKit 还需要在手势回调里实际播放一个 1-sample 无声 AudioBufferSourceNode 才能真正解锁音频输出，光 `resume()` 不够

**修复方案**（下次会话实施）：
```js
// ensureAudio() 里，第一次创建 ac 时，立刻播一个无声 buffer 解锁 iOS
const buf = ac.createBuffer(1, 1, ac.sampleRate);
const src = ac.createBufferSource();
src.buffer = buf;
src.connect(ac.destination);
src.start(0);  // iOS WebKit 解锁关键
// 然后让 playNote 等 resume() Promise resolve 后再调度音符
```

F12 模拟有声音是因为桌面 Chrome 的 AudioContext 默认 running，不受移动端限制。

## 本地预览
```bash
cd /Users/taoye/weibo-crawler/weibo_data/weibo-uxupdate/weibo-reader
python3 -m http.server 8080
```
手机同 Wi-Fi 访问：`http://192.168.1.13:8080/indexPenguin.html`

## 注意事项
- 颜色值用 oklch，不要换算成 hex/rgb
- 所有样式内联，没有外部 CSS 文件
- 图片路径：weibo 图片在 `1757165701/img/` 和 `assets/weibo/img/` 两处都有（内容相同）
- 企鹅图片：`penguin2-cut.png`（首页站键盘上）、`penguin-ice.png`（detail 页装饰）
