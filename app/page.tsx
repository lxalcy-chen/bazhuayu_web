"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  FileSpreadsheet,
  LineChart,
  Network,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  UsersRound,
  WalletCards,
  Workflow,
  Zap
} from "lucide-react";
import { motion, useInView, useMotionValue, useMotionValueEvent, useSpring, type Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 }
};

const transition: Transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 18 });
  const [rounded, setRounded] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useMotionValueEvent(spring, "change", (latest) => setRounded(Math.round(latest)));

  return (
    <span ref={ref}>
      {rounded}
      {suffix}
    </span>
  );
}

const advantages = [
  {
    icon: WalletCards,
    title: "算清楚赚没赚钱",
    summary: "自动计算平台、店铺、SKU 的真实利润，卖得好不好、赚不赚钱一眼看清。",
    bullets: ["广告费、退款、扣点、成本一起算", "每天更新利润排行", "找出高销量低利润商品"],
    metric: "T+1",
    metricLabel: "利润自动更新",
    badge: "利润核算"
  },
  {
    icon: ShieldAlert,
    title: "排查并预警财务风险",
    summary: "持续扫描税负、回款、退款、库存、毛利率等异常，提前提醒老板处理。",
    bullets: ["税负异常提前提醒", "回款差异自动排查", "退款和库存风险主动预警"],
    metric: "30+",
    metricLabel: "风险指标",
    badge: "风险扫描"
  },
  {
    icon: UsersRound,
    title: "AI 数字员工替你干活",
    summary: "自动取数、对账、做表、生成日报周报，把团队从重复劳动里解放出来。",
    bullets: ["自动拉取多平台数据", "自动生成经营报表", "异常情况主动推送"],
    metric: "80%",
    metricLabel: "重复工作可自动化",
    badge: "自动执行"
  },
  {
    icon: BrainCircuit,
    title: "智慧大脑综合分析",
    summary: "综合销售、利润、投流、库存、售后和财务数据，给出可执行的经营建议。",
    bullets: ["解释利润变化原因", "发现可优化的渠道和 SKU", "把数据变成下一步动作"],
    metric: "100+",
    metricLabel: "经营分析模型",
    badge: "智能分析"
  }
];

const platformGroups = [
  { title: "电商平台", items: ["淘宝", "天猫", "京东", "抖音", "拼多多", "小红书", "视频号", "快手"] },
  { title: "财务系统", items: ["用友", "金蝶", "电子税务局", "企业网银"] },
  { title: "ERP / 经营系统", items: ["聚水潭", "旺店通", "管易云", "有赞"] },
  { title: "经营表格", items: ["销售日报", "资金日报", "库存明细", "利润表"] }
];

const skillCards = [
  { logo: "/logos/taobao.png", platform: "淘宝", title: "商品数据采集", text: "自动采集销量、价格、评价、库存等商品数据。" },
  { logo: "/logos/tmall.png", platform: "天猫", title: "店铺经营日报", text: "汇总销售、利润、退款和广告消耗，自动生成日报。" },
  { logo: "/logos/jd.png", platform: "京东", title: "竞品价格监控", text: "跟踪竞品价格、促销和排名变化，辅助调价。" },
  { logo: "/logos/douyin.png", platform: "抖音", title: "投流 ROI 分析", text: "拆解直播、短视频、千川投放带来的利润回报。" },
  { logo: "/logos/pinduoduo.png", platform: "拼多多", title: "低价爆品预警", text: "监控低价竞争、毛利压缩和异常退款风险。" },
  { logo: "/logos/xiaohongshu.svg", platform: "小红书", title: "详情页主图优化", text: "分析素材表现，给出主图、卖点和种草内容建议。" }
];

