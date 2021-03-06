# Japanese and Chinese word-segmentation tests

Run via `node index`

## Results (starting from fastest)

| /                  | nodejieba | @node-rs/jieba | segment | novel-segment | hanzi-tool |
| ------------------ | --------- | -------------- | ------- | ------------- | ---------- |
| size (MB)          | 33.7      | 0.009          | 3.5     | 0.73          | 4.8        |
| perf (ms) / 1 page | 1         | 132            | 300     | 500           | 615        |

## Example text

> 七国集团（G7）首脑峰会召开前夕，美国总统拜登与英国首相约翰逊在周四（6 月 10 日）会晤。两国在会后联合声明中强调，支持对“包括中国在内”的新冠病毒起源展开独立调查。
>
> 约翰逊与拜登在英国康沃尔（Cornwall）会面，这是两人首度举行面对面的 会议。
>
> 会后两国政府发表联合声明，表明英美支持下一阶段由世界卫生组织召集的新 冠病毒起源研究，当中将有“及时、透明、讲求证据的独立流程，包括在中 国，以及在未来调查起源不明的疫情。”
>
> 联合声明全文只有此处提及中国，但多处暗示英美将联合其他民主国家抗衡中 国。
>
> 声明的第一部分聚焦民主、人权与多边主义，强调两国“支持开放社会及全球 各地的民主”。
>
> 同日，欧盟也作出类似支持病毒起源调查的表态。
>
> 欧盟执委会主席冯德莱恩（Ursula von der Leyen）在新闻发布会上说，有 必要了解新冠疫情的起源。“调查人员需要有充分的权限，能够进入任何必要 的地方，以便真正找到这次疫情的起源。”
>
> 欧盟与英美领袖分别在 G7 峰会前夕作上述表态，可见中国与疫情起源调查将 是议程中的重要部分。G7 峰会将在本周五在英国康沃尔召开，这是国际政治 领袖在疫情暴发后首次聚首。
>
> 此行亦是拜登上台以来的首次外访，外界普遍解读他在峰会上希望传达一个主 要信息：“美国回到国际舞台了”。
>
> 风口浪尖上的疫情起源调查
> "武汉实验室泄露"的病毒起源论近日再掀波澜，拜登下令美国情报机构彻查 新冠病毒起源，并在 90 天内提交报告。但在调查这一猜测方面，美国并未得 到盟友的明确支持。
>
> 新冠病毒溯源再起波澜：白宫为福奇辩护 福奇称中国研究人员“值得信赖”
> 美国总统拜登下令情报部门加快彻查新冠病毒源头
>
> 视频加注文字，
> 2 月 3 日，WHO 新冠溯源团队访问武汉病毒研究所。
>
> 在 G7 峰会召开前夕，BBC 北美总编乔·索普尔（Jon Sopel）采访了白宫国家 安全顾问沙利文（Jake Sullivan），问及美国是否在“实验室起源”调查中 缺乏支持。
>
> “我不认为我们是独自行动，”沙利文称，欧盟、英国、澳大利亚都表态支持 “可靠、独立的国际调查”，在病毒起源问题上“追根究底”。
>
> 沙利文同时否认美国在“疫苗外交”上落后俄罗斯与中国，他表示在全球疫情 结束时，世界会见证“美国与西方民主国家将是终结疫情的主要力量”，而且 美国向全球提供高质量疫苗，并非出于获得地缘政治的好处。
>
> “我们会以行动证明，今时今日美国能够采取有效行动来解决影响全球的问 题，”沙利文对 BBC 表示。
>
> 中国外交部发言人汪文斌则在 6 月 10 日较早前的记者会上称，武汉实验室泄漏 病毒纯属谣言。他还将美国政客与媒体“炒作实验室泄露起源论”与美国发动 伊拉克战争前宣称“伊拉克拥有大规模杀伤性武器”的往绩相提并论。
>
> “将溯源政治化服务的是美一己私利，” 汪文斌称。

## Ranking from fastest to slowest (not taking into account the precision and accuracy of segmentation)

---

### nodejieba

