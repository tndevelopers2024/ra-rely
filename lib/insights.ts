import fs from "node:fs";
import path from "node:path";

/**
 * Article stubs live in content/insights/*.mdx with YAML front-matter.
 *
 * Only the front-matter is read here. Every body is still `TODO: draft` —
 * bodies carry commercial and regulatory claims and are the client's to write.
 * Wire an MDX pipeline to render bodies once real drafts land.
 */

const DIR = path.join(process.cwd(), "content", "insights");

export type Article = {
  title: string;
  slug: string;
  status: string;
  /** Empty until the client drafts it — never generated here. */
  summary: string;
  author: string;
  reviewed: string;
  relatedService: string;
  relatedServiceLabel: string;
};

const FIELDS: (keyof Article)[] = [
  "title",
  "slug",
  "status",
  "summary",
  "author",
  "reviewed",
  "relatedService",
  "relatedServiceLabel",
];

/** Minimal front-matter reader — the format is ours and stays `key: "value"`. */
function parseFrontMatter(raw: string, file: string): Article {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    throw new Error(`Missing front-matter in ${file}`);
  }

  const values: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z][A-Za-z0-9_]*):\s*(.*)$/);
    if (!pair) continue;
    values[pair[1]] = pair[2].trim().replace(/^"(.*)"$/, "$1");
  }

  for (const field of FIELDS) {
    if (!(field in values)) {
      throw new Error(`Missing "${field}" in front-matter of ${file}`);
    }
  }

  return values as unknown as Article;
}

export function getArticles(): Article[] {
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => parseFrontMatter(fs.readFileSync(path.join(DIR, file), "utf8"), file))
    .sort((a, b) => a.title.localeCompare(b.title, "en-AU"));
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

/** True while the body is still a stub — drives the draft banner and noindex. */
export function isDraft(article: Article): boolean {
  return article.status !== "published";
}