const platformOrbit = [
  { name: "淘宝", logo: "/logos/taobao.png", x: 50, y: 10 },
  { name: "得物", logo: "/logos/dewu.png", x: 78, y: 18 },
  { name: "京东", logo: "/logos/jd.png", x: 88, y: 50 },
  { name: "抖音", logo: "/logos/douyin.png", x: 78, y: 82 },
  { name: "拼多多", logo: "/logos/pinduoduo.png", x: 50, y: 90 },
  { name: "小红书", logo: "/logos/xiaohongshu.svg", x: 22, y: 82 },
  { name: "视频号", logo: "/logos/weixin.png", x: 12, y: 50 },
  { name: "快手", logo: "/logos/kuaishou.png", x: 22, y: 18 }
];

const marketPains = [
  {
    icon: ShieldAlert,
    title: "政策合规硬约束",
    text: "平台涉税报送、金税四期推进，财务合规核算已经成为经营底线。以前能模糊处理的账，现在越来越不能模糊。"
  },
  {
    icon: TrendingUp,
    title: "流量红利见顶",
    text: "获客成本持续上涨，粗放投流越来越难赚钱。GMV 还在增长，但利润可能已经被广告费吃掉。"
  },
  {
    icon: WalletCards,
    title: "经营成本全面升高",
    text: "人工、平台扣点、仓储物流、售后退款持续增加。卖得越多，账越复杂，真实利润越难看清。"
  },
  {
    icon: Network,
    title: "多平台经营成为常态",
    text: "淘宝、抖音、拼多多、小红书、视频号等平台并行经营，数据分散割裂。老板、财务、运营各看各的数，决策容易失真。"
  }
];

const architectureCards = [
  {
    icon: BrainCircuit,
    image: "/ai-digital-brain.png",
    title: "AI 数字大脑",
    role: "分析、判断、决策",
    text: "把平台、财务、投流、库存、售后数据统一接进来，自动看利润、找风险、判断增长机会。",
    points: ["经营数据自动归集", "利润风险自动分析", "关键动作自动建议"]
  },
  {
    icon: UsersRound,
    image: "/ai-digital-workers.png",
    title: "AI 数字员工",
    role: "执行、处理、干活",
    text: "把取数、对账、做表、预警、投放分析、库存监控这些重复工作接过去，老板只看结果。",
    points: ["不用学复杂系统", "日常任务自动执行", "异常情况主动提醒"]
  }
];

