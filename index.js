import { performance } from "perf_hooks";

import tinySegmenter from "tiny-segmenter";

import hanziTools from "hanzi-tools";
import nodejieba from "nodejieba";
import Segment from "segment";
import nodersjieba from "@node-rs/jieba";
import NovelSegment from "novel-segment";

const getText = () => {
  return `七国集团（G7）首脑峰会召开前夕，美国总统拜登与英国首相约翰逊在周四（6月10日）会晤。两国在会后联合声明中强调，支持对“包括中国在内”的新冠病毒起源展开独立调查。

约翰逊与拜登在英国康沃尔（Cornwall）会面，这是两人首度举行面对面的会议。

会后两国政府发表联合声明，表明英美支持下一阶段由世界卫生组织召集的新冠病毒起源研究，当中将有“及时、透明、讲求证据的独立流程，包括在中国，以及在未来调查起源不明的疫情。”

联合声明全文只有此处提及中国，但多处暗示英美将联合其他民主国家抗衡中国。

声明的第一部分聚焦民主、人权与多边主义，强调两国“支持开放社会及全球各地的民主”。

同日，欧盟也作出类似支持病毒起源调查的表态。

欧盟执委会主席冯德莱恩（Ursula von der Leyen）在新闻发布会上说，有必要了解新冠疫情的起源。“调查人员需要有充分的权限，能够进入任何必要的地方，以便真正找到这次疫情的起源。”

欧盟与英美领袖分别在G7峰会前夕作上述表态，可见中国与疫情起源调查将是议程中的重要部分。G7峰会将在本周五在英国康沃尔召开，这是国际政治领袖在疫情暴发后首次聚首。

此行亦是拜登上台以来的首次外访，外界普遍解读他在峰会上希望传达一个主要信息：“美国回到国际舞台了”。

风口浪尖上的疫情起源调查
"武汉实验室泄露"的病毒起源论近日再掀波澜，拜登下令美国情报机构彻查新冠病毒起源，并在90天内提交报告。但在调查这一猜测方面，美国并未得到盟友的明确支持。

新冠病毒溯源再起波澜：白宫为福奇辩护 福奇称中国研究人员“值得信赖”
美国总统拜登下令情报部门加快彻查新冠病毒源头

视频加注文字，
2月3日，WHO新冠溯源团队访问武汉病毒研究所。

在G7峰会召开前夕，BBC北美总编乔·索普尔（Jon Sopel）采访了白宫国家安全顾问沙利文（Jake Sullivan），问及美国是否在“实验室起源”调查中缺乏支持。

“我不认为我们是独自行动，”沙利文称，欧盟、英国、澳大利亚都表态支持“可靠、独立的国际调查”，在病毒起源问题上“追根究底”。

沙利文同时否认美国在“疫苗外交”上落后俄罗斯与中国，他表示在全球疫情结束时，世界会见证“美国与西方民主国家将是终结疫情的主要力量”，而且美国向全球提供高质量疫苗，并非出于获得地缘政治的好处。

“我们会以行动证明，今时今日美国能够采取有效行动来解决影响全球的问题，”沙利文对BBC表示。

中国外交部发言人汪文斌则在6月10日较早前的记者会上称，武汉实验室泄漏病毒纯属谣言。他还将美国政客与媒体“炒作实验室泄露起源论”与美国发动伊拉克战争前宣称“伊拉克拥有大规模杀伤性武器”的往绩相提并论。

“将溯源政治化服务的是美一己私利，” 汪文斌称。`;
};

const testPerf = (cb) => {
  const t0 = performance.now();

  cb();

  const t1 = performance.now();
  console.log(`Took ${Number(t1 - t0).toFixed(4)} milliseconds\n`);
};

///////////////////////

console.log(`\nあ -- Japanese`);

testPerf(() => {
  const segmenterJa = new tinySegmenter();
  console.log(segmenterJa.segment("単語の配列が返る"));
});

///////////////////////

console.log(`\n个 -- Chinese`);
const exampleText = getText();

testPerf(() => {
  const segmenterZh1 = hanziTools;
  console.log(`1) hanzi-tools`, segmenterZh1.segment(exampleText).join("|"));
});

testPerf(() => {
  const segmenterZh2 = nodejieba;
  console.log(`2) nodejieba`, segmenterZh2.cut(exampleText).join("|"));
});

testPerf(() => {
  const segmenterZh3 = new Segment();
  segmenterZh3.useDefault();
  console.log(
    `3) segment`,
    segmenterZh3
      .doSegment(exampleText, {
        simple: true,
      })
      .join("|")
  );
});

testPerf(() => {
  const segmenterZh4 = nodersjieba;
  segmenterZh4.load();
  console.log(`4) nodersjieba`, segmenterZh4.cut(exampleText).join("|"));
});

testPerf(() => {
  const segmenterZh5 = new NovelSegment();
  segmenterZh5.useDefault();
  console.log(
    `5) novel-segment`,
    segmenterZh5
      .doSegment(exampleText, {
        simple: true,
      })
      .join("|")
  );
});
