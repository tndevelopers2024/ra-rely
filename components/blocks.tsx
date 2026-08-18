import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Hero({
  eyebrow,
  headline,
  body,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-warm-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <p className="text-advisory-gold font-bold tracking-widest uppercase text-sm mb-6 border-b border-advisory-gold/30 pb-4 inline-block">
          {eyebrow}
        </p>
        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-rely-navy mb-8 leading-[1.1]">
          {headline}
        </h1>
        <p className="text-lg lg:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCtaHref}
            className={buttonVariants({ size: "lg" })}
          >
            {primaryCtaText} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <div className="border-y border-cloud-grey bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-semibold text-rely-navy">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-advisory-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProblemGrid({
  problems,
}: {
  problems: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {problems.map((prob, i) => (
        <div
          key={i}
          className="bg-cloud-grey p-8 rounded-sm border-t-2 border-advisory-gold/50"
        >
          <h3 className="text-xl font-heading font-bold text-rely-navy mb-4">
            {prob.title}
          </h3>
          <p className="text-charcoal/80">{prob.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="bg-white p-8 rounded-sm border border-cloud-grey shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
      <h3 className="text-xl font-heading font-bold text-rely-navy mb-4 group-hover:text-advisory-gold transition-colors">
        {title}
      </h3>
      <p className="text-charcoal/80 mb-8 flex-1">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-rely-navy font-semibold text-sm flex items-center group-hover:text-advisory-gold transition-colors"
        >
          Learn more <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
}

export function StepFlow({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {steps.map((step, i) => (
        <div key={i} className="relative">
          <div className="text-5xl font-heading font-bold text-warm-ivory mb-4 absolute -top-8 -left-4 -z-10">
            {i + 1}
          </div>
          <h3 className="text-xl font-heading font-bold text-rely-navy mb-3">
            {step.title}
          </h3>
          <p className="text-charcoal/80 text-sm">{step.description}</p>
          {i < steps.length - 1 && (
            <div className="hidden xl:block absolute top-6 right-0 w-8 h-[1px] bg-advisory-gold/30 translate-x-4" />
          )}
        </div>
      ))}
    </div>
  );
}

export function CalloutBanner({
  title,
  text,
  ctaText,
  ctaHref,
}: {
  title: string;
  text: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <div className="bg-rely-navy text-white p-12 lg:p-16 rounded-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-advisory-gold" />
      <div className="max-w-3xl">
        <h3 className="text-3xl font-heading font-bold mb-6 text-warm-ivory">
          {title}
        </h3>
        <p className="text-lg text-cloud-grey/90 leading-relaxed mb-8">
          {text}
        </p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className={buttonVariants({
              variant: "primary",
              className: "bg-advisory-gold text-rely-navy hover:bg-white",
            })}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
}

export function CTASection({
  title,
  text,
  buttonText,
  buttonHref,
  microcopy,
}: {
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  microcopy?: string;
}) {
  return (
    <section className="py-24 bg-warm-ivory text-center border-t border-advisory-gold/20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-rely-navy mb-6">
          {title}
        </h2>
        <p className="text-xl text-charcoal/80 mb-10 leading-relaxed">{text}</p>
        <Link href={buttonHref} className={buttonVariants({ size: "lg" })}>
          {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        {microcopy && (
          <p className="text-sm text-charcoal/60 mt-6 italic">{microcopy}</p>
        )}
      </div>
    </section>
  );
}