const details = [
  {
    id: "profit",
    icon: WalletCards,
    label: "利润核算",
    title: "卖得多不等于赚得多，八爪鱼帮你算到 SKU",
    text: "平台扣点、广告费、退款、物流仓储、采购成本和人工费用都会影响真实利润。八爪鱼 AI 把这些数据统一归集，自动生成平台、店铺、SKU 多维利润表。",
    results: ["每天看到真实净利润", "知道钱赚在哪个店、哪个品、哪个渠道", "发现爆款背后的隐性亏损"],
    caseTitle: "爆款不赚钱，当天被识别",
    caseText: "某家电品牌发现一个销量前三的 SKU 净利率只有 2.8%。系统拆解后显示，主要原因是投流成本上升和售后退款偏高。团队调整预算和售后策略后，两周内净利率回升到 8% 以上。"
  },
  {
    id: "risk",
    icon: ShieldAlert,
    label: "风险预警",
    title: "税负、回款、退款、库存异常，提前发现",
    text: "财务风险往往藏在日常经营数据里。八爪鱼 AI 持续扫描税负偏离、平台回款差异、退款率异常、库存周转变慢和现金流压力，并定位到具体平台、店铺或商品。",
    results: ["风险提前提醒，少被动救火", "对账差异快速定位", "库存和现金流压力更早看见"],
    caseTitle: "退款异常提前预警",
    caseText: "某服饰商家一款新品连续 7 天退款率高于店铺均值 35%。系统提醒后，运营排查发现尺码描述和详情页不一致，及时修改页面并调整客服话术，避免问题继续扩大。"
  },
  {
    id: "worker",
    icon: UsersRound,
    label: "数字员工",
    title: "报表、对账、取数、提醒，AI 每天自动做",
    text: "过去需要财务、运营反复拉表、拼表、对账、追数。八爪鱼 AI 可以自动完成取数、清洗、对账、报表生成、异常提醒和经营摘要。",
    results: ["日报周报自动生成", "减少人工复制粘贴", "老板不用反复追数据"],
    caseTitle: "每天省下 3 到 4 小时",
    caseText: "某多店铺团队原来每天需要财务和运营花 3 到 4 小时整理报表。接入后，系统每天早上自动生成经营日报，打开就能看到销售、利润、投流、库存和异常提醒。"
  },
  {
    id: "brain",
    icon: BrainCircuit,
    label: "运营分析",
    title: "不只看数据，更能分析原因、给出动作",
    text: "八爪鱼 AI 会综合销售、利润、投流、库存、售后和财务数据，判断销售为什么下降、利润为什么变薄、投放是否值得继续加码。",
    results: ["分析销售和利润变化原因", "给出商品、价格、投流优化建议", "辅助老板做经营决策"],
    caseTitle: "销量上涨但利润下降，被 AI 拆出原因",
    caseText: "某美妆品牌 GMV 连续增长，但利润没有同步提升。系统分析后指出：投流 ROI 下降、赠品成本升高、部分渠道退款率偏高。团队调整渠道预算后，整体利润率提升 4.6 个百分点。"
  }
];

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-70" />
      <motion.div
        className="scan-line absolute left-0 top-28 h-px w-full"
        animate={{ x: ["-30%", "30%"], opacity: [0.12, 0.45, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="scan-line absolute bottom-32 left-0 h-px w-full"
        animate={{ x: ["24%", "-24%"], opacity: [0.08, 0.32, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  description,
  center = false
}: {
  kicker: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="mb-4 text-sm font-semibold text-blue-600">{kicker}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_48%,#dff2ff_100%)] px-5 py-6">
      <BackgroundGrid />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)]">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">八爪鱼 AI Agent</p>
            <p className="text-xs text-slate-500">多功能电商经营 Agent</p>
          </div>
        </div>
        <a href="#cta" className="hidden rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur md:inline-flex">
          预约演示
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <motion.h1
            className="text-balance text-6xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            八爪鱼・AI Agent
          </motion.h1>
          <motion.div
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-xl font-semibold text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)] sm:text-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.18 }}
          >
            以业财数据为核心的电商 Agent
          </motion.div>
          <motion.p
            className="mt-8 text-balance text-3xl font-semibold leading-tight text-blue-700 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.26 }}
          >
            电商的 AI 合伙人：让 AI 接管你的企业
          </motion.p>
          <motion.div
            className="mt-10 grid max-w-xl gap-4"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.34 }}
          >
            {[
              ["经营决策效率提升", 80, "%+"],
              ["实现人工成本降低", 30, "%+"],
              ["数据资产效益提升", 99, "%"]
            ].map(([label, value, suffix]) => (
              <div key={label as string} className="flex items-center gap-4 text-lg text-slate-600">
                <CheckCircle2 className="shrink-0 text-blue-600" size={24} />
                <span>{label}</span>
                <strong className="text-2xl font-semibold text-slate-950">
                  <CountUp value={value as number} suffix={suffix as string} />
                </strong>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.44 }}
          >
            <a href="#digital-manager" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(37,99,235,0.28)]">
              查看四大能力 <ArrowRight size={16} />
            </a>
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/75 px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              预约产品演示
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden min-h-[520px] lg:block"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute right-0 top-8 h-[420px] w-[720px] rounded-[36px] border border-blue-100 bg-white/42 shadow-[0_34px_100px_rgba(37,99,235,0.16)] backdrop-blur-xl" />
          <div className="absolute right-12 top-20 w-[620px] rounded-[28px] border border-blue-100 bg-white/64 p-5 shadow-[0_24px_70px_rgba(37,99,235,0.16)] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
                <span className="h-3 w-3 rounded-full bg-slate-200" />
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">AI 巡店中</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["利润", "风险", "投流"].map((item, index) => (
                <div key={item} className="rounded-2xl bg-blue-50/80 p-4">
                  <p className="text-xs text-slate-500">{item}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{["¥86.4万", "7条", "3.7x"][index]}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 h-48 rounded-2xl border border-blue-100 bg-white/78 p-4">
              <div className="flex h-full items-end gap-3">
                {[42, 68, 52, 86, 64, 104, 78].map((height, index) => (
                  <motion.div
                    key={index}
                    className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-300"
                    animate={{ height: [height * 0.72, height, height * 0.82] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.12 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarketPressureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)]" />
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-balance text-4xl font-semibold tracking-tight text-blue-700 sm:text-6xl">
            电商流量红利时代结束，现在是 AI 化、合规化时代
          </p>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            为什么你的电商生意越来越难做？
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {marketPains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 0.06}>
              <div className="feature-card flex h-full flex-col p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)]">
                  <pain.icon size={23} />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{pain.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{pain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 rounded-[28px] border border-blue-100 bg-blue-600 px-6 py-6 text-center shadow-[0_24px_70px_rgba(37,99,235,0.20)] sm:px-10">
            <p className="text-balance text-xl font-semibold leading-8 text-white sm:text-2xl">
              电商企业需要从“看 GMV”升级到“看利润、看风险、看现金流”，用 AI 把分散的经营数据重新组织起来。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold text-blue-600">产品架构</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            一个八爪鱼 AI，就是一个电商运营团队
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            AI 数字大脑负责分析决策，AI 数字员工负责执行干活。老板不用学复杂系统，打开就能看到结果。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {architectureCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="feature-card flex h-full flex-col overflow-hidden p-4">
                <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-blue-50">
                  <img src={item.image} alt={`${item.title}示意图`} className="aspect-[16/9] w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)]">
                      <item.icon size={23} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-blue-600">{item.role}</p>
                    </div>
                  </div>
                  <p className="leading-8 text-slate-600">{item.text}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="shrink-0 text-blue-600" size={16} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-8 rounded-[28px] border border-blue-100 bg-slate-950 px-6 py-7 text-center shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-10">
            <p className="text-balance text-2xl font-semibold leading-9 text-white sm:text-4xl">
              从看数据、找问题、做决策，到拉表、对账、提醒、执行，八爪鱼 AI 一站式解决电商运营难题。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DigitalManagerSection() {
  return (
    <section id="digital-manager" className="bg-white px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="AI 数字店长"
          title="四大能力，覆盖电商经营核心工作"
          description="从利润核算到风险预警，从自动做表到运营分析，八爪鱼 AI 把原来分散在财务、运营、投流和供应链里的工作集中处理。"
          center
        />
        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="h-full">
            <div className="glass-panel flex h-full overflow-hidden p-3">
              <img
                src="/ai-digital-manager-illustration.png"
                alt="AI 数字店长连接电商平台、财务、库存和风险预警数据"
                className="min-h-[360px] w-full rounded-[26px] object-cover object-center lg:min-h-[640px]"
              />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="feature-card flex h-full flex-col p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_34px_rgba(37,99,235,0.26)]">
                      <item.icon size={23} />
                    </div>
                    <div className="rounded-full border border-blue-100 bg-blue-50/90 px-4 py-2 text-right shadow-[0_8px_22px_rgba(37,99,235,0.12)]">
                      <p className="text-xl font-semibold leading-none text-blue-700">{item.metric}</p>
                      <p className="mt-1 whitespace-nowrap text-xs font-semibold text-blue-600">{item.metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
                  <div className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectionMap() {
  const systemNodes = ["聚水潭", "旺店通", "用友", "金蝶", "Excel"];
  const outputNodes = ["利润看板", "风险预警", "经营日报", "AI 建议"];

  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden p-5 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(37,99,235,0.16),transparent_48%)]" />
      <div className="relative grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <linearGradient id="tentacleGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.78" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            {platformOrbit.map((node, index) => (
              <motion.path
                key={node.name}
                d={`M50 50 C ${50 + (node.x - 50) * 0.18} ${50 + (node.y - 50) * 0.48}, ${50 + (node.x - 50) * 0.72} ${50 + (node.y - 50) * 0.72}, ${node.x} ${node.y}`}
                fill="none"
                stroke="url(#tentacleGradient)"
                strokeWidth="2.25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.06 }}
              />
            ))}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white/86 shadow-[0_28px_90px_rgba(37,99,235,0.22)] backdrop-blur-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-3 rounded-full border-2 border-blue-200 border-r-cyan-400 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative text-center">
              <Network className="mx-auto mb-2 text-blue-600" size={31} />
              <p className="text-lg font-semibold text-slate-950">八爪鱼 AI</p>
              <p className="mt-1 text-xs text-slate-500">全平台连接</p>
            </div>
          </motion.div>

          {platformOrbit.map((node, index) => (
            <motion.div
              key={node.name}
              className="absolute z-20 flex min-w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-blue-100 bg-white/90 px-3 py-2 shadow-[0_16px_45px_rgba(37,99,235,0.12)] backdrop-blur"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{ y: [0, index % 2 ? -5 : 5, 0] }}
              transition={{ duration: 4.4 + index * 0.12, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={node.logo} alt={`${node.name} logo`} className="h-7 w-7 rounded-md object-contain" />
              <span className="text-sm font-semibold text-slate-700">{node.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold text-blue-600">接入后自动输出</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {outputNodes.map((node) => (
              <div key={node} className="rounded-2xl border border-cyan-100 bg-white/82 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                {node}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-blue-100 bg-white/72 p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-slate-800">财务、ERP 和表格一起接入</p>
            <div className="flex flex-wrap gap-2">
              {systemNodes.map((node) => (
                <span key={node} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcosystemSection() {
  const points = [
    { icon: DatabaseZap, title: "主流平台都能接", text: "覆盖淘宝、天猫、京东、抖音、拼多多、小红书、视频号等常见经营阵地。" },
    { icon: FileSpreadsheet, title: "财务与 ERP 数据打通", text: "对接聚水潭、旺店通、用友、金蝶等系统，也能承接现有 Excel 管理方式。" },
    { icon: Building2, title: "多店铺多品牌统一看", text: "平台、店铺、品牌、SKU 可以统一分析，不用在多个后台之间来回切换。" },
    { icon: ClipboardCheck, title: "从手工表升级到自动经营", text: "取数、对账、报表、预警自动化，团队把时间花在判断和动作上。" }
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f9ff] px-5 py-24 sm:py-32">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="全链路接入能力"
          title="把分散在平台、系统和表格里的数据串起来"
          description="八爪鱼 AI 连接各大电商平台、ERP、财务系统和经营表格，自动整理成老板能直接使用的利润、风险、报表和建议。"
        />
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="feature-card h-full p-6">
                  <point.icon className="text-blue-600" size={28} />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{point.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex h-full flex-col gap-5">
            <Reveal className="flex-[1.2]" delay={0.08}>
              <ConnectionMap />
            </Reveal>
            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              {platformGroups.map((group, index) => (
                <Reveal key={group.title} className="h-full" delay={0.1 + index * 0.04}>
                  <div className="glass-panel flex h-full flex-col p-5">
                    <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                    <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-blue-100 bg-white/78 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillShowcase() {
  return (
    <Reveal>
      <div className="mt-10 rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-6 shadow-[0_26px_86px_rgba(18,80,160,0.10)]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-blue-600">海量技能，开箱即用</p>
            <h4 className="text-3xl font-semibold tracking-tight text-slate-950">常见电商工作，直接交给 AI 数字员工</h4>
          </div>
          <p className="max-w-xl leading-7 text-slate-600">
            围绕商品、投流、竞品、素材、客服和报表，预置常用 Skills，接入数据后即可组合使用。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCards.map((skill) => (
            <div key={`${skill.platform}-${skill.title}`} className="rounded-3xl border border-blue-100 bg-white/86 p-5 shadow-sm backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-sm">
                    <img src={skill.logo} alt={`${skill.platform} logo`} className="h-6 w-6 object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{skill.platform}</span>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Skill</span>
              </div>
              <h5 className="text-lg font-semibold text-slate-950">{skill.title}</h5>
              <p className="mt-3 leading-7 text-slate-600">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function DetailBlock({ detail, index }: { detail: (typeof details)[number]; index: number }) {
  const Icon = detail.icon;
  const reverse = index % 2 === 1;

  return (
    <div id={detail.id} className={`grid items-center gap-10 py-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            <Icon size={16} />
            {detail.label}
          </div>
          <h3 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{detail.title}</h3>
          <p className="mt-6 leading-8 text-slate-600">{detail.text}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {detail.results.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="glass-panel p-6">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue-600">客户场景</p>
              <h4 className="mt-2 text-2xl font-semibold text-slate-950">{detail.caseTitle}</h4>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)]">
              <Icon size={26} />
            </div>
          </div>
          <p className="leading-8 text-slate-600">{detail.caseText}</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["更新", index === 2 ? "自动" : "T+1"],
              ["定位", "店铺/SKU"],
              ["输出", "建议"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-blue-100 bg-white/78 p-4 text-center shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function DetailsSection() {
  return (
    <section id="details" className="bg-white px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="四大能力详解"
          title="从看清利润，到自动给出经营动作"
          description="围绕电商经营最关键的四件事，八爪鱼 AI 把数据汇总、利润核算、风险预警和运营分析连成完整闭环。"
          center
        />
        <div className="mt-6 divide-y divide-blue-100">
          {details.map((detail, index) => (
            <div key={detail.id}>
              <DetailBlock detail={detail} index={index} />
              {detail.id === "worker" ? <SkillShowcase /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  const fits = [
    "多平台、多店铺经营，数据分散在很多后台",
    "老板每天看 GMV，但看不清真实利润",
    "财务、运营、投流、供应链各看各的数据",
    "还在靠 Excel 拼报表，月底才知道赚亏",
    "想降低人工对账、做表、追数的时间成本",
    "希望从凭经验管理，升级到数据驱动经营"
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(56,189,248,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <p className="mb-4 text-sm font-semibold text-cyan-200">适用企业</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">从“人管表”升级到“AI 管经营”</h2>
          <p className="mt-6 text-lg leading-8 text-blue-50/72">
            接入八爪鱼后，老板不用等月底才知道赚亏，团队也不用每天重复做表。系统会持续更新利润、提醒异常、生成报表，并把关键经营动作推出来。
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2">
            {fits.map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_18px_52px_rgba(0,0,0,0.16)] backdrop-blur">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300 text-slate-950">
                  {index + 1}
                </div>
                <p className="leading-7 text-blue-50/86">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)] px-5 py-24 sm:py-32">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_18px_48px_rgba(37,99,235,0.28)]">
            <Zap size={26} />
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">让每一笔生意，都看得见风险，算得清利润</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            八爪鱼 AI 每天主动告诉你：哪里赚钱、哪里亏钱、哪里要马上处理，以及下一步该怎么调。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:demo@octopus-ai.local" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(37,99,235,0.28)]">
              预约产品演示 <ArrowRight size={16} />
            </a>
            <a href="#advantages" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/75 px-7 py-4 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              回看四大优势 <TrendingUp size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <MarketPressureSection />
      <ProductArchitectureSection />
      <DigitalManagerSection />
      <EcosystemSection />
      <DetailsSection />
      <FitSection />
      <CTASection />
    </main>
  );
}
