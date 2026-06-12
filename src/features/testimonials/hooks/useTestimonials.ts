import { useState, useEffect } from 'react';
import type { Testimonial } from '@/content/testimonials';

const SHEET_ID = '1Cu2_cImY8TmQn8dx9HaJajnPZdtiE6lL1B_-YUZ_n_4';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

interface GvizCol { label: string; type: string }
interface GvizCell { v: string | number | null; f?: string }
interface GvizRow { c: (GvizCell | null)[] }

function findCol(cols: GvizCol[], ...terms: string[]): number {
  return cols.findIndex((c) => terms.some((t) => c.label.toLowerCase().includes(t)));
}

function parseSheet(text: string): Testimonial[] {
  const json = text.slice(text.indexOf('(') + 1, text.lastIndexOf(')'));
  const { cols, rows }: { cols: GvizCol[]; rows: GvizRow[] } = JSON.parse(json).table;

  const nameIdx = findCol(cols, 'name');
  const quoteIdx = findCol(cols, 'feedback', 'review', 'testimonial', 'comment', 'describe', 'say', 'share');
  const ratingIdx = findCol(cols, 'rate', 'rating', 'overall', 'experience', 'score', 'stars');

  if (nameIdx === -1) return [];

  return rows.flatMap((row): Testimonial[] => {
    const rawName = row.c[nameIdx]?.v;
    if (!rawName) return [];

    const rawQuote = quoteIdx !== -1 ? (row.c[quoteIdx]?.v ?? '') : '';
    const rawRating = ratingIdx !== -1 ? row.c[ratingIdx]?.v : 5;

    return [{
      name: String(rawName).trim(),
      quote: rawQuote ? String(rawQuote).trim() : '',
      rating: Math.min(5, Math.max(1, Number(rawRating) || 5)),
    }];
  });
}

export function useTestimonials(fallback: Testimonial[]): Testimonial[] {
  const [data, setData] = useState<Testimonial[]>(fallback);

  useEffect(() => {
    fetch(GVIZ_URL)
      .then((r) => r.text())
      .then((text) => {
        const parsed = parseSheet(text);
        if (parsed.length > 0) setData(parsed);
      })
      .catch(() => undefined);
  }, []);

  return data;
}
