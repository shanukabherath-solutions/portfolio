"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { isPlaceholderValue } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function ProfilePanel() {
  return (
    <div className="glass w-full max-w-md rounded-2xl p-1">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-3 font-mono text-xs text-ink-faint">profile.json</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-ink-dim">
        <code>
          <span className="text-ink-faint">{"{"}</span>
          {"\n  "}
          <span className="text-blue">&quot;name&quot;</span>
          <span className="text-ink-faint">: </span>
          <span className="text-cyan">&quot;{siteConfig.name}&quot;</span>
          <span className="text-ink-faint">,</span>
          {"\n  "}
          <span className="text-blue">&quot;role&quot;</span>
          <span className="text-ink-faint">: </span>
          <span className="text-cyan">&quot;Software &amp; AI Developer&quot;</span>
          <span className="text-ink-faint">,</span>
          {"\n  "}
          <span className="text-blue">&quot;focus&quot;</span>
          <span className="text-ink-faint">: [</span>
          <span className="text-cyan">&quot;Web&quot;</span>
          <span className="text-ink-faint">, </span>
          <span className="text-cyan">&quot;AI&quot;</span>
          <span className="text-ink-faint">, </span>
          <span className="text-cyan">&quot;Security&quot;</span>
          <span className="text-ink-faint">],</span>
          {"\n  "}
          <span className="text-blue">&quot;specialisation&quot;</span>
          <span className="text-ink-faint">: </span>
          <span className="text-cyan">&quot;AI Engineering &amp; DevSecOps&quot;</span>
          <span className="text-ink-faint">,</span>
          {"\n  "}
          <span className="text-blue">&quot;status&quot;</span>
          <span className="text-ink-faint">: </span>
          <span className="text-purple">&quot;open_to_work&quot;</span>
          {"\n"}
          <span className="text-ink-faint">{"}"}</span>
          <span className="ml-0.5 inline-block h-[15px] w-[7px] translate-y-[2px] animate-caret bg-cyan/70" />
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const cvReady = !isPlaceholderValue(siteConfig.cvUrl);

  return (
    <section
      id="home"
      className="relative flex min-h-[92dvh] items-center overflow-hidden border-b border-line-soft pt-16"
    >
      <div className="ambient-field" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
        >
          <motion.p variants={item} className="font-mono text-sm text-cyan/80">
            $ whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {siteConfig.heroHeadline}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-display text-lg text-ink-dim sm:text-xl">
            {siteConfig.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim">
            {siteConfig.heroSubhead}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" icon={<ArrowUpRight size={16} aria-hidden="true" />}>
              View My Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-dim"
          >
            {[
              { label: "GitHub", href: siteConfig.social.github, Icon: Github },
              { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
            ].map(({ label, href, Icon }) =>
              isPlaceholderValue(href) ? (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-ink-faint"
                  title={`${label} link not yet added`}
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </span>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </a>
              ),
            )}
            {cvReady ? (
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
              >
                <FileText size={16} aria-hidden="true" /> CV / Resume
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 text-ink-faint"
                title="CV link not yet added"
              >
                <FileText size={16} aria-hidden="true" /> CV / Resume
              </span>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <ProfilePanel />
        </motion.div>
      </div>
    </section>
  );
}