[npm package](https://www.npmjs.com/package/nodejieba)

**Segmentation result** Took 3.4987 milliseconds:

七国集团 ▌（▌G▌7▌）▌ 首脑 ▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌ 美国 ▌ 总统 ▌ 拜登 ▌ 与 ▌ 英国首相 ▌ 约翰逊 ▌ 在 ▌ 周四 ▌（▌6▌ 月 ▌1▌0▌ 日 ▌）▌ 会晤 ▌。▌ 两 ▌ 国 ▌ 在 ▌ 会后 ▌ 联合声明 ▌ 中 ▌ 强调 ▌，▌ 支持 ▌ 对 ▌“▌ 包括 ▌ 中国 ▌ 在内 ▌”▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 展开 ▌ 独立 ▌ 调查 ▌。▌  
▌
▌ 约翰逊 ▌ 与 ▌ 拜登 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌（▌C▌o▌r▌n▌w▌a▌l▌l▌）▌ 会面 ▌，▌ 这 ▌ 是 ▌ 两 ▌ 人 ▌ 首度 ▌ 举行 ▌ 面对面 ▌ 的 ▌ 会议 ▌。▌
▌
▌ 会后 ▌ 两国政府 ▌ 发表 ▌ 联合声明 ▌，▌ 表明 ▌ 英美 ▌ 支持 ▌ 下一阶段 ▌ 由 ▌ 世界卫生组织 ▌ 召集 ▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 研究 ▌，▌ 当中 ▌ 将 ▌ 有 ▌“▌ 及时 ▌、▌ 透明 ▌、▌ 讲求 ▌ 证据 ▌ 的 ▌ 独立 ▌ 流程 ▌，▌ 包括 ▌ 在 ▌ 中国 ▌，▌ 以及 ▌ 在 ▌ 未来 ▌ 调查 ▌ 起源 ▌ 不明 ▌ 的 ▌ 疫情 ▌。▌”▌  
▌
▌ 联合声明 ▌ 全文 ▌ 只有 ▌ 此处 ▌ 提及 ▌ 中国 ▌，▌ 但 ▌ 多处 ▌ 暗示 ▌ 英美 ▌ 将 ▌ 联合 ▌ 其他 ▌ 民主 ▌ 国家 ▌ 抗衡 ▌ 中国 ▌。▌
▌
▌ 声明 ▌ 的 ▌ 第一 ▌ 部分 ▌ 聚焦 ▌ 民主 ▌、▌ 人权 ▌ 与 ▌ 多边 ▌ 主义 ▌，▌ 强调 ▌ 两 ▌ 国 ▌“▌ 支持 ▌ 开放 ▌ 社会 ▌ 及 ▌ 全球 ▌ 各地 ▌ 的 ▌ 民主 ▌”▌。▌
▌
▌ 同日 ▌，▌ 欧盟 ▌ 也 ▌ 作出 ▌ 类似 ▌ 支持 ▌ 病毒 ▌ 起源 ▌ 调查 ▌ 的 ▌ 表态 ▌。▌
▌
▌ 欧盟 ▌ 执委会 ▌ 主席 ▌ 冯 ▌ 德 ▌ 莱恩 ▌（▌U▌r▌s▌u▌l▌a▌ ▌v▌o▌n▌ ▌d▌e▌r▌ ▌L▌e▌y▌e▌n▌）▌ 在 ▌ 新闻 ▌ 发布会 ▌ 上 ▌ 说 ▌，▌ 有 ▌ 必要 ▌ 了解 ▌ 新 ▌ 冠 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌“▌ 调查 ▌ 人员 ▌ 需要 ▌ 有 ▌ 充分 ▌ 的 ▌ 权限 ▌，▌ 能够 ▌ 进入 ▌ 任何 ▌ 必要 ▌ 的 ▌ 地方 ▌，▌ 以便 ▌ 真正 ▌ 找到 ▌ 这次 ▌ 疫
情 ▌ 的 ▌ 起源 ▌。▌”▌
▌
▌ 欧盟 ▌ 与 ▌ 英美 ▌ 领袖 ▌ 分别 ▌ 在 ▌G▌7▌ 峰会 ▌ 前夕 ▌ 作 ▌ 上述 ▌ 表态 ▌，▌ 可见 ▌ 中国 ▌ 与 ▌ 疫情 ▌ 起源 ▌ 调查 ▌ 将 ▌ 是 ▌ 议程 ▌ 中 ▌ 的 ▌ 重要 ▌ 部分 ▌。▌G▌7▌ 峰会 ▌ 将 ▌ 在 ▌ 本 ▌ 周五 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌ 召开 ▌，▌ 这 ▌ 是 ▌ 国际 ▌ 政治 ▌ 领袖 ▌ 在 ▌ 疫情 ▌ 暴发 ▌ 后 ▌ 首次 ▌ 聚首 ▌。▌
▌
▌ 此行 ▌ 亦 ▌ 是 ▌ 拜 ▌ 登上 ▌ 台 ▌ 以来 ▌ 的 ▌ 首次 ▌ 外访 ▌，▌ 外界 ▌ 普遍 ▌ 解读 ▌ 他 ▌ 在 ▌ 峰会 ▌ 上 ▌ 希望 ▌ 传达 ▌ 一个 ▌ 主要 ▌ 信息 ▌：▌“▌ 美国 ▌ 回到 ▌ 国际舞台 ▌ 了 ▌”▌。▌
▌
▌ 风口浪尖 ▌ 上 ▌ 的 ▌ 疫情 ▌ 起源 ▌ 调查 ▌
▌"▌ 武汉 ▌ 实验室 ▌ 泄露 ▌"▌ 的 ▌ 病毒 ▌ 起源 ▌ 论 ▌ 近日 ▌ 再 ▌ 掀 ▌ 波澜 ▌，▌ 拜登 ▌ 下令 ▌ 美国 ▌ 情报机构 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌，▌ 并 ▌ 在 ▌9▌0▌ 天 ▌ 内 ▌ 提交 ▌ 报告 ▌。▌ 但 ▌ 在 ▌ 调查 ▌ 这 ▌ 一 ▌ 猜测 ▌ 方面 ▌，▌ 美国 ▌ 并未 ▌ 得到 ▌ 盟友 ▌ 的 ▌ 明确 ▌ 支持 ▌。▌
▌
▌ 新 ▌ 冠 ▌ 病毒 ▌ 溯源 ▌ 再起波澜 ▌：▌ 白宫 ▌ 为 ▌ 福 ▌ 奇 ▌ 辩护 ▌ ▌ 福 ▌ 奇 ▌ 称 ▌ 中国 ▌ 研究 ▌ 人员 ▌“▌ 值得 ▌ 信赖 ▌”▌
▌ 美国 ▌ 总统 ▌ 拜登 ▌ 下令 ▌ 情报部门 ▌ 加快 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 源头 ▌
▌
▌ 视频 ▌ 加注 ▌ 文字 ▌，▌
▌2▌ 月 ▌3▌ 日 ▌，▌W▌H▌O▌ 新 ▌ 冠 ▌ 溯源 ▌ 团队 ▌ 访问 ▌ 武汉 ▌ 病毒 ▌ 研究所 ▌。▌
▌
▌ 在 ▌G▌7▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌B▌B▌C▌ 北美 ▌ 总编 ▌ 乔 ▌·▌ 索 ▌ 普尔 ▌（▌J▌o▌n▌ ▌S▌o▌p▌e▌l▌）▌ 采访 ▌ 了 ▌ 白宫 ▌ 国家 ▌ 安全 ▌ 顾问 ▌ 沙利文 ▌（▌J▌a▌k▌e▌ ▌S▌u▌l▌l▌i▌v▌a▌n▌）▌，▌ 问及 ▌ 美国 ▌ 是否 ▌ 在 ▌“▌ 实验室 ▌ 起源 ▌”▌ 调查 ▌ 中 ▌ 缺乏 ▌ 支持 ▌。▌
▌
▌“▌ 我 ▌ 不 ▌ 认为 ▌ 我们 ▌ 是 ▌ 独自 ▌ 行动 ▌，▌”▌ 沙利文 ▌ 称 ▌，▌ 欧盟 ▌、▌ 英国 ▌、▌ 澳大利亚 ▌ 都 ▌ 表态 ▌ 支持 ▌“▌ 可靠 ▌、▌ 独立 ▌ 的 ▌ 国际 ▌ 调查 ▌”▌，▌ 在 ▌ 病毒 ▌ 起源 ▌ 问题 ▌ 上 ▌“▌ 追根究底 ▌”▌。▌
▌
▌ 沙利文 ▌ 同时 ▌ 否认 ▌ 美国 ▌ 在 ▌“▌ 疫苗 ▌ 外交 ▌”▌ 上 ▌ 落后 ▌ 俄罗斯 ▌ 与 ▌ 中国 ▌，▌ 他 ▌ 表示 ▌ 在 ▌ 全球 ▌ 疫情 ▌ 结束 ▌ 时 ▌，▌ 世界 ▌ 会 ▌ 见证 ▌“▌ 美国 ▌ 与 ▌ 西方 ▌ 民主 ▌ 国家 ▌ 将 ▌ 是 ▌ 终结 ▌ 疫情 ▌ 的 ▌ 主要 ▌ 力量 ▌”▌，▌ 而且 ▌ 美国 ▌ 向 ▌ 全球 ▌ 提供 ▌ 高质量 ▌ 疫苗 ▌，▌ 并非 ▌ 出于 ▌ 获得 ▌ 地缘 ▌ 政治 ▌ 的 ▌ 好处 ▌。▌
▌
▌“▌ 我们 ▌ 会 ▌ 以 ▌ 行动 ▌ 证明 ▌，▌ 今 ▌ 时 ▌ 今日 ▌ 美国 ▌ 能够 ▌ 采取有效 ▌ 行动 ▌ 来 ▌ 解决 ▌ 影响 ▌ 全球 ▌ 的 ▌ 问题 ▌，▌”▌ 沙利文 ▌ 对 ▌B▌B▌C▌ 表示 ▌。▌
▌
▌ 中国外交部 ▌ 发言人 ▌ 汪文斌 ▌ 则 ▌ 在 ▌6▌ 月 ▌1▌0▌ 日 ▌ 较 ▌ 早前 ▌ 的 ▌ 记者会 ▌ 上 ▌ 称 ▌，▌ 武汉 ▌ 实验室 ▌ 泄漏 ▌ 病毒 ▌ 纯属 ▌ 谣言 ▌。▌ 他 ▌ 还 ▌ 将 ▌ 美国 ▌ 政客 ▌ 与 ▌ 媒体 ▌“▌ 炒作 ▌ 实验室 ▌ 泄露 ▌ 起源 ▌ 论 ▌”▌ 与 ▌ 美国 ▌ 发动 ▌ 伊拉克 ▌ 战争 ▌ 前 ▌ 宣称 ▌“▌ 伊拉克 ▌ 拥有 ▌ 大规模 ▌ 杀伤性 ▌ 武器 ▌”▌ 的 ▌ 往 ▌ 绩 ▌ 相提并论 ▌。▌
▌
▌“▌ 将 ▌ 溯源 ▌ 政治化 ▌ 服务 ▌ 的 ▌ 是 ▌ 美 ▌ 一 ▌ 己 ▌ 私利 ▌，▌”▌ ▌ 汪文斌 ▌ 称 ▌。

---

### @node-rs/jieba

[npm package](https://www.npmjs.com/package/@node-rs/jieba)

**Segmentation result** Took 154.0306 milliseconds:

七国集团 ▌（▌G7▌）▌ 首脑 ▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌ 美国 ▌ 总统 ▌ 拜登 ▌ 与 ▌ 英国首相 ▌ 约翰逊 ▌ 在 ▌ 周四 ▌（▌6▌ 月 ▌10▌ 日 ▌）▌ 会晤 ▌。▌ 两 ▌ 国 ▌ 在 ▌ 会后 ▌ 联合声明 ▌ 中 ▌ 强调 ▌，▌ 支持 ▌ 对 ▌“▌ 包括 ▌ 中国 ▌ 在内 ▌”▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 展开 ▌ 独立 ▌ 调查 ▌。▌
▌
▌ 约翰逊 ▌ 与 ▌ 拜登 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌（▌Cornwall▌）▌ 会面 ▌，▌ 这 ▌ 是 ▌ 两 ▌ 人 ▌ 首度 ▌ 举行 ▌ 面对面 ▌ 的 ▌ 会议 ▌。▌
▌
▌ 会后 ▌ 两国政府 ▌ 发表 ▌ 联合声明 ▌，▌ 表明 ▌ 英美 ▌ 支持 ▌ 下一阶段 ▌ 由 ▌ 世界卫生组织 ▌ 召集 ▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 研究 ▌，▌ 当中 ▌ 将 ▌ 有 ▌“▌ 及时 ▌、▌ 透明 ▌、▌ 讲求 ▌ 证据 ▌ 的 ▌ 独立 ▌ 流程 ▌，▌ 包括 ▌ 在 ▌ 中国 ▌，▌ 以及 ▌ 在 ▌ 未来 ▌ 调查 ▌ 起源 ▌ 不明 ▌ 的 ▌ 疫情 ▌。▌”▌  
▌
▌ 联合声明 ▌ 全文 ▌ 只有 ▌ 此处 ▌ 提及 ▌ 中国 ▌，▌ 但 ▌ 多处 ▌ 暗示 ▌ 英美 ▌ 将 ▌ 联合 ▌ 其他 ▌ 民主 ▌ 国家 ▌ 抗衡 ▌ 中国 ▌。▌
▌
▌ 声明 ▌ 的 ▌ 第一 ▌ 部分 ▌ 聚焦 ▌ 民主 ▌、▌ 人权 ▌ 与 ▌ 多边 ▌ 主义 ▌，▌ 强调 ▌ 两 ▌ 国 ▌“▌ 支持 ▌ 开放 ▌ 社会 ▌ 及 ▌ 全球 ▌ 各地 ▌ 的 ▌ 民主 ▌”▌。▌
▌
▌ 同日 ▌，▌ 欧盟 ▌ 也 ▌ 作出 ▌ 类似 ▌ 支持 ▌ 病毒 ▌ 起源 ▌ 调查 ▌ 的 ▌ 表态 ▌。▌
▌
▌ 欧盟 ▌ 执委会 ▌ 主席 ▌ 冯 ▌ 德 ▌ 莱恩 ▌（▌Ursula▌ ▌von▌ ▌der▌ ▌Leyen▌）▌ 在 ▌ 新闻 ▌ 发布会 ▌ 上 ▌ 说 ▌，▌ 有 ▌ 必要 ▌ 了解 ▌ 新 ▌ 冠 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌“▌ 调查 ▌ 人员 ▌ 需要 ▌ 有 ▌ 充分 ▌ 的 ▌ 权限 ▌，▌ 能够 ▌ 进入 ▌ 任何 ▌ 必要 ▌ 的 ▌ 地方 ▌，▌ 以便 ▌ 真正 ▌ 找到 ▌ 这次 ▌ 疫情 ▌ 的 ▌ 起源 ▌。
▌”▌
▌
▌ 欧盟 ▌ 与 ▌ 英美 ▌ 领袖 ▌ 分别 ▌ 在 ▌G7▌ 峰会 ▌ 前夕 ▌ 作 ▌ 上述 ▌ 表态 ▌，▌ 可见 ▌ 中国 ▌ 与 ▌ 疫情 ▌ 起源 ▌ 调查 ▌ 将 ▌ 是 ▌ 议程 ▌ 中 ▌ 的 ▌ 重要 ▌ 部分 ▌。▌G7▌ 峰会 ▌ 将 ▌ 在 ▌ 本 ▌ 周五 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌ 召开 ▌，▌ 这 ▌ 是 ▌ 国际 ▌ 政治 ▌ 领袖 ▌ 在 ▌ 疫情 ▌ 暴发 ▌ 后 ▌ 首次 ▌ 聚首 ▌。▌
▌
▌ 此行 ▌ 亦 ▌ 是 ▌ 拜 ▌ 登上 ▌ 台 ▌ 以来 ▌ 的 ▌ 首次 ▌ 外访 ▌，▌ 外界 ▌ 普遍 ▌ 解读 ▌ 他 ▌ 在 ▌ 峰会 ▌ 上 ▌ 希望 ▌ 传达 ▌ 一个 ▌ 主要 ▌ 信息 ▌：▌“▌ 美国 ▌ 回到 ▌ 国际舞台 ▌ 了 ▌”▌。▌
▌
▌ 风口浪尖 ▌ 上 ▌ 的 ▌ 疫情 ▌ 起源 ▌ 调查 ▌
▌"▌ 武汉 ▌ 实验室 ▌ 泄露 ▌"▌ 的 ▌ 病毒 ▌ 起源 ▌ 论 ▌ 近日 ▌ 再 ▌ 掀 ▌ 波澜 ▌，▌ 拜登 ▌ 下令 ▌ 美国 ▌ 情报机构 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌，▌ 并 ▌ 在 ▌90▌ 天 ▌ 内 ▌ 提交 ▌ 报告 ▌。▌ 但 ▌ 在 ▌ 调查 ▌ 这 ▌ 一 ▌ 猜测 ▌ 方面 ▌，▌ 美国 ▌ 并未 ▌ 得到 ▌ 盟友 ▌ 的 ▌ 明确 ▌ 支持 ▌。▌
▌
▌ 新 ▌ 冠 ▌ 病毒 ▌ 溯源 ▌ 再起波澜 ▌：▌ 白宫 ▌ 为 ▌ 福 ▌ 奇 ▌ 辩护 ▌ ▌ 福 ▌ 奇 ▌ 称 ▌ 中国 ▌ 研究 ▌ 人员 ▌“▌ 值得 ▌ 信赖 ▌”▌
▌ 美国 ▌ 总统 ▌ 拜登 ▌ 下令 ▌ 情报部门 ▌ 加快 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 源头 ▌
▌
▌ 视频 ▌ 加注 ▌ 文字 ▌，▌
▌2▌ 月 ▌3▌ 日 ▌，▌WHO▌ 新 ▌ 冠 ▌ 溯源 ▌ 团队 ▌ 访问 ▌ 武汉 ▌ 病毒 ▌ 研究所 ▌。▌
▌
▌ 在 ▌G7▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌BBC▌ 北美 ▌ 总编 ▌ 乔 ▌·▌ 索 ▌ 普尔 ▌（▌Jon▌ ▌Sopel▌）▌ 采访 ▌ 了 ▌ 白宫 ▌ 国家 ▌ 安全 ▌ 顾问 ▌ 沙利文 ▌（▌Jake▌ ▌Sullivan▌）▌，▌ 问及 ▌ 美国 ▌ 是否 ▌ 在 ▌“▌ 实验室 ▌ 起源 ▌”▌ 调查 ▌ 中 ▌ 缺乏 ▌ 支持 ▌。▌
▌
▌“▌ 我 ▌ 不 ▌ 认为 ▌ 我们 ▌ 是 ▌ 独自 ▌ 行动 ▌，▌”▌ 沙利文 ▌ 称 ▌，▌ 欧盟 ▌、▌ 英国 ▌、▌ 澳大利亚 ▌ 都 ▌ 表态 ▌ 支持 ▌“▌ 可靠 ▌、▌ 独立 ▌ 的 ▌ 国际 ▌ 调查 ▌”▌，▌ 在 ▌ 病毒 ▌ 起源 ▌ 问题 ▌ 上 ▌“▌ 追根究底 ▌”▌。▌
▌
▌ 沙利文 ▌ 同时 ▌ 否认 ▌ 美国 ▌ 在 ▌“▌ 疫苗 ▌ 外交 ▌”▌ 上 ▌ 落后 ▌ 俄罗斯 ▌ 与 ▌ 中国 ▌，▌ 他 ▌ 表示 ▌ 在 ▌ 全球 ▌ 疫情 ▌ 结束 ▌ 时 ▌，▌ 世界 ▌ 会 ▌ 见证 ▌“▌ 美国 ▌ 与 ▌ 西方 ▌ 民主 ▌ 国家 ▌ 将 ▌ 是 ▌ 终结 ▌ 疫情 ▌ 的 ▌ 主要 ▌ 力量 ▌”▌，▌ 而且 ▌ 美国 ▌ 向 ▌ 全球 ▌ 提供 ▌ 高质量 ▌ 疫苗 ▌，▌ 并非 ▌ 出于 ▌ 获得 ▌ 地缘 ▌ 政治 ▌ 的 ▌ 好处 ▌。▌
▌
▌“▌ 我们 ▌ 会 ▌ 以 ▌ 行动 ▌ 证明 ▌，▌ 今 ▌ 时 ▌ 今日 ▌ 美国 ▌ 能够 ▌ 采取有效 ▌ 行动 ▌ 来 ▌ 解决 ▌ 影响 ▌ 全球 ▌ 的 ▌ 问题 ▌，▌”▌ 沙利文 ▌ 对 ▌BBC▌ 表示 ▌。▌
▌
▌ 中国外交部 ▌ 发言人 ▌ 汪文斌 ▌ 则 ▌ 在 ▌6▌ 月 ▌10▌ 日 ▌ 较 ▌ 早前 ▌ 的 ▌ 记者会 ▌ 上 ▌ 称 ▌，▌ 武汉 ▌ 实验室 ▌ 泄漏 ▌ 病毒 ▌ 纯属 ▌ 谣言 ▌。▌ 他 ▌ 还 ▌ 将 ▌ 美国 ▌ 政客 ▌ 与 ▌ 媒体 ▌“▌ 炒作 ▌ 实验室 ▌ 泄露 ▌ 起源 ▌ 论 ▌”▌ 与 ▌ 美国 ▌ 发动 ▌ 伊拉克 ▌ 战争 ▌ 前 ▌ 宣称 ▌“▌ 伊拉克 ▌ 拥有 ▌ 大规模 ▌ 杀伤性 ▌
武器 ▌”▌ 的 ▌ 往 ▌ 绩 ▌ 相提并论 ▌。▌
▌
▌“▌ 将 ▌ 溯源 ▌ 政治化 ▌ 服务 ▌ 的 ▌ 是 ▌ 美 ▌ 一 ▌ 己 ▌ 私利 ▌，▌”▌ ▌ 汪文斌 ▌ 称 ▌。

---

### segment

[npm package](https://www.npmjs.com/package/segment)

**Segmentation result** Took 290.4535 milliseconds:

七国 ▌ 集团 ▌（▌G▌7▌）▌ 首脑 ▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌ 美国总统 ▌ 拜 ▌ 登 ▌ 与 ▌ 英国 ▌ 首相 ▌ 约翰逊 ▌ 在 ▌ 周四 ▌（▌6 月 10 日 ▌）▌ 会晤 ▌。▌ 两国 ▌ 在 ▌ 会后 ▌ 联合声明 ▌ 中 ▌ 强调 ▌，▌ 支 ▌ 持 ▌ 对 ▌“▌ 包括 ▌ 中国 ▌ 在内 ▌”▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 展开 ▌ 独立 ▌ 调查 ▌。▌ 约翰逊
▌ 与 ▌ 拜 ▌ 登 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌（▌Cornwall▌）▌ 会面 ▌，▌ 这是 ▌ 两 ▌ 人 ▌ 首度 ▌ 举行 ▌ 面对面 ▌ 的 ▌ 会议 ▌。▌ 会后 ▌ 两国 ▌ 政府 ▌ 发表 ▌ 联合声明 ▌，▌ 表明 ▌ 英美 ▌ 支持 ▌ 下一阶段 ▌ 由 ▌ 世界卫生组织 ▌ 召集 ▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 研究 ▌，▌ 当 ▌ 中将 ▌ 有 ▌“▌ 及时 ▌、▌ 透明 ▌、▌ 讲
求 ▌ 证据 ▌ 的 ▌ 独立 ▌ 流程 ▌，▌ 包括 ▌ 在 ▌ 中国 ▌，▌ 以及 ▌ 在 ▌ 未来 ▌ 调查 ▌ 起源 ▌ 不明 ▌ 的 ▌ 疫情 ▌。▌”▌ 联合声明 ▌ 全文 ▌ 只有 ▌ 此 ▌ 处 ▌ 提及 ▌ 中国 ▌，▌ 但 ▌ 多处 ▌ 暗示 ▌ 英美 ▌ 将 ▌ 联合 ▌ 其他 ▌ 民主 ▌ 国家 ▌ 抗衡 ▌ 中国 ▌。▌ 声明 ▌ 的 ▌ 第 ▌ 一部分 ▌ 聚焦 ▌ 民主 ▌、▌ 人权 ▌ 与 ▌ 多边 ▌ 主义 ▌
，▌ 强调 ▌ 两国 ▌“▌ 支持 ▌ 开放 ▌ 社会 ▌ 及 ▌ 全球 ▌ 各地 ▌ 的 ▌ 民主 ▌”▌。▌ 同日 ▌，▌ 欧盟 ▌ 也 ▌ 作出 ▌ 类似 ▌ 支持 ▌ 病毒 ▌ 起源 ▌ 调查 ▌ 的 ▌ 表态 ▌。▌ 欧盟 ▌ 执委 ▌ 会 ▌ 主席 ▌ 冯德莱恩 ▌（▌Ursula▌von▌der▌Leyen▌）▌ 在 ▌ 新闻发布会 ▌ 上 ▌ 说 ▌，▌ 有必要 ▌ 了解 ▌ 新 ▌ 冠 ▌ 疫情 ▌ 的 ▌ 起源 ▌。
▌“▌ 调查 ▌ 人员 ▌ 需要 ▌ 有 ▌ 充分的 ▌ 权限 ▌，▌ 能够 ▌ 进入 ▌ 任何 ▌ 必要的 ▌ 地方 ▌，▌ 以便 ▌ 真正 ▌ 找到 ▌ 这次 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌”▌ 欧盟 ▌ 与 ▌ 英美 ▌ 领袖 ▌ 分别 ▌ 在 ▌G▌7▌ 峰会 ▌ 前夕 ▌ 作 ▌ 上述 ▌ 表态 ▌，▌ 可见 ▌ 中国 ▌ 与 ▌ 疫情 ▌ 起源 ▌ 调查 ▌ 将 ▌ 是 ▌ 议程 ▌ 中的 ▌ 重要 ▌ 部分 ▌。▌G▌7▌ 峰
会 ▌ 将 ▌ 在 ▌ 本周 ▌ 五 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌ 召开 ▌，▌ 这是 ▌ 国际 ▌ 政治 ▌ 领袖 ▌ 在 ▌ 疫情 ▌ 暴发 ▌ 后 ▌ 首次 ▌ 聚首 ▌。▌ 此行 ▌ 亦 ▌ 是 ▌ 拜 ▌ 登 ▌ 上台 ▌ 以来 ▌ 的 ▌ 首次 ▌ 外访 ▌，▌ 外界 ▌ 普遍 ▌ 解读 ▌ 他 ▌ 在 ▌ 峰会 ▌ 上 ▌ 希望 ▌ 传达 ▌ 一个 ▌ 主要 ▌ 信息 ▌：▌“▌ 美国 ▌ 回到 ▌ 国际 ▌ 舞台 ▌ 了 ▌”▌。▌ 风口
浪尖 ▌ 上 ▌ 的 ▌ 疫情 ▌ 起源 ▌ 调查 ▌"▌ 武汉 ▌ 实验室 ▌ 泄露 ▌"▌ 的 ▌ 病毒 ▌ 起源 ▌ 论 ▌ 近日 ▌ 再掀 ▌ 波澜 ▌，▌ 拜 ▌ 登 ▌ 下令 ▌ 美国 ▌ 情报机构 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌，▌ 并 ▌ 在 ▌90▌ 天 ▌ 内 ▌ 提交 ▌ 报 ▌ 告 ▌。▌ 但 ▌ 在 ▌ 调查 ▌ 这 ▌ 一 ▌ 猜测 ▌ 方面 ▌，▌ 美国 ▌ 并未 ▌ 得到 ▌ 盟友 ▌ 的 ▌ 明确 ▌ 支持 ▌
。▌ 新 ▌ 冠 ▌ 病毒 ▌ 溯源 ▌ 再起 ▌ 波澜 ▌：▌ 白宫 ▌ 为 ▌ 福奇 ▌ 辩护 ▌ 福奇 ▌ 称 ▌ 中国 ▌ 研究人员 ▌“▌ 值得 ▌ 信赖 ▌”▌ 美国总统 ▌ 拜 ▌ 登 ▌ 下令 ▌ 情报 ▌ 部门 ▌ 加快 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 源头 ▌ 视频 ▌ 加注 ▌ 文字 ▌，▌2 月 3 日 ▌，▌WHO▌ 新 ▌ 冠 ▌ 溯源 ▌ 团队 ▌ 访问 ▌ 武汉 ▌ 病毒 ▌ 研究所 ▌。▌ 在 ▌G▌7▌
峰会 ▌ 召开 ▌ 前夕 ▌，▌BBC▌ 北美 ▌ 总编 ▌ 乔·▌ 索 ▌ 普尔 ▌（▌Jon▌Sopel▌）▌ 采访 ▌ 了 ▌ 白宫 ▌ 国家安全 ▌ 顾问 ▌ 沙利文 ▌（▌Jake▌Sullivan▌）▌，▌ 问及 ▌ 美国 ▌ 是否 ▌ 在 ▌“▌ 实验室 ▌ 起源 ▌”▌ 调查 ▌ 中 ▌ 缺乏 ▌ 支持 ▌。▌“▌ 我 ▌ 不 ▌ 认为 ▌ 我们 ▌ 是 ▌ 独自 ▌ 行动 ▌，▌”▌ 沙利文 ▌ 称 ▌，▌ 欧
盟 ▌、▌ 英国 ▌、▌ 澳大利亚 ▌ 都 ▌ 表态 ▌ 支持 ▌“▌ 可靠 ▌、▌ 独立的 ▌ 国际 ▌ 调查 ▌”▌，▌ 在 ▌ 病毒 ▌ 起源 ▌ 问题 ▌ 上 ▌“▌ 追根究底 ▌”▌。▌ 沙利文 ▌ 同时 ▌ 否认 ▌ 美国 ▌ 在 ▌“▌ 疫苗 ▌ 外交 ▌”▌ 上 ▌ 落后 ▌ 俄罗斯 ▌ 与 ▌ 中国 ▌，▌ 他 ▌ 表示 ▌ 在 ▌ 全球 ▌ 疫情 ▌ 结束 ▌ 时 ▌，▌ 世界 ▌ 会 ▌ 见证 ▌“▌ 美国 ▌
与 ▌ 西方 ▌ 民主 ▌ 国家 ▌ 将 ▌ 是 ▌ 终结 ▌ 疫情 ▌ 的 ▌ 主要 ▌ 力量 ▌”▌，▌ 而且 ▌ 美国 ▌ 向 ▌ 全球 ▌ 提供 ▌ 高 ▌ 质量 ▌ 疫苗 ▌，▌ 并非 ▌ 出于 ▌ 获得 ▌ 地缘 ▌ 政治 ▌ 的 ▌ 好处 ▌。▌“▌ 我们 ▌ 会 ▌ 以 ▌ 行动 ▌ 证明 ▌，▌ 今时 ▌ 今日 ▌ 美国 ▌ 能够 ▌ 采取 ▌ 有效 ▌ 行动 ▌ 来 ▌ 解决 ▌ 影响 ▌ 全球 ▌ 的 ▌ 问题 ▌，▌”▌ 沙利
文 ▌ 对 ▌BBC▌ 表示 ▌。▌ 中国 ▌ 外交部发言人 ▌ 汪文斌 ▌ 则 ▌ 在 ▌6 月 10 日 ▌ 较 ▌ 早前 ▌ 的 ▌ 记者 ▌ 会上 ▌ 称 ▌，▌ 武汉 ▌ 实验室 ▌ 泄漏 ▌ 病毒 ▌ 纯属 ▌ 谣言 ▌。▌ 他 ▌ 还 ▌ 将 ▌ 美国 ▌ 政客 ▌ 与 ▌ 媒体 ▌“▌ 炒作 ▌ 实验室 ▌ 泄露 ▌ 起源 ▌ 论 ▌”▌ 与 ▌ 美国 ▌ 发动 ▌ 伊拉克 ▌ 战争 ▌ 前 ▌ 宣称 ▌“▌ 伊拉克 ▌ 拥有 ▌
大规模 ▌ 杀伤性 ▌ 武器 ▌”▌ 的 ▌ 往绩 ▌ 相提并论 ▌。▌“▌ 将 ▌ 溯源 ▌ 政治 ▌ 化 ▌ 服务 ▌ 的 ▌ 是 ▌ 美 ▌ 一己 ▌ 私利 ▌，▌”▌ 汪文斌 ▌ 称 ▌。

---

### novel-segment

[npm package](https://www.npmjs.com/package/novel-segment)

**Segmentation result** Took 501.9743 milliseconds:

七国 ▌ 集团 ▌（▌G▌7▌）▌ 首脑 ▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌ 美 ▌ 国 ▌ 总统 ▌ 拜 ▌ 登 ▌ 与 ▌ 英国 ▌ 首相 ▌ 约翰 ▌ 逊 ▌ 在 ▌ 周四 ▌（▌6 月 ▌10 日 ▌）▌ 会晤 ▌。▌ 两国 ▌ 在 ▌ 会后 ▌ 联合 ▌ 声明 ▌ 中 ▌ 强调 ▌，▌ 支持 ▌ 对 ▌“▌ 包括 ▌ 中国 ▌ 在内 ▌”▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 展开 ▌ 独立 ▌ 调查
▌。▌

▌ 约翰 ▌ 逊 ▌ 与 ▌ 拜 ▌ 登 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌（▌Cornwall▌）▌ 会面 ▌，▌ 这是 ▌ 两人 ▌ 首度 ▌ 举行 ▌ 面对面 ▌ 的 ▌ 会议 ▌。▌

▌ 会后 ▌ 两国 ▌ 政府 ▌ 发表 ▌ 联合 ▌ 声明 ▌，▌ 表明 ▌ 英 ▌ 美 ▌ 支持 ▌ 下一阶段 ▌ 由 ▌ 世界 ▌ 卫生 ▌ 组织 ▌ 召集 ▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 研究 ▌，▌ 当中 ▌ 将 ▌ 有 ▌“▌ 及时 ▌、▌ 透明 ▌、▌ 讲求 ▌ 证据 ▌ 的 ▌ 独立 ▌ 流程 ▌，▌ 包括 ▌ 在 ▌ 中国 ▌，▌ 以及 ▌ 在 ▌ 未来 ▌ 调查 ▌ 起源 ▌ 不明 ▌ 的 ▌ 疫情 ▌。▌”▌

▌ 联合 ▌ 声明 ▌ 全文 ▌ 只有 ▌ 此 ▌ 处 ▌ 提及 ▌ 中国 ▌，▌ 但 ▌ 多 ▌ 处 ▌ 暗示 ▌ 英 ▌ 美 ▌ 将 ▌ 联合 ▌ 其他 ▌ 民主国 ▌ 家 ▌ 抗衡 ▌ 中国 ▌。▌

▌ 声明 ▌ 的 ▌ 第 ▌ 一部分 ▌ 聚焦 ▌ 民主 ▌、▌ 人权 ▌ 与 ▌ 多边 ▌ 主义 ▌，▌ 强调 ▌ 两国 ▌“▌ 支持 ▌ 开放 ▌ 社会 ▌ 及 ▌ 全球 ▌ 各地 ▌ 的 ▌ 民主 ▌”▌。▌

▌ 同日 ▌，▌ 欧盟 ▌ 也 ▌ 作出 ▌ 类似 ▌ 支持 ▌ 病毒 ▌ 起源 ▌ 调查 ▌ 的 ▌ 表态 ▌。▌

▌ 欧盟 ▌ 执委会 ▌ 主席 ▌ 冯德 ▌ 莱 ▌ 恩 ▌（▌Ursula▌ ▌von▌ ▌der▌ ▌Leyen▌）▌ 在 ▌ 新闻 ▌ 发 ▌ 布 ▌ 会上 ▌ 说 ▌，▌ 有 ▌ 必要 ▌ 了解 ▌ 新 ▌ 冠 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌“▌ 调查 ▌ 人员 ▌ 需要 ▌ 有 ▌ 充分 ▌ 的 ▌ 权限 ▌，▌ 能够 ▌ 进入 ▌ 任何 ▌ 必要 ▌ 的 ▌ 地方 ▌，▌ 以便 ▌ 真正 ▌ 找到 ▌ 这次 ▌ 疫情 ▌ 的 ▌ 起源 ▌
。▌”▌

▌ 欧盟 ▌ 与 ▌ 英 ▌ 美 ▌ 领袖 ▌ 分别 ▌ 在 ▌G▌7▌ 峰会 ▌ 前夕 ▌ 作 ▌ 上述 ▌ 表态 ▌，▌ 可见 ▌ 中国 ▌ 与 ▌ 疫情 ▌ 起源 ▌ 调查 ▌ 将 ▌ 是 ▌ 议程 ▌ 中 ▌ 的 ▌ 重要 ▌ 部分 ▌。▌G▌7▌ 峰会 ▌ 将 ▌ 在 ▌ 本周 ▌ 五 ▌ 在 ▌ 英国 ▌ 康沃尔 ▌ 召开 ▌，▌ 这是 ▌ 国际 ▌ 政治 ▌ 领袖 ▌ 在 ▌ 疫情 ▌ 暴发 ▌ 后 ▌ 首次 ▌ 聚首 ▌。▌

▌ 此行 ▌ 亦 ▌ 是 ▌ 拜 ▌ 登 ▌ 上台 ▌ 以来 ▌ 的 ▌ 首次 ▌ 外访 ▌，▌ 外界 ▌ 普遍 ▌ 解读 ▌ 他 ▌ 在 ▌ 峰会 ▌ 上 ▌ 希望 ▌ 传达 ▌ 一个 ▌ 主要 ▌ 信息 ▌：▌“▌ 美 ▌ 国 ▌ 回到 ▌ 国际 ▌ 舞台 ▌ 了 ▌”▌。▌

▌ 风口浪尖 ▌ 上 ▌ 的 ▌ 疫情 ▌ 起源 ▌ 调查 ▌
▌"▌ 武汉 ▌ 实验室 ▌ 泄露 ▌"▌ 的 ▌ 病毒 ▌ 起源 ▌ 论 ▌ 近日 ▌ 再 ▌ 掀 ▌ 波澜 ▌，▌ 拜 ▌ 登 ▌ 下令 ▌ 美 ▌ 国 ▌ 情报 ▌ 机构 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌，▌ 并 ▌ 在 ▌90 天 ▌ 内 ▌ 提交 ▌ 报告 ▌。▌ 但 ▌ 在 ▌ 调查 ▌ 这 ▌ 一 ▌ 猜测 ▌ 方面 ▌，▌ 美 ▌ 国 ▌ 并未 ▌ 得到 ▌ 盟友 ▌ 的 ▌ 明确 ▌ 支持 ▌。▌

▌ 新 ▌ 冠 ▌ 病毒 ▌ 溯源 ▌ 再起 ▌ 波澜 ▌：▌ 白宫 ▌ 为 ▌ 福 ▌ 奇 ▌ 辩护 ▌ ▌ 福 ▌ 奇 ▌ 称 ▌ 中国 ▌ 研究 ▌ 人员 ▌“▌ 值得 ▌ 信赖 ▌”▌
▌ 美 ▌ 国 ▌ 总统 ▌ 拜 ▌ 登 ▌ 下令 ▌ 情报 ▌ 部门 ▌ 加快 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 源头 ▌

▌ 视频 ▌ 加注 ▌ 文字 ▌，▌
▌2 月 ▌3 日 ▌，▌WHO▌ 新 ▌ 冠 ▌ 溯源 ▌ 团队 ▌ 访问 ▌ 武汉 ▌ 病毒 ▌ 研究所 ▌。▌

▌ 在 ▌G▌7▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌BBC▌ 北 ▌ 美 ▌ 总 ▌ 编 ▌ 乔 ▌·▌ 索 ▌ 普尔 ▌（▌Jon▌ ▌Sopel▌）▌ 采 ▌ 访 ▌ 了 ▌ 白宫 ▌ 国家 ▌ 安全 ▌ 顾问 ▌ 沙 ▌ 利 ▌ 文 ▌（▌Jake▌ ▌Sullivan▌）▌，▌ 问及 ▌ 美 ▌ 国是 ▌ 否 ▌ 在 ▌“▌ 实验室 ▌ 起源 ▌”▌ 调查 ▌ 中 ▌ 缺乏 ▌ 支持 ▌。▌

▌“▌ 我 ▌ 不 ▌ 认为 ▌ 我们 ▌ 是 ▌ 独自 ▌ 行动 ▌，▌”▌ 沙 ▌ 利 ▌ 文 ▌ 称 ▌，▌ 欧盟 ▌、▌ 英国 ▌、▌ 澳 ▌ 大 ▌ 利亚 ▌ 都 ▌ 表态 ▌ 支持 ▌“▌ 可靠 ▌、▌ 独立 ▌ 的 ▌ 国际 ▌ 调查 ▌”▌，▌ 在 ▌ 病毒 ▌ 起源 ▌ 问题 ▌ 上 ▌“▌ 追根究底 ▌”▌。▌

▌ 沙 ▌ 利 ▌ 文 ▌ 同时 ▌ 否认 ▌ 美 ▌ 国 ▌ 在 ▌“▌ 疫苗 ▌ 外交 ▌”▌ 上 ▌ 落 ▌ 后 ▌ 俄罗斯 ▌ 与 ▌ 中国 ▌，▌ 他 ▌ 表示 ▌ 在 ▌ 全球 ▌ 疫情 ▌ 结束 ▌ 时 ▌，▌ 世界 ▌ 会 ▌ 见证 ▌“▌ 美 ▌ 国 ▌ 与 ▌ 西方 ▌ 民主 ▌ 国家 ▌ 将 ▌ 是 ▌ 终结 ▌ 疫情 ▌ 的 ▌ 主要 ▌ 力量 ▌”▌，▌ 而且 ▌ 美 ▌ 国 ▌ 向 ▌ 全球 ▌ 提供 ▌ 高 ▌ 质量 ▌ 疫苗 ▌，▌ 并非 ▌ 出 ▌ 于 ▌ 获得 ▌ 地缘 ▌ 政治 ▌ 的 ▌ 好处 ▌。▌

▌“▌ 我们 ▌ 会 ▌ 以 ▌ 行动 ▌ 证明 ▌，▌ 今 ▌ 时 ▌ 今日 ▌ 美 ▌ 国 ▌ 能够 ▌ 采 ▌ 取 ▌ 有效 ▌ 行动 ▌ 来 ▌ 解决 ▌ 影响 ▌ 全球 ▌ 的 ▌ 问题 ▌，▌”▌ 沙 ▌ 利 ▌ 文对 ▌BBC▌ 表示 ▌。▌

▌ 中国 ▌ 外交部 ▌ 发言人 ▌ 汪 ▌ 文斌则 ▌ 在 ▌6 月 ▌10 日 ▌ 较 ▌ 早前 ▌ 的 ▌ 记者 ▌ 会上 ▌ 称 ▌，▌ 武汉 ▌ 实验室 ▌ 泄漏 ▌ 病毒 ▌ 纯属 ▌ 谣言 ▌。▌ 他 ▌ 还 ▌ 将 ▌ 美 ▌ 国 ▌ 政客 ▌ 与 ▌ 媒体 ▌“▌ 炒作 ▌ 实验室 ▌ 泄露 ▌ 起源 ▌ 论 ▌”▌ 与 ▌ 美 ▌ 国 ▌ 发 ▌ 动 ▌ 伊拉克 ▌ 战争 ▌ 前 ▌ 宣称 ▌“▌ 伊拉克 ▌ 拥有 ▌ 大规模 ▌ 杀伤性
▌ 武器 ▌”▌ 的 ▌ 往 ▌ 绩 ▌ 相提并论 ▌。▌

▌“▌ 将 ▌ 溯源 ▌ 政治 ▌ 化 ▌ 服务 ▌ 的 ▌ 是 ▌ 美 ▌ 一己 ▌ 私利 ▌，▌”▌ ▌ 汪文斌 ▌ 称 ▌。

---

### hanzi-tools

[npm package](https://www.npmjs.com/package/hanzi-tools)

**Segmentation result** Took 593.7139 milliseconds:

七国集团 ▌（▌G▌7▌）▌ 首脑 ▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌ 美国 ▌ 总统 ▌ 拜登 ▌ 与 ▌ 英国 ▌ 首相 ▌ 约翰逊 ▌ 在 ▌ 周四 ▌（▌6▌ 月 ▌1▌0▌ 日 ▌）▌ 会晤 ▌。▌ 两 ▌ 国 ▌ 在 ▌ 会 ▌ 后 ▌ 联合声明 ▌ 中 ▌ 强调 ▌，▌ 支持 ▌ 对 ▌“▌ 包括 ▌ 中国 ▌ 在内 ▌”▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 展开 ▌ 独立 ▌ 调查 ▌
。▌
▌
▌ 约翰逊 ▌ 与 ▌ 拜登 ▌ 在 ▌ 英国 ▌ 康 ▌ 沃 ▌ 尔 ▌（▌C▌o▌r▌n▌w▌a▌l▌l▌）▌ 会面 ▌，▌ 这 ▌ 是 ▌ 两 ▌ 人 ▌ 首度 ▌ 举行 ▌ 面对面 ▌ 的 ▌ 会议 ▌。▌
▌
▌ 会 ▌ 后 ▌ 两国 ▌ 政府 ▌ 发表 ▌ 联合声明 ▌，▌ 表明 ▌ 英 ▌ 美 ▌ 支持 ▌ 下 ▌ 一 ▌ 阶段 ▌ 由 ▌ 世界卫生组织 ▌ 召集 ▌ 的 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌ 研究 ▌，▌ 当中 ▌ 将 ▌ 有 ▌“▌ 及时 ▌、▌ 透明 ▌、▌ 讲求 ▌ 证据 ▌ 的 ▌ 独立 ▌ 流程 ▌，▌ 包括 ▌ 在 ▌ 中国 ▌，▌ 以及 ▌ 在 ▌ 未来 ▌ 调查 ▌ 起源 ▌ 不明 ▌ 的 ▌ 疫情 ▌。▌”▌  
▌
▌ 联合声明 ▌ 全文 ▌ 只 ▌ 有 ▌ 此处 ▌ 提及 ▌ 中国 ▌，▌ 但 ▌ 多 ▌ 处 ▌ 暗示 ▌ 英 ▌ 美 ▌ 将 ▌ 联合 ▌ 其他 ▌ 民主 ▌ 国家 ▌ 抗衡 ▌ 中国 ▌。▌
▌
▌ 声明 ▌ 的 ▌ 第一 ▌ 部分 ▌ 聚焦 ▌ 民主 ▌、▌ 人权 ▌ 与 ▌ 多边 ▌ 主义 ▌，▌ 强调 ▌ 两 ▌ 国 ▌“▌ 支持 ▌ 开放 ▌ 社会 ▌ 及 ▌ 全球 ▌ 各地 ▌ 的 ▌ 民主 ▌”▌。▌
▌
▌ 同日 ▌，▌ 欧盟 ▌ 也 ▌ 作出 ▌ 类似 ▌ 支持 ▌ 病毒 ▌ 起源 ▌ 调查 ▌ 的 ▌ 表态 ▌。▌
▌
▌ 欧盟 ▌ 执委会 ▌ 主席 ▌ 冯 ▌ 德 ▌ 莱 ▌ 恩 ▌（▌U▌r▌s▌u▌l▌a▌ ▌v▌o▌n▌ ▌d▌e▌r▌ ▌L▌e▌y▌e▌n▌）▌ 在 ▌ 新闻 ▌ 发布会 ▌ 上 ▌ 说 ▌，▌ 有 ▌ 必要 ▌ 了解 ▌ 新 ▌ 冠 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌“▌ 调查 ▌ 人员 ▌ 需要 ▌ 有 ▌ 充分 ▌ 的 ▌ 权限 ▌，▌ 能够 ▌ 进入 ▌ 任何 ▌ 必要 ▌ 的 ▌ 地方 ▌，▌ 以便 ▌ 真正 ▌ 找到 ▌ 这 ▌ 次 ▌ 疫情 ▌ 的 ▌ 起源 ▌。▌”▌
▌
▌ 欧盟 ▌ 与 ▌ 英 ▌ 美 ▌ 领袖 ▌ 分别 ▌ 在 ▌G▌7▌ 峰会 ▌ 前夕 ▌ 作 ▌ 上述 ▌ 表态 ▌，▌ 可见 ▌ 中国 ▌ 与 ▌ 疫情 ▌ 起源 ▌ 调查 ▌ 将 ▌ 是 ▌ 议程 ▌ 中 ▌ 的 ▌ 重要 ▌ 部分 ▌。▌G▌7▌ 峰会 ▌ 将 ▌ 在 ▌ 本 ▌ 周五 ▌ 在 ▌ 英国 ▌ 康 ▌ 沃 ▌ 尔 ▌ 召开 ▌，▌ 这 ▌ 是 ▌ 国际 ▌ 政治 ▌ 领袖 ▌ 在 ▌ 疫情 ▌ 暴发 ▌ 后 ▌ 首次 ▌ 聚首 ▌。▌
▌
▌ 此 ▌ 行 ▌ 亦 ▌ 是 ▌ 拜 ▌ 登上 ▌ 台 ▌ 以来 ▌ 的 ▌ 首次 ▌ 外 ▌ 访 ▌，▌ 外界 ▌ 普遍 ▌ 解读 ▌ 他 ▌ 在 ▌ 峰会 ▌ 上 ▌ 希望 ▌ 传达 ▌ 一 ▌ 个 ▌ 主要 ▌ 信息 ▌：▌“▌ 美国 ▌ 回到 ▌ 国际 ▌ 舞台 ▌ 了 ▌”▌。▌
▌
▌ 风口浪尖 ▌ 上 ▌ 的 ▌ 疫情 ▌ 起源 ▌ 调查 ▌
▌"▌ 武汉 ▌ 实验室 ▌ 泄露 ▌"▌ 的 ▌ 病毒 ▌ 起源 ▌ 论 ▌ 近日 ▌ 再 ▌ 掀 ▌ 波澜 ▌，▌ 拜登 ▌ 下令 ▌ 美国 ▌ 情报 ▌ 机构 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 起源 ▌，▌ 并 ▌ 在 ▌9▌0▌ 天 ▌ 内 ▌ 提交 ▌ 报告 ▌。▌ 但 ▌ 在 ▌ 调查 ▌ 这 ▌ 一 ▌ 猜测 ▌ 方面 ▌，▌ 美国 ▌ 并 ▌ 未 ▌ 得到 ▌ 盟友 ▌ 的 ▌ 明确 ▌ 支持 ▌。▌
▌
▌ 新 ▌ 冠 ▌ 病毒 ▌ 溯源 ▌ 再起 ▌ 波澜 ▌：▌ 白宫 ▌ 为 ▌ 福 ▌ 奇 ▌ 辩护 ▌ ▌ 福 ▌ 奇 ▌ 称 ▌ 中国 ▌ 研究 ▌ 人员 ▌“▌ 值得 ▌ 信赖 ▌”▌
▌ 美国 ▌ 总统 ▌ 拜登 ▌ 下令 ▌ 情报 ▌ 部门 ▌ 加快 ▌ 彻查 ▌ 新 ▌ 冠 ▌ 病毒 ▌ 源头 ▌
▌
▌ 视频 ▌ 加注 ▌ 文字 ▌，▌
▌2▌ 月 ▌3▌ 日 ▌，▌W▌H▌O▌ 新 ▌ 冠 ▌ 溯源 ▌ 团队 ▌ 访问 ▌ 武汉 ▌ 病毒 ▌ 研究所 ▌。▌
▌
▌ 在 ▌G▌7▌ 峰会 ▌ 召开 ▌ 前夕 ▌，▌B▌B▌C▌ 北美 ▌ 总编 ▌ 乔 ▌·▌ 索 ▌ 普 ▌ 尔 ▌（▌J▌o▌n▌ ▌S▌o▌p▌e▌l▌）▌ 采访 ▌ 了 ▌ 白宫 ▌ 国家 ▌ 安全 ▌ 顾问 ▌ 沙 ▌ 利 ▌ 文 ▌（▌J▌a▌k▌e▌ ▌S▌u▌l▌l▌i▌v▌a▌n▌）▌，▌ 问 ▌ 及 ▌ 美国 ▌ 是否 ▌ 在 ▌“▌ 实验室 ▌ 起源 ▌”▌ 调查 ▌ 中 ▌ 缺乏 ▌ 支持 ▌。▌
▌
▌“▌ 我 ▌ 不 ▌ 认为 ▌ 我们 ▌ 是 ▌ 独自 ▌ 行动 ▌，▌”▌ 沙 ▌ 利 ▌ 文 ▌ 称 ▌，▌ 欧盟 ▌、▌ 英国 ▌、▌ 澳大利亚 ▌ 都 ▌ 表态 ▌ 支持 ▌“▌ 可靠 ▌、▌ 独立 ▌ 的 ▌ 国际 ▌ 调查 ▌”▌，▌ 在 ▌ 病毒 ▌ 起源 ▌ 问题 ▌ 上 ▌“▌ 追根究底 ▌”▌。▌
▌
▌ 沙 ▌ 利 ▌ 文 ▌ 同时 ▌ 否认 ▌ 美国 ▌ 在 ▌“▌ 疫苗 ▌ 外交 ▌”▌ 上 ▌ 落后 ▌ 俄罗斯 ▌ 与 ▌ 中国 ▌，▌ 他 ▌ 表示 ▌ 在 ▌ 全球 ▌ 疫情 ▌ 结束 ▌ 时 ▌，▌ 世界 ▌ 会 ▌ 见证 ▌“▌ 美国 ▌ 与 ▌ 西方 ▌ 民主 ▌ 国家 ▌ 将 ▌ 是 ▌ 终结 ▌ 疫情 ▌ 的 ▌ 主要 ▌ 力量 ▌”▌，▌ 而且 ▌ 美国 ▌ 向 ▌ 全球 ▌ 提供 ▌ 高质量 ▌ 疫苗 ▌，▌ 并非 ▌ 出于 ▌ 获
得 ▌ 地缘 ▌ 政治 ▌ 的 ▌ 好处 ▌。▌
▌
▌“▌ 我们 ▌ 会 ▌ 以 ▌ 行动 ▌ 证明 ▌，▌ 今 ▌ 时 ▌ 今日 ▌ 美国 ▌ 能够 ▌ 采取 ▌ 有效 ▌ 行动 ▌ 来 ▌ 解决 ▌ 影响 ▌ 全球 ▌ 的 ▌ 问题 ▌，▌”▌ 沙 ▌ 利 ▌ 文 ▌ 对 ▌B▌B▌C▌ 表示 ▌。▌
▌
▌ 中国 ▌ 外交部 ▌ 发言人 ▌ 汪 ▌ 文 ▌ 斌 ▌ 则 ▌ 在 ▌6▌ 月 ▌1▌0▌ 日 ▌ 较 ▌ 早前 ▌ 的 ▌ 记者会 ▌ 上 ▌ 称 ▌，▌ 武汉 ▌ 实验室 ▌ 泄漏 ▌ 病毒 ▌ 纯属 ▌ 谣言 ▌。▌ 他 ▌ 还 ▌ 将 ▌ 美国 ▌ 政客 ▌ 与 ▌ 媒体 ▌“▌ 炒作 ▌ 实验室 ▌ 泄露 ▌ 起源 ▌ 论 ▌”▌ 与 ▌ 美国 ▌ 发动 ▌ 伊拉克 ▌ 战争 ▌ 前 ▌ 宣称 ▌“▌ 伊拉克 ▌ 拥有 ▌ 大规模 ▌ 杀伤
▌ 性 ▌ 武器 ▌”▌ 的 ▌ 往 ▌ 绩 ▌ 相提并论 ▌。▌
▌
▌“▌ 将 ▌ 溯源 ▌ 政治化 ▌ 服务 ▌ 的 ▌ 是 ▌ 美 ▌ 一 ▌ 己 ▌ 私利 ▌，▌”▌ ▌ 汪 ▌ 文 ▌ 斌 ▌ 称 ▌。
