import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Code2, Mail, Menu, Sparkles, X } from "lucide-react";
import "./styles.css";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "图提取 ImageGrab",
    type: "Chrome Extension",
    description: "从电商详情页提取商品图片，支持预览、筛选和批量 PNG 下载。",
    tags: ["Manifest V3", "JavaScript", "Chrome API"],
    href: "https://github.com/czj-oss/image-grabber"
  },
  {
    number: "02",
    title: "AI 编程练习场",
    type: "Learning Tool",
    description: "将需求、迭代、测试和 Git 版本管理串成可复用的实践流程。",
    tags: ["React", "Vite", "Product Thinking"],
    href: "#contact"
  },
  {
    number: "03",
    title: "数据可视化实验",
    type: "Interactive Web",
    description: "用清晰的交互把复杂数据变成可以探索和理解的页面。",
    tags: ["TypeScript", "Canvas", "UX"],
    href: "#contact"
  }
];

const skills = [
  { name: "Frontend", detail: "React · TypeScript · CSS", level: "核心" },
  { name: "AI Coding", detail: "Codex · Prompt · Debug", level: "实践" },
  { name: "Product", detail: "PRD · UX · Iteration", level: "方法" },
  { name: "Tooling", detail: "Git · Vite · Chrome API", level: "工程" }
];

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let stars: Array<{ x: number; y: number; radius: number; alpha: number; speed: number }> = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 640 ? 55 : 110;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.35,
        alpha: Math.random() * 0.65 + 0.15,
        speed: Math.random() * 0.002 + 0.0005
      }));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        const shimmer = reduceMotion ? 1 : 0.72 + Math.sin(time * star.speed) * 0.28;
        context.beginPath();
        context.fillStyle = `rgba(188, 213, 255, ${star.alpha * shimmer})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="starfield" ref={canvasRef} aria-hidden="true" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("2985297017@qq.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <Starfield />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页"><span className="wordmark-dot" /> CZJ / 26</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="打开导航菜单">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="页面导航">
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#notes" onClick={() => setMenuOpen(false)}>笔记</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>联系我 <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal-in">
            <p className="eyebrow"><Sparkles size={15} /> FRONTEND / AI CODING / PRODUCT</p>
            <h1>把想法做成<br /><span>能被使用的东西。</span></h1>
            <p className="hero-intro">我是蔡子靖，一名正在成长中的前端开发者。我喜欢把复杂的问题拆成清晰的界面，把 AI 变成可靠的协作伙伴。</p>
            <div className="hero-actions"><a className="button button-bright" href="#work">查看项目 <ArrowUpRight size={16} /></a><a className="text-link" href="#about">了解我的工作方式 <span>↓</span></a></div>
          </div>
          <div className="hero-aside reveal-in delay-1"><div className="orbit-card"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="avatar-core">CZJ</div><span className="orbit-label label-one">BUILD</span><span className="orbit-label label-two">LEARN</span><span className="orbit-label label-three">ITERATE</span></div><p className="aside-caption">一个持续学习、持续交付的个人实验室</p></div>
        </section>

        <section className="section container" id="about">
          <div className="section-label"><span>01</span><span>关于我 / ABOUT</span></div>
          <div className="about-grid"><h2>用产品思维理解代码，<br /><em>用代码验证想法。</em></h2><div className="about-copy"><p>我正在学习如何从需求研究开始，完成 PRD、技术设计、开发、测试和部署。相比一次生成一大段代码，我更在意每一轮修改是否真的让产品变得更好。</p><p>目前关注前端开发、AI 编程工具和轻量产品设计，希望把课堂中的练习逐渐变成真实可用的作品。</p><div className="mini-facts"><span>基于中国 · 学习中</span><span>开放合作 · 认真交付</span></div></div></div>
        </section>

        <section className="section section-line container" id="skills">
          <div className="section-label"><span>02</span><span>技能 / TOOLKIT</span></div>
          <div className="skill-grid">{skills.map((skill) => <article className="skill-item" key={skill.name}><span className="skill-level">{skill.level}</span><h3>{skill.name}</h3><p>{skill.detail}</p></article>)}</div>
        </section>

        <section className="section container" id="work">
          <div className="section-label"><span>03</span><span>项目 / SELECTED WORK</span></div>
          <div className="work-list">{projects.map((project) => <a className="project-row" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><div className="project-title-line"><h3>{project.title}</h3><ArrowUpRight size={19} /></div><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-type">{project.type}</span></a>)}</div>
        </section>

        <section className="section section-line container" id="notes">
          <div className="section-label"><span>04</span><span>笔记 / NOTES</span></div>
          <div className="notes-grid"><article><span>2026.10.19 / AI CODING</span><h3>从一句需求到一个能发布的小工具</h3><p>记录需求拆解、迭代验证和 GitHub Pages 部署过程。</p><a href="#contact">阅读摘要 <ArrowUpRight size={15} /></a></article><article><span>2026.10.18 / DEBUG</span><h3>遇到 Bug 时，先让问题变得可观察</h3><p>把控制台、请求和实际行为放在同一张问题地图上。</p><a href="#contact">阅读摘要 <ArrowUpRight size={15} /></a></article></div>
        </section>

      <section className="contact-section container" id="contact"><div className="contact-inner"><div><p className="eyebrow">05 / CONTACT</p><h2>有想法，<br /><span>就从一句话开始。</span></h2></div><div className="contact-actions"><button className="email-button" type="button" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />} {copied ? "邮箱已复制" : "2985297017@qq.com"}</button><div className="social-links"><a href="https://github.com/czj-oss" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a><a href="#top">回到顶部 ↑</a></div></div></div></section>
      </main>
      <footer className="site-footer container"><span>© 2026 蔡子靖</span><span>Built with curiosity, care and code.</span></footer>
    </div>
  );
}

export default App;
